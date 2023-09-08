'use client'

import { uploadImageAndGetURL } from '@/app/services/firebase.config'
import Spinner from '@/components/Icons/Spinner'
import previewImage from '@/public/image-upload-preview.svg'
import axios from 'axios'
import { useRef, useState } from 'react'

const postBlog = async (blog, image) => {
  const res = await axios.post('/api/posts', {
    title: blog.title,
    image,
    content: blog.content,
    email: blog.email
  })
  console.log(res)
}

const CreateBlogForm = ({ user }) => {
  const inputRef = useRef(null)

  const [preview, setPreview] = useState(previewImage.src)
  const [blog, setBlog] = useState({
    title: '',
    banner: '',
    content: '',
    email: user.email
  })
  const [loading, setLoading] = useState(false)

  const handleImageClick = () => {
    inputRef.current.click()

    inputRef.current.onchange = () => {
      const file = inputRef.current.files[0]
      const imageUrl = URL?.createObjectURL(file)
      setBlog({ ...blog, banner: file })
      setPreview(imageUrl)
    }
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setBlog({ ...blog, [name]: value })
    if (name === 'content') handleHeight(e)
  }

  const handleHeight = (e) => {
    e.target.style.height = 0
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const imageUrl = await uploadImageAndGetURL({ file: blog.banner, userId: user.id })
    console.log(imageUrl)
    setBlog({ ...blog, banner: imageUrl })
    console.log(blog.banner)

    await postBlog(blog, imageUrl)
    setLoading(false)
  }

  return (
    <form className='lg:px-[205px]' onSubmit={handleSubmit}>
      <div className='mb-4 w-full flex flex-col gap-4'>
        <input type="text" name="title" placeholder="Title" className="border p-3 w-full" onChange={handleOnChange} value={blog.title}/>
        <div onClick={handleImageClick} className='overflow-hidden'>
          <input type="file" name="image" id="image" ref={inputRef} className='hidden'/>
          <img src={preview} className='cursor-pointer aspect-video w-full object-cover'/>
        </div>
        <textarea name="content" id="content" placeholder='Type something' className='border p-3 w-full h-fit' onChange={handleOnChange} value={blog.content}></textarea>
        <button disabled={loading} type="submit" className='text-base font-bold leading-[150%] rounded-[5px] py-2 px-3 bg-yellow disabled:bg-green-500 transition-[background-color,height] ease-in-out'>
          {loading
            ? (
            <span>
              Posting...
              <Spinner />
            </span>
              )
            : 'Post your blog!'}
        </button>
      </div>
    </form>
  )
}

export default CreateBlogForm
