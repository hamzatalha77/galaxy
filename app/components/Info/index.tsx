import React from 'react'

const Info = () => {
  return (
    <div className='bg-gradient-to-r from-third to-fourth'>
      <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
        <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
          <div className='mb-16 flex flex-col sm:mb-0 sm:text-center'>
            <a href='/' className='mb-6 sm:mx-auto'>
              <div className='bg-teal-accent-400 flex h-12 w-12 items-center justify-center rounded-full'>
                <svg
                  width='24px'
                  height='24px'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  color='#000000'
                >
                  <path
                    d='M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinejoin='round'
                  ></path>
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
                Discover treasures that last a lifetime.
              </h2>
              <div>
                <p className='text-base text-black md:text-lg'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
            <div>
              <a
                href='/'
                className='focus:shadow-outline inline-flex h-12 items-center justify-center rounded px-6 font-semibold tracking-wide text-white shadow-md transition duration-200 focus:outline-none'
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
