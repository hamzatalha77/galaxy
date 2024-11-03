import React from 'react'
import Image from '../Image'

const Collections = () => {
  return (
    <div className='py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <h2 className='mb-8 text-start text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl'>
          Shop our popular gift categories
        </h2>

        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
          <div>
            <a
              href='#'
              className='group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
            >
              <Image
                width={600}
                height={700}
                path='Silver/silver (6).webp'
                alt='Photo by Rachit Tank'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='relative flex w-full flex-col rounded-lg p-4 text-center backdrop-blur-xl'>
                <span className='text-lg font-bold text-gray-800 lg:text-xl'>
                  Business
                </span>
              </div>
            </a>
          </div>

          <div>
            <a
              href='#'
              className='group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
            >
              <Image
                width={600}
                height={700}
                path='Silver/silver (7).webp'
                alt='Photo by Rachit Tank'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='relative flex w-full flex-col rounded-lg p-4 text-center backdrop-blur-xl'>
                {/* <span className='text-gray-500'>Women</span> */}
                <span className='text-lg font-bold text-gray-800 lg:text-xl'>
                  Summer Season
                </span>
              </div>
            </a>
          </div>

          <div>
            <a
              href='#'
              className='group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
            >
              <Image
                width={600}
                height={700}
                path='Silver/silver (8).webp'
                alt='Photo by Rachit Tank'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='relative flex w-full flex-col rounded-lg p-4 text-center backdrop-blur-xl'>
                {/* */}
                <span className='text-lg font-bold text-gray-800 lg:text-xl'>
                  Streetwear
                </span>
              </div>
            </a>
          </div>

          <div>
            <a
              href='#'
              className='group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
            >
              <Image
                width={600}
                height={700}
                path='Silver/silver (9).webp'
                alt='Photo by Rachit Tank'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='relative flex w-full flex-col rounded-lg p-4 text-center backdrop-blur-xl'>
                {/* <span className='text-gray-500'>Women</span> */}
                <span className='text-lg font-bold text-gray-800 lg:text-xl'>
                  Sale
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections
