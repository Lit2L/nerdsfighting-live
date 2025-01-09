import { NextApiRequest, NextApiResponse } from 'next'
// We need to instantiate a new Prisma client to update the order status. Notice
// that the objective of this webhook is to update the `order` status in our db.
// We use the `update` method from Prisma to update the order status.

import { buffer } from 'micro'
import Stripe from 'stripe'

import { env } from '@/env.mjs'
// import { PrismaClient } from '@prisma/client';
import { prisma } from '@/lib/db'
import { stripe } from '@/lib/stripe'

// Required to disable body parser, otherwise we get an error from Stripe.
export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // STRIPE: PARSING WEBHOOK PAYLOAD ⭐️
  const buf = await buffer(req)

  const sig = req.headers['stripe-signature']

  if (!sig) return res.status(400).send('Missing the stripe signature')

  let event: Stripe.Event
  // STRIPE: VERIFYING WEBHOOK SIGNATURE ⭐️
  try {
    event = stripe.webhooks.constructEvent(buf, sig, env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return res.status(400).send('Webhook error' + err)
  }
  // STRIPE: HANDLING INCOMING WEBHOOK EVENTS ⭐️
  // A 'switch' statement used to perform different actions based on different
  // conditions, that being handle different types of Stripe events. If a event
  // type matches a case, the code within that case statement is executed.
  switch (event.type) {
    // 1) CASE: PAYMENT INTENT CREATED
    // Here it means a new payment intent is created on Stripe. In this case, we
    // are simply logging that fact to the console.
    case 'payment_intent.created':
      const paymentIntent = event.data.object
      console.log('Payment intent was created')
      break
    // 2) CASE: UPDATE ORDER STATUS TO "COMPLETE"
    // Here a charge was just made at Stripe and it succeeded. In this case, we
    // update the corresponding order in our db from "pending" to "complete". We
    // use the `where` argument from Prisma to find the order by its payment ID.
    // We use the extracted `charge` object to get the payment intent ID, which
    // is the same as the payment intent ID we stored in our db when we created
    // the order. We use the `update` method to update the order status.
    case 'charge.succeeded':
      const charge = event.data.object as Stripe.Charge
      if (typeof charge.payment_intent === 'string') {
        const order = await prisma.order.update({
          where: { paymentIntentID: charge.payment_intent },
          data: { status: 'complete' }
        })
      }
      break
    // If the event type doesn't match any of the cases we prepared, we simply log
    // the event type to the console.
    default:
      console.log('Unhandled event type:' + event.type)
  }
  // STRIPE: ACKNOWLEDGING WEBHOOK EVENTS ⭐️
  // Send `res` response back to Stripe servers acknowledging successful receipt
  // of the webhook event. Importantly, because Stripe will continue to attempt
  // delivery for up to 3 days & if it doesn't receive a success response (HTTP
  // status codes 200-299). By sending response, we're letting Stripe know that
  // we successfully received the event so it doesn't need to continue retrying.
  // Note: this doesn't necessarily mean we've fully processed the event. If the
  // event's processing is time-consuming, consider handling it async to ensure
  // this acknowledgement is sent back to Stripe promptly.
  res.json({ received: true })
}
