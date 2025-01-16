import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '@/auth'

// PRISMA: BEST PRACTICE FOR INSTANTIATING PRISMA CLIENT WITH NEXT.JS ⭐️
// import { PrismaClient } from '@prisma/client';
import { prisma } from '@/lib/db'

export default async function handler(res: NextApiResponse, req: NextApiRequest) {
  if (req.method === 'GET') {
    try {
      // STRIPE: GET USER SESSION INFO FROM NEXTAUTH ⭐️
      // `getServerSession` function, when called within your API route handler,
      // will return user's session object if a session exists. It contains info
      // about the currently authenticated user, such as email, name, image, &
      // any other session data you've chosen to include.
      const user = await auth()
      if (!user) res.status(403).json({ message: 'User not logged in' })
      // FIND ALL USER ORDERS
      const orders = await prisma.order.findMany({
        where: { userId: (user?.user as any).id },
        include: { products: true }
      })
      res.status(200).json(orders)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
