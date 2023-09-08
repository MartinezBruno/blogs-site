import Link from 'next/link'

import styles from './BlogCard.module.css'

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div
        className='rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-h-[490px] flex flex-col swiper-card'>
        {blog.banner && (
          <div className='overflow-hidden rounded-lg flex-[1_0_100%] flex'>
            <img
              src={blog.banner}
              width='unset'
              height='unset'
              alt={blog.title}
              className='object-cover object-center blog-img aspect-video'
            />
          </div>
        )}
        <div className='p-5'>
          <h2 className='text-xl lg:text-2xl h-[2.6em] truncate mb-2'>{blog.title}</h2>
          <p className={styles.blog_content}>{blog.content}</p>
          <div className='flex justify-start items-center gap-2 mt-11'>
            <img
              src={blog.authorImage ?? 'https://via.placeholder.com/150'}
              width={40}
              height={40}
              alt='user photo'
              className='rounded-full'
            />
            <span className='text-text_gray text-sm font-semibold'>
              {blog.authorName ?? 'Unknown author'} | {new Date(blog.createdAt).toDateString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
