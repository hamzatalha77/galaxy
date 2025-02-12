'use client'
import { useState } from 'react'
import Image from '../Image'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <nav className='border-b-default border-prime-gray-200 relative z-50 w-full border-b border-solid border-gray-200 py-3'>
      <div className='container mx-auto'>
        <div className='flex w-full flex-col lg:flex-row'>
          <div className='flex justify-between lg:flex-row'>
            <Link href={'/'} className='flex items-center'>
              <svg
                height='50px'
                width='50px'
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 512 512'
                xmlSpace='preserve'
              >
                <polygon
                  style={{ fill: '#D2AC47' }}
                  points='256,499.47 512,146.167 414.217,12.53 97.784,12.53 0.001,146.167'
                />
                <g>
                  <polygon
                    style={{ fill: '#DFBD69' }}
                    points='97.786,12.53 170.663,146.172 0,146.172'
                  />
                  <polygon
                    style={{ fill: '#DFBD69' }}
                    points='414.217,12.53 341.327,146.172 255.995,12.53'
                  />
                  <polygon
                    style={{ fill: '#DFBD69' }}
                    points='341.327,146.172 255.995,499.467 170.663,146.172'
                  />
                </g>
                <g>
                  <polygon
                    style={{ fill: '#926F34' }}
                    points='414.217,12.53 511.99,146.172 341.327,146.172'
                  />
                  <polygon
                    style={{ fill: '#926F34' }}
                    points='255.995,12.53 341.327,146.172 170.663,146.172'
                  />
                  <polygon
                    style={{ fill: '#926F34' }}
                    points='170.663,146.172 255.995,499.467 0,146.172'
                  />
                </g>
              </svg>
            </Link>
            <button
              data-collapse-toggle='megamenu-cta'
              type='button'
              className='mobile-button ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden'
              aria-controls='navbar'
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-6 w-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`w-full lg:flex lg:pl-11 ${menuOpen ? 'block' : 'hidden'}`}
            id='megamenu-cta'
          >
            <ul className='my-4 flex flex-col gap-y-4 lg:my-0 lg:flex-row lg:items-center'>
              <li>
                <Link
                  href={'/'}
                  className='mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 hover:text-second lg:mb-0 lg:mr-6 lg:text-base'
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href='#'
                  className='mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 hover:text-second lg:mb-0 lg:mr-6 lg:text-base'
                >
                  About Us
                </a>
              </li>
              <li className='relative'>
                <Link
                  href={'/pages/SearchProducts'}
                  className='mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 hover:text-second lg:mb-0 lg:mr-6 lg:text-base'
                >
                  Products
                </Link>
              </li>
              <li>
                <button
                  className='dropdown-toggle mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 hover:text-second lg:mb-0 lg:mr-6 lg:text-base'
                  onClick={toggleDropdown}
                >
                  Features
                  <svg
                    className='ml-1.5 h-2 w-3'
                    width='10'
                    height='6'
                    viewBox='0 0 10 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1'
                      stroke='currentColor'
                      strokeWidth='1.6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className='dropdown-menu left-0 right-0 top-full z-10 m-auto max-w-screen-2xl rounded-lg bg-white p-4 shadow-lg lg:absolute xl:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                      <ul className='text-sm text-gray-700'>
                        <h6 className='mb-2 text-sm font-medium text-gray-500'>
                          Features
                        </h6>
                        <li>
                          <a
                            href='#'
                            className='flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50'
                          >
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50'>
                              <svg
                                width='38'
                                height='38'
                                viewBox='0 0 38 38'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M23.75 16.625C23.75 15.3133 22.6867 14.25 21.375 14.25H7.125C5.81332 14.25 4.75 15.3133 4.75 16.625V30.875C4.75 32.1867 5.81332 33.25 7.125 33.25H21.375C22.6867 33.25 23.75 32.1867 23.75 30.875V16.625Z'
                                  fill='#F59E0B'
                                ></path>
                                <path
                                  d='M12.6665 15.0417C12.6665 20.7256 17.2742 25.3333 22.9582 25.3333C28.6421 25.3333 33.2498 20.7256 33.2498 15.0417C33.2498 9.35774 28.6421 4.75 22.9582 4.75C17.2742 4.75 12.6665 9.35774 12.6665 15.0417Z'
                                  fill='#F59E0B'
                                ></path>
                              </svg>
                            </div>
                            <div className='ml-4'>
                              <h5 className='mb-1.5 text-base font-semibold text-gray-900'>
                                Notification
                              </h5>
                              <p className='text-xs font-medium text-gray-400'>
                                Real-times notifications always keep you up to
                                date
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50'
                          >
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50'>
                              <svg
                                width='38'
                                height='38'
                                viewBox='0 0 38 38'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M23.75 16.625C23.75 15.3133 22.6867 14.25 21.375 14.25H7.125C5.81332 14.25 4.75 15.3133 4.75 16.625V30.875C4.75 32.1867 5.81332 33.25 7.125 33.25H21.375C22.6867 33.25 23.75 32.1867 23.75 30.875V16.625Z'
                                  fill='#F59E0B'
                                ></path>
                                <path
                                  d='M12.6665 15.0417C12.6665 20.7256 17.2742 25.3333 22.9582 25.3333C28.6421 25.3333 33.2498 20.7256 33.2498 15.0417C33.2498 9.35774 28.6421 4.75 22.9582 4.75C17.2742 4.75 12.6665 9.35774 12.6665 15.0417Z'
                                  fill='#F59E0B'
                                ></path>
                              </svg>
                            </div>
                            <div className='ml-4'>
                              <h5 className='mb-1.5 text-base font-semibold text-gray-900'>
                                Notification
                              </h5>
                              <p className='text-xs font-medium text-gray-400'>
                                Real-time notifications always keep you up to
                                date
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50'
                          >
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50'>
                              <svg
                                width='38'
                                height='38'
                                viewBox='0 0 38 38'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M23.75 16.625C23.75 15.3133 22.6867 14.25 21.375 14.25H7.125C5.81332 14.25 4.75 15.3133 4.75 16.625V30.875C4.75 32.1867 5.81332 33.25 7.125 33.25H21.375C22.6867 33.25 23.75 32.1867 23.75 30.875V16.625Z'
                                  fill='#F59E0B'
                                ></path>
                                <path
                                  d='M12.6665 15.0417C12.6665 20.7256 17.2742 25.3333 22.9582 25.3333C28.6421 25.3333 33.2498 20.7256 33.2498 15.0417C33.2498 9.35774 28.6421 4.75 22.9582 4.75C17.2742 4.75 12.6665 9.35774 12.6665 15.0417Z'
                                  fill='#F59E0B'
                                ></path>
                              </svg>
                            </div>
                            <div className='ml-4'>
                              <h5 className='mb-1.5 text-base font-semibold text-gray-900'>
                                Notification
                              </h5>
                              <p className='text-xs font-medium text-gray-400'>
                                Real-time notifications always keep you up to
                                date
                              </p>
                            </div>
                          </a>
                        </li>
                        {/* Add more features here */}
                      </ul>
                      <ul className='text-sm text-gray-700'>
                        <h6 className='mb-2 text-sm font-medium text-gray-500'>
                          Services
                        </h6>
                        <li>
                          <a
                            href='#'
                            className='flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50'
                          >
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50'>
                              <svg
                                width='38'
                                height='38'
                                viewBox='0 0 38 38'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M15.092 11.4813C16.0377 10.9509 17.2126 10.9509 18.1583 11.4813L25.4363 15.5637C26.3539 16.0783 26.9168 17.0148 26.9168 18.0265V26.3072C26.9168 27.3189 26.3539 28.2553 25.4363 28.77L18.1583 32.8523C17.2126 33.3828 16.0377 33.3828 15.092 32.8523L7.81401 28.77C6.89644 28.2553 6.3335 27.3189 6.3335 26.3072V18.0265C6.3335 17.0148 6.89644 16.0783 7.81401 15.5637L15.092 11.4813Z'
                                  fill='#F43F5E'
                                ></path>
                                <path
                                  d='M14.25 6.3335C14.25 5.42192 15.0468 4.625 15.9583 4.625H22.0417C22.9533 4.625 23.75 5.42192 23.75 6.3335V9.5C23.75 10.4116 22.9533 11.2085 22.0417 11.2085H15.9583C15.0468 11.2085 14.25 10.4116 14.25 9.5V6.3335Z'
                                  fill='#F43F5E'
                                ></path>
                              </svg>
                            </div>
                            <div className='ml-4'>
                              <h5 className='mb-1.5 text-base font-semibold text-gray-900'>
                                Blockchain
                              </h5>
                              <p className='text-xs font-medium text-gray-400'>
                                Learn how blockchain can benefit your
                                organization
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50'
                          >
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50'>
                              <svg
                                width='38'
                                height='38'
                                viewBox='0 0 38 38'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M15.092 11.4813C16.0377 10.9509 17.2126 10.9509 18.1583 11.4813L25.4363 15.5637C26.3539 16.0783 26.9168 17.0148 26.9168 18.0265V26.3072C26.9168 27.3189 26.3539 28.2553 25.4363 28.77L18.1583 32.8523C17.2126 33.3828 16.0377 33.3828 15.092 32.8523L7.81401 28.77C6.89644 28.2553 6.3335 27.3189 6.3335 26.3072V18.0265C6.3335 17.0148 6.89644 16.0783 7.81401 15.5637L15.092 11.4813Z'
                                  fill='#F43F5E'
                                ></path>
                                <path
                                  d='M14.25 6.3335C14.25 5.42192 15.0468 4.625 15.9583 4.625H22.0417C22.9533 4.625 23.75 5.42192 23.75 6.3335V9.5C23.75 10.4116 22.9533 11.2085 22.0417 11.2085H15.9583C15.0468 11.2085 14.25 10.4116 14.25 9.5V6.3335Z'
                                  fill='#F43F5E'
                                ></path>
                              </svg>
                            </div>
                            <div className='ml-4'>
                              <h5 className='mb-1.5 text-base font-semibold text-gray-900'>
                                Blockchain
                              </h5>
                              <p className='text-xs font-medium text-gray-400'>
                                Learn how blockchain can benefit your
                                organization
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href='#'
                            className='flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50'
                          >
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50'>
                              <svg
                                width='38'
                                height='38'
                                viewBox='0 0 38 38'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M15.092 11.4813C16.0377 10.9509 17.2126 10.9509 18.1583 11.4813L25.4363 15.5637C26.3539 16.0783 26.9168 17.0148 26.9168 18.0265V26.3072C26.9168 27.3189 26.3539 28.2553 25.4363 28.77L18.1583 32.8523C17.2126 33.3828 16.0377 33.3828 15.092 32.8523L7.81401 28.77C6.89644 28.2553 6.3335 27.3189 6.3335 26.3072V18.0265C6.3335 17.0148 6.89644 16.0783 7.81401 15.5637L15.092 11.4813Z'
                                  fill='#F43F5E'
                                ></path>
                                <path
                                  d='M14.25 6.3335C14.25 5.42192 15.0468 4.625 15.9583 4.625H22.0417C22.9533 4.625 23.75 5.42192 23.75 6.3335V9.5C23.75 10.4116 22.9533 11.2085 22.0417 11.2085H15.9583C15.0468 11.2085 14.25 10.4116 14.25 9.5V6.3335Z'
                                  fill='#F43F5E'
                                ></path>
                              </svg>
                            </div>
                            <div className='ml-4'>
                              <h5 className='mb-1.5 text-base font-semibold text-gray-900'>
                                Blockchain
                              </h5>
                              <p className='text-xs font-medium text-gray-400'>
                                Learn how blockchain can benefit your
                                organization
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className='bg-gray-50 p-8 lg:w-2/4'>
                        <h6 className='mb-5 text-sm font-medium text-gray-500'>
                          {' '}
                          Latest News
                        </h6>
                        <div className='relative mb-6'>
                          <Image
                            path='portfolio (1).avif'
                            width={469}
                            height={320}
                            alt='Latest News image'
                            className='h-36 w-72'
                          />
                        </div>
                        <div className='block'>
                          <h5 className='mb-1.5 text-base font-semibold text-gray-900'>
                            {' '}
                            Ease of Pagedone UI{' '}
                          </h5>
                          <p className='text-sm font-medium text-gray-400'>
                            {' '}
                            Pagedone is one of the best easy to use page
                            builder.{' '}
                          </p>
                          <a
                            href='javascript:;'
                            className='mt-4 flex items-center text-xs font-semibold text-indigo-600'
                          >
                            Learn more{' '}
                            <svg
                              className='ml-2'
                              width='14'
                              height='14'
                              viewBox='0 0 16 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M2 8L12.6667 8M9.33333 12L12.8619 8.4714C13.0842 8.24918 13.1953 8.13807 13.1953 8C13.1953 7.86193 13.0842 7.75082 12.8619 7.5286L9.33333 4'
                                stroke='#4F46E5'
                                strokeWidth='1.6'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <div className='ml-auto flex flex-col justify-center gap-y-4 lg:flex-row lg:items-center'>
              <Link
                href='/pages/SignIn'
                className='shadow-xs cursor-pointer bg-fourth px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-500 hover:bg-third lg:ml-5'
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
