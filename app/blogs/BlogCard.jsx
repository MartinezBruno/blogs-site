import Image from 'next/image'
import Link from 'next/link'

import styles from './BlogCard.module.css'

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div
        key={blog.id}
        className='rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-h-[540px] swiper-card'>
        {blog.image !== null && (
          <div className='overflow-hidden rounded-lg'>
            <Image
              src={blog.banner}
              width={200}
              height={200}
              alt={blog.title}
              className='object-cover w-full blog-img'
            />
          </div>
        )}
        <div className='p-5'>
          <h2 className='text-xl lg:text-2xl h-[2.6em] truncate mb-2'>{blog.title}</h2>
          <p className={styles.blog_content}>{blog.content}</p>
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
      </div>
    </Link>
  )
}

export default BlogCard
