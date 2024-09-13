'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import React from 'react'
import Image from '../Image'

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      navigation={true}
      modules={[Autoplay]}
      className='mySwiper'
    >
      <SwiperSlide className='px-3 py-5 lg:py-10'>
        <div className='grid items-center justify-items-center gap-5 lg:grid-cols-2'>
          <div className='order-2 flex flex-col items-center justify-center lg:order-1'>
            <p className='text-4xl font-bold text-second md:text-7xl'>
              25% OFF
            </p>
            <p className='text-4xl font-bold md:text-7xl'>SUMMER SALE</p>
            <p className='mt-2 text-sm md:text-lg'>For limited time only!</p>
            <button className='mt-10 bg-black px-5 py-2 text-lg text-white hover:bg-zinc-800 md:text-2xl'>
              Shop Now
            </button>
          </div>
          <div className='order-1 lg:order-2'>
            <Image
              className='h-80 w-80 object-cover lg:h-[500px] lg:w-[500px]'
              path='Gold/gold (2).jpg'
              width={500}
              height={500}
              alt='hero'
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='px-3 py-5 lg:py-10'>
        <div className='grid items-center justify-items-center gap-5 lg:grid-cols-2'>
          <div className='order-2 flex flex-col items-center justify-center lg:order-1'>
            <p className='text-4xl font-bold text-second md:text-7xl'>
              25% OFF
            </p>
            <p className='text-4xl font-bold md:text-7xl'>SUMMER SALE</p>
            <p className='mt-2 text-sm md:text-lg'>For limited time only!</p>
            <button className='mt-10 bg-black px-5 py-2 text-lg text-white hover:bg-zinc-800 md:text-2xl'>
              Shop Now
            </button>
          </div>
          <div className='order-1 lg:order-2'>
            <Image
              className='h-80 w-80 object-cover lg:h-[500px] lg:w-[500px]'
              path='Gold/gold (22).jpg'
              width={500}
              height={500}
              alt='hero'
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='px-3 py-5 lg:py-10'>
        <div className='grid items-center justify-items-center gap-5 lg:grid-cols-2'>
          <div className='order-2 flex flex-col items-center justify-center lg:order-1'>
            <p className='text-4xl font-bold text-second md:text-7xl'>
              25% OFF
            </p>
            <p className='text-4xl font-bold md:text-7xl'>SUMMER SALE</p>
            <p className='mt-2 text-sm md:text-lg'>For limited time only!</p>
            <button className='mt-10 bg-black px-5 py-2 text-lg text-white hover:bg-zinc-800 md:text-2xl'>
              Shop Now
            </button>
          </div>
          <div className='order-1 lg:order-2'>
            <Image
              className='h-80 w-80 object-cover lg:h-[500px] lg:w-[500px]'
              path='Gold/gold (4).jpg'
              width={500}
              height={500}
              alt='hero'
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Hero
