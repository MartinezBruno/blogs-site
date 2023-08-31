import prisma from '@/lib/prismadb'
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

    const author = await prisma.user.findUnique({
      where: {
        id: post.authorId
      }
    })
    if (!author) return NextResponse.error(new Error('Author not found'))

    const response = {
      ...post,
      authorName: author.fullname,
      authorPos: author.position,
      authorPic: author.image
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}
