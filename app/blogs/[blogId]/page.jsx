import BlogComments from './BlogComments'
import BlogDetail from './BlogDetail'
import PostBlogComment from './PostBlogComment'

const page = async ({ params }) => {
  const { blogId } = params
  return (
    <section className='c-container mt-28'>
      <BlogDetail blogId={blogId} />
      <BlogComments blogId={blogId} />
      <PostBlogComment blogId={blogId} />
    </section>
  )
}

export default page
