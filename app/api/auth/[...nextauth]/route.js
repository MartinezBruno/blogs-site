import prisma from '@/lib/prismadb'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn ({ profile }) {
      try {
        const userExists = await prisma.user.findUnique({
          where: {
            email: profile.email
          }
        })
        if (!userExists) {
          await prisma.user.create({
            data: {
              email: profile.email,
              username: profile.name.replace(' ', '').toLowerCase(),
              fullname: profile.name,
              image: profile.picture
            }
          })
        }
        return true
      } catch (error) {
        console.error(error)
      }
    },
    async session ({ session }) {
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: session.user.email
          }
        })

        session.user.id = user.id
        session.user.fullname = user.fullname
        session.user.pos = user.position ?? ''
        session.user.bio = user.bio ?? ''

        return session
      } catch (error) {
        console.error(error)
      }
    }
  }
})

export { handler as GET, handler as POST }
