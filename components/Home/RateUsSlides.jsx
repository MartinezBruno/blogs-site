'use client'

import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight'
import Stars from '../Icons/Stars'
import './Slides.css'

const RateUsSlides = ({ reviews }) => {
  return (
    <Swiper
      style={{ paddingBottom: '110px' }}
      spaceBetween={16}
      slidesPerView={1.1}
      breakpoints={{
        768: {
          slidesPerView: 2.4
        },
        1024: {
          slidesPerView: 3.4
        },
        1440: {
          slidesPerView: 4.2
        }
      }}
      modules={[Navigation]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }}
      autoHeight={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}>
      {reviews?.map((review, index) => (
        <SwiperSlide
          key={index}
          className='rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border'>
          <div className='flex flex-col m-10'>
            <Stars rating={review.rating} />
            <p className='mt-4 mb-11'>{review.content}</p>
            <div className='flex gap-4 max-h-[60px]'>
              <img
                src={review.author.image}
                alt='Review author image'
                width={60}
                height={60}
                className='rounded-full'
              />
              <div>
                <h4 className='heading4 text-black'>{review.author.fullname}</h4>
                <p className='text-black'>{review.author.position ?? 'Unknown position'}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className='flex justify-end mt-4 mr-8'>
        <span className='swiper-button-prev cursor-pointer'>
          <ArrowLeft />
        </span>
        <span className='swiper-button-next cursor-pointer'>
          <ArrowRight />
        </span>
      </div>
    </Swiper>
  )
}

export default RateUsSlides
