import BlogsSwiper from './BlogsSwiper'

const getBlogs = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    // next: { revalidate: 3600 }
    cache: 'no-cache'
  })
  const data = await res.json()
  return data
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
