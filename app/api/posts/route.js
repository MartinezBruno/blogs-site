import prisma from '@/app/lib/prismadb'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

export const POST = async request => {
  try {
    const body = await request.json()
    const { title, content, email, image } = body

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (!user) return NextResponse.error(new Error('User not found'))

    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorId: user.id,
        banner: image
      }
    })
    if (!post) return NextResponse.json(new Error('Post not created'))

    return NextResponse.json(post)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}
