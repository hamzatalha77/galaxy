'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-white shadow'>
      <div className='container mx-auto px-6 py-4'>
        <div className='lg:flex lg:items-center'>
          <div className='flex items-center justify-between'>
            <a href='#'>
              <Image
                className='h-6 w-auto sm:h-7'
                src='https://merakiui.com/images/full-logo.svg'
                alt='ss'
                width={128}
                height={28}
              />
            </a>

            <div className='flex lg:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none'
                aria-label='toggle menu'
              >
                {!isOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 8h16M4 16h16'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full flex-1 bg-white px-6 py-4 transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:justify-between lg:bg-transparent lg:p-0 lg:opacity-100 ${
              isOpen
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <div className='flex flex-col capitalize text-gray-600 lg:-mx-4 lg:flex lg:flex-row lg:items-center lg:px-16'>
              <a
                href='#'
                className='mt-2 transform transition-colors duration-300 hover:text-gray-900 lg:mx-4 lg:mt-0'
              >
                features
              </a>
              <a
                href='#'
                className='mt-2 transform transition-colors duration-300 hover:text-gray-900 lg:mx-4 lg:mt-0'
              >
                downloads
              </a>
              <a
                href='#'
                className='mt-2 transform transition-colors duration-300 hover:text-gray-900 lg:mx-4 lg:mt-0'
              >
                docs
              </a>
              <a
                href='#'
                className='mt-2 transform transition-colors duration-300 hover:text-gray-900 lg:mx-4 lg:mt-0'
              >
                support
              </a>
              <a
                href='#'
                className='mt-2 transform transition-colors duration-300 hover:text-gray-900 lg:mx-4 lg:mt-0'
              >
                blog
              </a>

              <div className='relative mt-4 lg:mx-4 lg:mt-0'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='h-4 w-4 text-gray-600'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>

                <input
                  type='text'
                  className='w-full border-b border-gray-600 bg-white py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 focus:border-gray-600 focus:outline-none lg:w-56 lg:border-transparent'
                  placeholder='Search'
                />
              </div>
            </div>

            <div className='mt-6 flex justify-center lg:-mx-2 lg:mt-0 lg:flex'>
              <a
                href='#'
                className='mx-2 transform text-gray-600 transition-colors duration-300 hover:text-gray-500'
                aria-label='Facebook'
              >
                <svg
                  width='24px'
                  height='24px'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  color='#000000'
                >
                  <path
                    d='M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z'
                    stroke='#000000'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>

              <a
                href='#'
                className='mx-2 transform text-gray-600 transition-colors duration-300 hover:text-gray-500'
                aria-label='instagram'
              >
                <svg
                  width='24px'
                  height='24px'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  color='#000000'
                >
                  <path
                    d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                    stroke='#000000'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                  <path
                    d='M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z'
                    stroke='#000000'
                    stroke-width='1.5'
                  ></path>
                  <path
                    d='M17.5 6.51L17.51 6.49889'
                    stroke='#000000'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>

              <a
                href='#'
                className='mx-2 transform text-gray-600 transition-colors duration-300 hover:text-gray-500'
                aria-label='Twitter'
              >
                <svg
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  color='#000000'
                >
                  <path
                    d='M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z'
                    stroke='#000000'
                    stroke-width='1.5'
                  ></path>
                  <path
                    d='M20 3L4 21'
                    stroke='#000000'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
