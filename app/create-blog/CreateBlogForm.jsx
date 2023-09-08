'use client'

import { uploadImageAndGetURL } from '@/app/services/firebase.config'
import Spinner from '@/components/Icons/Spinner'
import SuccessModal from '@/components/SuccessModal'
import previewImage from '@/public/image-upload-preview.svg'
import axios from 'axios'
import { useRef, useState } from 'react'

const postBlog = async (blog, image) => {
  try {
    const res = await axios.post('/api/posts', {
      title: blog.title,
      image,
      content: blog.content,
      email: blog.email
    })
    if (res.status !== 200) throw new Error('Something went wrong')

    return res.data
  } catch (error) {
    console.error(error)
  }
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
  const [errors, setErrors] = useState([{
    title: '',
    banner: '',
    content: ''
  }
  ])
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [blogId, setBlogId] = useState('')

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
    if (e.target.value === '') e.target.style.height = '0px'
    else e.target.style.height = `${e.target.scrollHeight - 20}px`
  }

  const handleFocus = (e) => {
    handleHeight(e)
    e.target.onblur = () => {
      e.target.style.height = '0px'
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleErrors = (blog) => {
    const errors = {}
    if (!blog.title) errors.title = 'Title is required'
    if (!blog.banner) errors.banner = 'Banner is required'
    if (!blog.content) errors.content = 'Content is required'

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const errors = handleErrors(blog)
    if (!errors) return setLoading(false)

    const imageUrl = await uploadImageAndGetURL({ file: blog.banner, userId: user.id })
    setBlog({ ...blog, banner: imageUrl })

    const post = await postBlog(blog, imageUrl)
    if (!post.id) return alert('Something went wrong')
    postSuccess(post)
  }

  const postSuccess = (post) => {
    setBlog({
      title: '',
      banner: '',
      content: '',
      email: user.email
    })
    setPreview(previewImage.src)
    setLoading(false)
    setShowModal(true)
    setBlogId(post.id)
  }

  return (
    <form className='lg:px-[205px]' onSubmit={handleSubmit}>
      <div className='mb-4 w-full flex flex-col gap-4'>
        <div>
          <input type="text" name="title" placeholder="Title" className="border p-3 w-full" onChange={handleOnChange} value={blog.title}/>
          {errors.title && <span className='text-red-500'>{errors.title}</span>}
        </div>
        <div onClick={handleImageClick} className='overflow-hidden'>
          <input type="file" name="image" id="image" ref={inputRef} className='hidden'/>
          <img src={preview} className='cursor-pointer aspect-video w-full object-cover object-center' alt='Banner image'/>
          {errors.banner && <span className='text-red-500'>{errors.banner}</span>}
        </div>
        <div>
          <textarea name="content" id="content" placeholder='Type something' className='border p-3 w-full min-h-[155px] lg:min-h-[310px] transition-[height] duration-500' onChange={handleOnChange} value={blog.content} onFocus={handleFocus}></textarea>
          {errors.content && <span className='text-red-500'>{errors.content}</span>}
        </div>
        <button disabled={loading} type="submit" className='text-white text-base font-bold leading-[150%] rounded-[5px] py-2 px-3 bg-yellow disabled:bg-green-500 transition-[background-color,height] ease-in-out'>
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
      <SuccessModal showModal={showModal} closeModal={closeModal} blogId={blogId} />
    </form>
  )
}

export default CreateBlogForm
