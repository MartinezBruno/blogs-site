'use client'

import BlogCard from '@/components/Blogs/BlogCard'
import { useEffect, useState } from 'react'

const ProfileBlogsGrid = ({ blogs }) => {
  const allBlogs = blogs.length
  const [blogsToShow, setBlogsToShow] = useState(blogs.slice(0, 9))

  useEffect(() => {
    const handleOnScroll = () => {
      const maxScroll = document.body.scrollHeight
      const currentScroll = window.scrollY + window.innerHeight
      let loading = false

      console.log(blogsToShow.length)
      if (currentScroll + 100 >= maxScroll && !loading && blogsToShow.length < allBlogs) {
        loading = true
        const newBlogsToShow = blogs.slice(0, blogsToShow.length + 9)
        setBlogsToShow(newBlogsToShow)
        loading = false
      }
    }
    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [blogs, blogsToShow, allBlogs])

  return (
    <section
      className='grid grid-cols-3 md:gap-7 lg:gap-11'>
      {blogsToShow.map((blog) => (
        <article key={blog.id}>
          <BlogCard blog={blog} />
        </article>
      ))}
    </section>
  )
}

export default ProfileBlogsGrid
