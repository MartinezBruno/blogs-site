import Image from 'next/image'

const getBlogs = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    cache: 'no-cache'
  })
  const data = await res.json()
  return data
}

const BlogsPage = async () => {
  const blogs = await getBlogs()
  console.log(blogs)
  return (
    <section className='c-container mt-28'>
      <h1>Blogs</h1>
      {/* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */}
      <div className='grid grid-cols-3 gap-16'>
        {blogs?.map(blog => (
          <div
            key={blog.id}
            className='max-w-[367px] rounded-lg border shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
            <Image
              src={blog.banner}
              width={200}
              height={200}
              alt={blog.title}
              className='object-cover w-full rounded-lg'
            />
            <div className='p-5'>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogsPage
