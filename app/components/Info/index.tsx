import React from 'react'

const Info = () => {
  return (
    <div className='bg-second'>
      <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
        <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
          <div className='mb-16 flex flex-col sm:mb-0 sm:text-center'>
            <a href='/' className='mb-6 sm:mx-auto'>
              <div className='bg-teal-accent-400 flex h-12 w-12 items-center justify-center rounded-full'>
                <svg
                  className='text-deep-purple-900 h-10 w-10'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    stroke-width='3'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  ></polygon>
                </svg>
              </div>
            </a>
            <div className='mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl'>
              <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto'>
                <span className='relative inline-block'>
                  <svg
                    viewBox='0 0 52 24'
                    fill='currentColor'
                    className='text-deep-purple-accent-100 absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32'
                  >
                    <defs>
                      <pattern
                        id='700c93bf-0068-4e32-aafe-ef5b6a647708'
                        x='0'
                        y='0'
                        width='.135'
                        height='.30'
                      >
                        <circle cx='1' cy='1' r='.7'></circle>
                      </pattern>
                    </defs>
                    <rect
                      fill='url(#700c93bf-0068-4e32-aafe-ef5b6a647708)'
                      width='52'
                      height='24'
                    ></rect>
                  </svg>
                  <span className='relative'>The</span>
                </span>
                quick, brown fox jumps over a lazy dog
              </h2>
              <p className='text-base text-black md:text-lg'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div>
              <a
                href='/'
                className='hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline inline-flex h-12 items-center justify-center rounded px-6 font-semibold tracking-wide text-teal-900 shadow-md transition duration-200 focus:outline-none'
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
