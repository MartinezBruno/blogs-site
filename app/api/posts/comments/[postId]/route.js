import prisma from '@/app/lib/prismadb'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  try {
    const { postId } = params
    const comments = await prisma.comment.findMany({
      where: {
        postId: postId
      }
    })
    if (!comments) return NextResponse.error(new Error('Comments not found'))
    return NextResponse.json(comments)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}
