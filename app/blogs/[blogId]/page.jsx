import Image from 'next/image'

const getBlogDetail = async blogId => {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${blogId}`, {
    next: { revalidate: 3600 }
    // cache: 'no-cache'
  })
  const data = await res.json()
  return data
}

const BlogDetail = async ({ params }) => {
  const { blogId } = params
  const blogDetail = await getBlogDetail(blogId)
  return (
    <section className='c-container mt-28 flex flex-col items-center'>
      <h1>{blogDetail.title}</h1>
      <div className='flex justify-start items-center gap-2 my-3'>
        <Image
          src={blogDetail.authorPic}
          width={40}
          height={40}
          alt='user photo'
          className='rounded-full'
        />
        <span className='text-text_gray text-sm font-semibold'>
          {blogDetail.authorName} | {new Date(blogDetail.createdAt).toDateString()}
        </span>
      </div>
      <Image
        src={blogDetail.banner}
        width={1920}
        height={768}
        alt={blogDetail.title}
        className='object-cover w-full max-w-[1000px] max-h-[470px]'
      />
      <p className='px-14 md:px-28'>{blogDetail.content}</p>
      <div className='flex'>
        <Image
          src={blogDetail.authorPic}
          width={40}
          height={40}
          alt='user photo'
          className='rounded-full'
        />
        <div className='flex flex-col'>
          <span>Written By</span>
          <span className='text-text_gray text-sm font-semibold'>
            {blogDetail.authorName}
          </span>
          <span>{blogDetail.authorPos}</span>
        </div>
      </div>
    </section>
  )
}

export default BlogDetail
