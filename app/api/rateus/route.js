import prisma from '@/app/lib/prismadb'
import { NextResponse } from 'next/server'

export const POST = async request => {
  try {
    // get the user id from params and update there biography or other details depending on the request body
    const body = await request.json()
    const { content, authorId, rating } = body

    const user = await prisma.user.findUnique({
      where: {
        id: authorId
      }
    })
    if (!user) return NextResponse.error(new Error('User not found'))

    const review = await prisma.review.create({
      data: {
        content,
        rating,
        authorId,
        authorName: user.fullname,
        authorPic: user.image,
        authorPos: user.position
      }
    })
    if (!review) return NextResponse.error(new Error('Review not created'))

    return NextResponse.json(review)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}

export const GET = async () => {
  try {
    const reviews = await prisma.review.findMany()
    if (!reviews) return NextResponse.error(new Error('Reviews not found'))

    return NextResponse.json(reviews)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 404 })
  }
}
