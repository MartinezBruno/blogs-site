'use client'

import { getProviders, signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const PostBlogComment = ({ blogId }) => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setProvidersData = async () => {
      const providers = await getProviders()
      setProviders(providers)
    }
    setProvidersData()
  }, [])

  return (
    <section className='mt-8 w-full lg:w-3/4 mx-auto sm:px-14 md:px-28'>
      {!session?.user
        ? (
        <div className='border-t pt-4 flex flex-col gap-2 items-start'>
          <p>Please sign in to post a comment</p>
          {providers &&
            Object.values(providers).map(provider => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='text-base text-white font-bold leading-[150%] bg-[rgba(255,255,255,0.15)] rounded-[5px] py-2 px-3 bg-yellow hover:opacity-70 transition-[background-color] ease-in-out'
              >
                Get access
              </button>
            ))}
        </div>
          )
        : (
        <div className='border-t pt-4 flex flex-col items-stretch'>
          <p className='text-base font-normal md:text-2xl w-fit pl-11 mb-2'>Join the conversation</p>
          <div className='flex items-start gap-2'>
            <img
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full aspect-square'
              alt={session?.user.name}
            />
            <textarea name="comment" id="comment" placeholder='Comment' className='border h-[93px] lg:h-[195px] w-full p-4'></textarea>
          </div>
        </div>
          )}
    </section>
  )
}

export default PostBlogComment
