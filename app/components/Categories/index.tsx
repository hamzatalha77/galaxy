import React from 'react'
import Image from '../Image'

const Categories = () => {
  return (
    <section className='relative py-20'>
      <div className='mx-auto w-full max-w-2xl px-6 lg:max-w-[95rem] lg:px-8'>
        <h1 className='font-manrope mb-10 text-4xl font-medium text-gray-900 max-md:text-center'>
          Professional Project Achievements
        </h1>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4'>
          <div className='group flex w-full flex-col items-center gap-8'>
            <div className='block'>
              <Image
                className='rounded-3xl object-cover'
                path='Gold/gold (6).jpg'
                alt='Project Achievements of Sketch'
                width={384}
                height={406}
              />
            </div>
            <div className='flex w-full max-w-[406px] items-center justify-between lg:max-w-full lg:px-0'>
              <div className='block'>
                <h4 className='font-manrope mb-1 text-2xl font-semibold text-gray-900'>
                  Sketch
                </h4>
                <p className='text-lg font-medium text-gray-400'>
                  Content Design, Marketing
                </p>
              </div>
              <button className='rounded-full border border-black px-3.5 py-2 transition-all duration-300 group-hover:bg-black'>
                <svg
                  className='stroke-black transition-all duration-300 group-hover:stroke-white'
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='16'
                  viewBox='0 0 17 16'
                  fill='none'
                >
                  <path
                    d='M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409'
                    stroke=''
                    stroke-width='1.6'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='group flex w-full flex-col items-center gap-8'>
            <div className='block'>
              <Image
                className='rounded-3xl object-cover'
                path='Gold/gold (7).jpg'
                alt='Project Achievements of Figma'
                width={384}
                height={406}
              />
            </div>
            <div className='flex w-full max-w-[406px] items-center justify-between lg:max-w-full lg:px-0'>
              <div className='block'>
                <h4 className='font-manrope mb-1 text-2xl font-semibold text-gray-900'>
                  Figma
                </h4>
                <p className='text-lg font-medium text-gray-400'>
                  User Interface Design
                </p>
              </div>
              <button className='rounded-full border border-black px-3.5 py-2 transition-all duration-300 group-hover:bg-black'>
                <svg
                  className='stroke-black transition-all duration-300 group-hover:stroke-white'
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='16'
                  viewBox='0 0 17 16'
                  fill='none'
                >
                  <path
                    d='M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409'
                    stroke=''
                    stroke-width='1.6'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='group mx-auto flex w-full flex-col items-center gap-8 md:col-span-2 md:w-1/2 lg:col-span-1 lg:w-full'>
            <div className='block'>
              <Image
                className='rounded-3xl object-cover'
                path='Gold/gold (1).jpg'
                alt='Project Achievements of Frame.io'
                width={384}
                height={406}
              />
            </div>
            <div className='flex w-full max-w-[406px] items-center justify-between lg:max-w-full lg:px-0'>
              <div className='block'>
                <h4 className='font-manrope mb-1 text-2xl font-semibold text-gray-900'>
                  Golden
                </h4>
                <p className='text-lg font-medium text-gray-400'>
                  User Interface Design
                </p>
              </div>
              <button className='rounded-full border border-black px-3.5 py-2 transition-all duration-300 group-hover:bg-black'>
                <svg
                  className='stroke-black transition-all duration-300 group-hover:stroke-white'
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='16'
                  viewBox='0 0 17 16'
                  fill='none'
                >
                  <path
                    d='M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409'
                    stroke=''
                    stroke-width='1.6'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='group mx-auto flex w-full flex-col items-center gap-8 md:col-span-2 md:w-1/2 lg:col-span-1 lg:w-full'>
            <div className='block'>
              <Image
                className='rounded-3xl object-cover'
                path='Gold/gold (4).jpg'
                alt='Project Achievements of Frame.io'
                width={384}
                height={406}
              />
            </div>
            <div className='flex w-full max-w-[406px] items-center justify-between lg:max-w-full lg:px-0'>
              <div className='block'>
                <h4 className='font-manrope mb-1 text-2xl font-semibold text-gray-900'>
                  Silver
                </h4>
                <p className='text-lg font-medium text-gray-400'>
                  User Interface Design
                </p>
              </div>
              <button className='rounded-full border border-black px-3.5 py-2 transition-all duration-300 group-hover:bg-black'>
                <svg
                  className='stroke-black transition-all duration-300 group-hover:stroke-white'
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='16'
                  viewBox='0 0 17 16'
                  fill='none'
                >
                  <path
                    d='M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409'
                    stroke=''
                    stroke-width='1.6'
                    stroke-linecap='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
