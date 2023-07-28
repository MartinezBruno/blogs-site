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
    console.log(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}
