import prisma from '@/app/lib/prismadb'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  try {
    const { user: userId } = params
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    if (!user) return NextResponse.error(new Error('User not found'))

    // Get all posts for the user
    const posts = await prisma.post.findMany({
      where: {
        authorId: userId
      }
    })
    if (!posts) return NextResponse.error(new Error('Post not found'))

    return NextResponse.json(posts)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}
