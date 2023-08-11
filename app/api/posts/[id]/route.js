import prisma from '@/app/lib/prismadb'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  try {
    const { id } = params
    const post = await prisma.post.findUnique({
      where: {
        id
      }
    })
    if (!post) return NextResponse.error(new Error('Post not found'))

    return NextResponse.json(post)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}

export const POST = async (request, { params }) => {
  // Post comment to post
  try {
    const { id } = params
    const body = await request.json()
    const { content, email } = body

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (!user) return NextResponse.error(new Error('User not found'))

    const comment = await prisma.comment.create({
      data: {
        content: content,
        postId: id,
        authorPic: user.image,
        authorName: user.fullname,
      }
    })
    if (!comment) return NextResponse.error(new Error('Comment not created'))

    return NextResponse.json(comment)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}
