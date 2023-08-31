import { BASE_URL } from '@/app/services/config'

const getBlogComments = async (blogId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/posts/comments/${blogId}`, {
      next: { revalidate: 3600 }
      // cache: 'no-cache'
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const BlogComments = async ({ blogId }) => {
  const comments = await getBlogComments(blogId)
  console.log(comments)
  return (
    <>
      {comments && (
        <div className='flex flex-col justify-center items-center'>
          <h3>Comments</h3>
          <div>
            {comments.map((comment) => (
              <div key={comment.id}>
                <img
                  src={comment.author.image}
                  alt={comment.author.fullname}
                  width={40}
                  height={40}
                />
                <p>{comment.content}</p>
                <p>{comment.author.fullname}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default BlogComments
