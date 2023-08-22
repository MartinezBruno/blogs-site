'use client'

import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import BlogCard from './BlogCard'

const BlogsSwiper = ({ blogs }) => {
  const slidesPerView = 2
  return (
    <Swiper
      className='!py-4 !px-1 rounded-lg'
      modules={[Navigation]}
      spaceBetween={45}
      slidesPerView={1.1}
      breakpoints={{
        768: {
          slidesPerView: slidesPerView
        },
        1024: {
          slidesPerView: slidesPerView + 1
        }
      }}>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16'>
        {blogs?.map(
          (blog, index) =>
            index % slidesPerView === 0 && (
              <SwiperSlide
                key={blog.id}
                className='!flex flex-col gap-3'>
                <BlogCard blog={blog} />
                {blogs[index + 1] && <BlogCard blog={blogs[index + 1]} />}
              </SwiperSlide>
            )
        )}
      </div>
    </Swiper>
  )
}

export default BlogsSwiper
