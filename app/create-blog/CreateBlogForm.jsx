'use client'

import previewImage from '@/public/image-upload-preview.svg'
import axios from 'axios'
import { useRef, useState } from 'react'

const postBlog = async (blog) => {
  console.log(blog)
  const res = await axios.post('/api/posts', blog)
  console.log(res)
}

const CreateBlogForm = ({ userEmail }) => {
  const inputRef = useRef(null)
  const [blog, setBlog] = useState({
    title: '',
    image: '',
    content: '',
    email: userEmail
  })

  const handleImageClick = () => {
    inputRef.current.click()

    inputRef.current.onchange = () => {
      const file = inputRef.current.files[0]
      const imageUrl = URL?.createObjectURL(file)
      console.log(imageUrl)
      setBlog({ ...blog, image: imageUrl })
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(blog)
    postBlog(blog)
  }

  return (
    <form className='lg:px-[205px]' onSubmit={handleSubmit}>
      <div className='mb-4 w-full flex flex-col gap-4'>
        <input type="text" name="title" placeholder="Title" className="border p-3 w-full" onChange={handleOnChange} value={blog.title}/>
        <div onClick={handleImageClick} className='overflow-hidden'>
          <input type="file" name="image" id="image" ref={inputRef} className='hidden'/>
          <img src={blog.image === '' ? previewImage.src : blog.image} alt="" className='cursor-pointer aspect-video w-full object-cover'/>
        </div>
        <textarea name="content" id="content" placeholder='Type something' className='border p-3 w-full h-fit' onChange={handleOnChange} value={blog.content}></textarea>
        <button type="submit">Post</button>
      </div>
    </form>
  )
}

export default CreateBlogForm
