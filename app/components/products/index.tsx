import React from 'react'
import Image from '../Image'
import Link from 'next/link'

const Products = () => {
  return (
    <div className='py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-6 flex items-end justify-between gap-4'>
          <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
            Selected
          </h2>

          <a
            href='#'
            className='inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base'
          >
            Show more
          </a>
        </div>

        <div className='grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4'>
          <div>
            <Link
              href='/pages/Product'
              className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'
            >
              <Image
                width={335}
                height={320}
                path='Gold/gold (8).jpg'
                alt='Photo by Rachit Tank'
                className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>
                sale
              </span>
            </Link>

            <div>
              <a
                href='#'
                className='hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg'
              >
                Timely Watch
              </a>

              <div className='flex items-end gap-2'>
                <span className='font-bold text-gray-800 lg:text-lg'>
                  $10.00
                </span>
                <span className='mb-0.5 text-red-500 line-through'>$30.00</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href='#'
              className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'
            >
              <Image
                width={335}
                height={320}
                path='Gold/gold (9).jpg'
                alt='Photo by Rachit Tank'
                className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
            </a>

            <div>
              <a
                href='#'
                className='hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg'
              >
                Fancy Plant
              </a>

              <div className='flex items-end gap-2'>
                <span className='font-bold text-gray-800 lg:text-lg'>
                  $9.00
                </span>
              </div>
            </div>
          </div>

          <div>
            <a
              href='#'
              className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'
            >
              <Image
                width={335}
                height={320}
                path='Gold/gold (10).jpg'
                alt='Photo by Rachit Tank'
                className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
            </a>

            <div>
              <a
                href='#'
                className='hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg'
              >
                Elderly Cam
              </a>

              <div className='flex items-end gap-2'>
                <span className='font-bold text-gray-800 lg:text-lg'>
                  $45.00
                </span>
              </div>
            </div>
          </div>

          <div>
            <a
              href='#'
              className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'
            >
              <Image
                width={335}
                height={320}
                path='Gold/gold (11).jpg'
                alt='Photo by Rachit Tank'
                className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
            </a>

            <div>
              <a
                href='#'
                className='hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg'
              >
                Shiny Shoe
              </a>

              <div className='flex items-end gap-2'>
                <span className='font-bold text-gray-800 lg:text-lg'>
                  $29.00
                </span>
              </div>
            </div>
          </div>

          <div>
            <a
              href='#'
              className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'
            >
              <Image
                width={335}
                height={320}
                path='Gold/gold (12).jpg'
                alt='Photo by Rachit Tank'
                className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
            </a>

            <div>
              <a
                href='#'
                className='hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg'
              >
                Spiky Plant
              </a>

              <div className='flex items-end gap-2'>
                <span className='font-bold text-gray-800 lg:text-lg'>
                  $4.00
                </span>
              </div>
            </div>
          </div>

          <div>
            <a
              href='#'
              className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'
            >
              <Image
                width={335}
                height={320}
                path='Gold/gold (13).jpg'
                alt='Photo by Rachit Tank'
                className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
            </a>

            <div>
              <a
                href='#'
                className='hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg'
              >
                Wieldy Film
              </a>

              <div className='flex items-end gap-2'>
                <span className='font-bold text-gray-800 lg:text-lg'>
                  $19.00
                </span>
              </div>
            </div>
          </div>

          <div>
            <a
              href='#'
              className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'
            >
              <Image
                width={335}
                height={320}
                path='Gold/gold (15).jpg'
                alt='Photo by Rachit Tank'
                className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
              <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>
                sale
              </span>
            </a>

            <div>
              <a
                href='#'
                className='hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg'
              >
                Sturdy Stand
              </a>

              <div className='flex items-end gap-2'>
                <span className='font-bold text-gray-800 lg:text-lg'>
                  $12.00
                </span>
                <span className='mb-0.5 text-red-500 line-through'>$24.00</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href='#'
              className='group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3'
            >
              <Image
                width={335}
                height={320}
                path='Gold/gold (17).jpg'
                alt='Photo by Rachit Tank'
                className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />
            </a>

            <div>
              <a
                href='#'
                className='hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg'
              >
                Lazy Bottle
              </a>

              <div className='flex items-end gap-2'>
                <span className='font-bold text-gray-800 lg:text-lg'>
                  $9.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
