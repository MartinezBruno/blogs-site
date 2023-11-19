import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import HorizontalDots from '../Icons/HorizontalDots'
import styles from './BlogCard.module.css'

const BlogCard = ({ blog, userId }) => {
  const { data: session } = useSession()

  return (
    <article className='rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      {session?.user?.id === userId && (
        <HorizontalDots blogId={blog.id}/>
      )}
      {blog.banner && (
        <Link href={`/blogs/${blog.id}`}>
          <div className='overflow-hidden rounded-lg flex-[1_0_100%] flex'>
            <Image
              src={blog.banner}
              width={400}
              height={400}
              loading='lazy'
              alt={blog.title}
              className='w-full h-full object-cover object-center blog-img aspect-square'
            />
          </div>
        </Link>
      )}
      <div className='p-5'>
        <h2 className='text-xl lg:text-2xl h-[2.6em] truncate whitespace-normal sm:whitespace-nowrap mb-2'>
          {blog.title}
        </h2>
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
            {blog.authorName ?? 'Unknown author'}{' '}
            <span className=' hidden md:inline-block'>
              {' '}
              | {new Date(blog.createdAt).toDateString()}
            </span>
          </span>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
