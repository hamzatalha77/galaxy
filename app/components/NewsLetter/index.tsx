import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-second py-6'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
          <div className='mb-3 text-center md:mb-0 md:text-left'>
            <span className='font-bold uppercase tracking-widest text-gray-100'>
              Newsletter
            </span>
            <p className='text-indigo-200'>Subscribe to our newsletter</p>
          </div>

          <form className='flex w-full gap-2 md:max-w-md'>
            <input
              placeholder='Email'
              className='w-full flex-1 rounded border border-white px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring'
            />

            <button className='inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-indigo-600 md:text-base'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
