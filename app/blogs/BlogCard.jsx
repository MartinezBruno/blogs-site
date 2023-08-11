import Image from "next/image"

const BlogCard = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className='rounded-lg border shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
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
        <span>
          <Image
            src={blog.authorPic}
            width={40}
            height={40}
            alt='user photo'
            className='rounded-full'
          />
          {blog.authorName} | {new Date(blog.createdAt).toDateString()}
        </span>
      </div>
    </div>
  )
}

export default BlogCard
