import React from 'react'
import Image from '../Image'

const Features = () => {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-14 text-center'>
          <h2 className='mb-6 max-w-max text-center text-4xl font-bold leading-[3.25rem] text-gray-900 lg:mx-auto lg:max-w-3xl'>
            Exceptional Services for Your Timeless Jewelry
          </h2>
          <p className='mb-8 text-base font-normal text-gray-500 lg:mx-auto lg:max-w-2xl'>
            Using technology to make finance simpler, smarter and more
            rewarding.
          </p>
        </div>
        <div className='mx-auto grid max-w-lg grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4'>
          <div className='relative h-auto w-full md:col-span-2'>
            <div className='flex flex-row flex-wrap justify-between rounded-2xl bg-fourth'>
              <div className='w-full p-5 md:w-1/2 xl:p-8'>
                <div className='block'>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </div>
                <h3 className='w-full py-5 text-lg font-bold text-white xl:w-64 xl:text-xl'>
                  Custom Jewelry Design
                </h3>
                <p className='mb-8 w-full text-xs font-normal text-gray-300 xl:w-64'>
                  Collaborate with our experts to create a one-of-a-kind piece
                  that reflects your unique style.
                </p>
                <button className='flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5'>
                  View More
                  <svg
                    width='6'
                    height='10'
                    viewBox='0 0 6 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1'
                      stroke='white'
                      strokeWidth='1.6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='relative hidden h-auto md:block md:w-1/2'>
                <Image
                  path='coin (2).gif'
                  width={258}
                  height={302}
                  alt='Header tailwind Section'
                  className='ml-auto h-full object-cover'
                />
              </div>
            </div>
          </div>
          <div className='relative h-auto w-full'>
            <div className='h-full rounded-2xl bg-GoldenBottom p-5 xl:p-8'>
              <div className='block'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                  ></path>
                </svg>
              </div>
              <h3 className='py-5 text-lg font-bold text-white xl:text-xl'>
                Jewelry Repair & Restoration
              </h3>
              <p className='mb-8 text-xs font-normal text-white'>
                Restore your treasured jewelry to its original beauty with our
                professional repair services.
              </p>
              <button className='flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5'>
                View More
                <svg
                  width='6'
                  height='10'
                  viewBox='0 0 6 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1'
                    stroke='white'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className='relative h-auto w-full'>
            <div className='h-full rounded-2xl bg-GoldenTop p-5 xl:p-8'>
              <div className='block'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                  ></path>
                </svg>
              </div>
              <h3 className='py-5 text-lg font-bold text-white xl:text-xl'>
                Engraving Services
              </h3>
              <p className='mb-8 text-xs font-normal text-white'>
                Personalize your jewelry with custom engraving, perfect for
                adding meaningful touches to any piece.
              </p>
              <button className='flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5'>
                View More
                <svg
                  width='6'
                  height='10'
                  viewBox='0 0 6 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1'
                    stroke='white'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
