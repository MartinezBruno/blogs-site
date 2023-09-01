import { BASE_URL } from '@/app/services/config'
import BlogsSwiper from './BlogsSwiper'

const getBlogs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/posts`, {
      cache: 'no-cache'
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const BlogsPage = async () => {
  const blogs = await getBlogs()
  return (
    <section className='c-container mt-28'>
      <h2 className='text-5xl font-bold'>Blogs</h2>
      <BlogsSwiper blogs={blogs} />
    </section>
  )
}

export default BlogsPage
