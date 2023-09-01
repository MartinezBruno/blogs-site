import { BASE_URL } from '@/app/services/config'

const getBlogComments = async (blogId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/posts/comments/${blogId}`, {
      // next: { revalidate: 3600 }
      cache: 'no-cache'
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const BlogComments = async ({ blogId }) => {
  const comments = await getBlogComments(blogId)
  return (
    <>
      {comments && (
        <div className='w-full lg:w-3/4 mx-auto transition-all duration-300 sm:px-14 md:px-28 flex flex-col justify-center items-start mt-5 gap-3'>
          <h3 className='text-2xl font-bold'>Comments</h3>
          <div className='border border-gray-200'>
            {comments.map((comment) => (
                <figure key={comment.id} className="flex flex-col items-start justify-center p-8 text-center bg-white border-b rounded-t-lg md:rounded-t-none md:rounded-tl-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <p className="my-4">{comment.content}</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center space-x-3">
                      <img className="rounded-full w-9 h-9" src={comment.author.image} alt="profile picture" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>{comment.author.fullname ?? 'Unknown author'}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{comment.author.position ?? ''}</div>
                      </div>
                  </figcaption>
                </figure>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default BlogComments
