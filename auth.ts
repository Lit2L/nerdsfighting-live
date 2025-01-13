import authConfig from '@/auth.config'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { UserRole } from '@prisma/client'
import NextAuth, { type DefaultSession } from 'next-auth'
import Stripe from 'stripe'

import { prisma } from '@/lib/db'
import { getUserById } from '@/lib/user'

// More info: https://authjs.dev/getting-started/typescript#module-augmentation
declare module 'next-auth' {
  interface Session {
    user: {
      role: UserRole
    } & DefaultSession['user']
  }
}

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt' },
  events: {
    createUser: async ({ user }) => {
      console.log('createUser', user)
      const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
        apiVersion: '2024-04-10'
      })
      const customer = await stripe.customers.create({
        email: user.email!,
        name: user.name!
      })
      await prisma.user.update({
        where: { email: user.email! },
        data: { stripeCustomerId: customer.id }
      })
    }
  },
  pages: {
    signIn: '/login'
    // error: "/auth/error",
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub
        }

        if (token.email) {
          session.user.email = token.email
        }

        if (token.role) {
          session.user.role = token.role
        }

        session.user.name = token.name
        session.user.email = token.email as string
        session.user.image = token.picture
      }

      return session
    },

    async jwt({ token }) {
      if (!token.sub) return token

      const dbUser = await getUserById(token.sub)

      if (!dbUser) return token

      token.name = dbUser.name
      token.email = dbUser.email
      token.picture = dbUser.image
      token.role = dbUser.role

      return token
    }
  },
  ...authConfig
  // debug: process.env.NODE_ENV !== "production"
})
