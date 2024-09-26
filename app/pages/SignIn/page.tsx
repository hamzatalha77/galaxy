import Image from '@/app/components/Image'
import React from 'react'

const SignIn = () => {
  return (
    <div className='relative'>
      <Image
        path='register (2).jpg'
        className='absolute inset-0 h-full w-full object-cover'
        alt='login'
        width={1260}
        height={750}
      />
      <div className='relative'>
        <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center justify-between xl:flex-row'>
            <div className='mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16'>
              <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                The quick, brown fox <br className='hidden md:block' />
                jumps over a{' '}
                <span className='text-teal-accent-400'>lazy dog</span>
              </h2>
              <p className='mb-4 max-w-xl text-base text-gray-400 md:text-lg'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href='/'
                aria-label=''
                className='text-teal-accent-400 hover:text-teal-accent-700 inline-flex items-center font-semibold tracking-wider transition-colors duration-200'
              >
                Learn more
                <svg
                  className='ml-2 inline-block w-3'
                  fill='currentColor'
                  viewBox='0 0 12 12'
                >
                  <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                </svg>
              </a>
            </div>
            <div className='w-full max-w-xl xl:w-5/12 xl:px-8'>
              <div className='rounded bg-white p-7 shadow-2xl sm:p-10'>
                <h3 className='mb-4 text-xl font-semibold sm:mb-6 sm:text-center sm:text-2xl'>
                  Sign up for updates
                </h3>
                <form>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='firstName'
                      className='mb-1 inline-block font-medium'
                    >
                      First name
                    </label>
                    <input
                      placeholder='John'
                      required
                      type='text'
                      className='focus:border-deep-purple-accent-400 focus:shadow-outline mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:outline-none'
                      id='firstName'
                      name='firstName'
                    />
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='lastName'
                      className='mb-1 inline-block font-medium'
                    >
                      Last name
                    </label>
                    <input
                      placeholder='Doe'
                      required
                      type='text'
                      className='focus:border-deep-purple-accent-400 focus:shadow-outline mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:outline-none'
                      id='lastName'
                      name='lastName'
                    />
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='email'
                      className='mb-1 inline-block font-medium'
                    >
                      E-mail
                    </label>
                    <input
                      placeholder='john.doe@example.org'
                      required
                      type='text'
                      className='focus:border-deep-purple-accent-400 focus:shadow-outline mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:outline-none'
                      id='email'
                      name='email'
                    />
                  </div>
                  <div className='mb-2 mt-4 sm:mb-4'>
                    <button
                      type='submit'
                      className='bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none'
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className='text-xs text-gray-600 sm:text-sm'>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
