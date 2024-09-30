import Image from '@/app/components/Image'
import Link from 'next/link'
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
                Try To Sign In <br className='hidden md:block' />
                jumps over a{' '}
                <span className='text-teal-accent-400'>lazy dog</span>
              </h2>
              <p className='mb-4 max-w-xl text-base text-gray-400 md:text-lg'>
                Sign in to continue exploring your favorite pieces, track your
                orders, and access your personalized shopping experience. We`re
                glad to have you back!
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
                  Sign In To Connect Your Account
                </h3>
                <form>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='Username'
                      className='mb-1 inline-block font-medium'
                    >
                      Username Or Email
                    </label>
                    <input
                      placeholder='Type Your Username or Email'
                      required
                      type='text'
                      className='focus:border-deep-purple-accent-400 focus:shadow-outline mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:outline-none'
                      id='Username'
                      name='Username'
                    />
                  </div>

                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='password'
                      className='mb-1 inline-block font-medium'
                    >
                      E-mail
                    </label>
                    <input
                      placeholder='Type Your Password'
                      required
                      type='password'
                      className='focus:border-deep-purple-accent-400 focus:shadow-outline mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:outline-none'
                      id='password'
                      name='password'
                    />
                  </div>
                  <div className='mb-2 mt-4 sm:mb-4'>
                    <button
                      type='submit'
                      className='focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded bg-fourth px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-third focus:outline-none'
                    >
                      Login
                    </button>
                  </div>
                  <p className='text-xs text-gray-600 sm:text-sm'>
                    Don`t you have an account
                    <Link
                      href='/pages/SignUp'
                      className='text-lg text-second decoration-solid'
                    >
                      {' '}
                      Sign Up
                    </Link>
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
