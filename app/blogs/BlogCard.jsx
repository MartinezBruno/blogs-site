import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className='rounded-lg border border-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      <Link href={`/blogs/${blog.id}`}>
        {blog.image !== null && (
          <Image
            src={blog.banner}
            width={200}
            height={200}
            alt={blog.title}
            className='object-cover w-full rounded-lg'
          />
        )}
        <div className='p-5'>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <div className='flex justify-start items-center gap-2 mt-11'>
            <Image
              src={blog.authorPic}
              width={40}
              height={40}
              alt='user photo'
              className='rounded-full'
            />
            <span className='text-text_gray text-sm font-semibold'>
              {blog.authorName} | {new Date(blog.createdAt).toDateString()}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
