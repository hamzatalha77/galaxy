'use client'
import React, { useState, useRef, useEffect } from 'react'

const SearchProducts = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isColorOpen, setIsColorOpen] = useState(false)

  const toggleColorSection = () => {
    setIsColorOpen(prev => !prev)
  }

  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  const closeDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', closeDropdown)
    } else {
      document.removeEventListener('click', closeDropdown)
    }
    return () => {
      document.removeEventListener('click', closeDropdown)
    }
  }, [isOpen])
  return (
    <div>
      <div>
        <div
          className='relative z-40 lg:hidden'
          role='dialog'
          aria-modal='true'
        >
          <div
            className='fixed inset-0 bg-black bg-opacity-25'
            aria-hidden='true'
          ></div>

          <div className='fixed inset-0 z-40 flex'>
            <div className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
              <div className='flex items-center justify-between px-4'>
                <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                <button
                  type='button'
                  className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    data-slot='icon'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6 18 18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              <form className='mt-4 border-t border-gray-200'>
                <h3 className='sr-only'>Categories</h3>
                <ul role='list' className='px-2 py-3 font-medium text-gray-900'>
                  <li>
                    <a href='#' className='block px-2 py-3'>
                      Totes
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-2 py-3'>
                      Backpacks
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-2 py-3'>
                      Travel Bags
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-2 py-3'>
                      Hip Bags
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-2 py-3'>
                      Laptop Sleeves
                    </a>
                  </li>
                </ul>

                <div className='border-t border-gray-200 px-4 py-6'>
                  <h3 className='-mx-2 -my-3 flow-root'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'
                      aria-controls='filter-section-mobile-0'
                      aria-expanded={isColorOpen}
                      onClick={toggleColorSection}
                    >
                      <span className='font-medium text-gray-900'>Color</span>
                      <span className='ml-6 flex items-center'>
                        {isColorOpen ? (
                          <svg
                            className='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z'
                              clipRule='evenodd'
                            />
                          </svg>
                        ) : (
                          <svg
                            className='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                          >
                            <path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
                          </svg>
                        )}
                      </span>
                    </button>
                  </h3>

                  {isColorOpen && (
                    <div className='pt-6' id='filter-section-mobile-0'>
                      <div className='space-y-6'>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-0'
                            name='color[]'
                            value='white'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='filter-mobile-color-0'
                            className='ml-3 min-w-0 flex-1 text-gray-500'
                          >
                            White
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-1'
                            name='color[]'
                            value='beige'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='filter-mobile-color-1'
                            className='ml-3 min-w-0 flex-1 text-gray-500'
                          >
                            Beige
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-2'
                            name='color[]'
                            value='blue'
                            type='checkbox'
                            checked
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='filter-mobile-color-2'
                            className='ml-3 min-w-0 flex-1 text-gray-500'
                          >
                            Blue
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-3'
                            name='color[]'
                            value='brown'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='filter-mobile-color-3'
                            className='ml-3 min-w-0 flex-1 text-gray-500'
                          >
                            Brown
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-4'
                            name='color[]'
                            value='green'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='filter-mobile-color-4'
                            className='ml-3 min-w-0 flex-1 text-gray-500'
                          >
                            Green
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='filter-mobile-color-5'
                            name='color[]'
                            value='purple'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='filter-mobile-color-5'
                            className='ml-3 min-w-0 flex-1 text-gray-500'
                          >
                            Purple
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className='border-t border-gray-200 px-4 py-6'>
                  <h3 className='-mx-2 -my-3 flow-root'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'
                      aria-controls='filter-section-mobile-1'
                      aria-expanded='false'
                    >
                      <span className='font-medium text-gray-900'>
                        Category
                      </span>
                      <span className='ml-6 flex items-center'>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
                        </svg>

                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className='pt-6' id='filter-section-mobile-1'>
                    <div className='space-y-6'>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-category-0'
                          name='category[]'
                          value='new-arrivals'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-category-0'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          New Arrivals
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-category-1'
                          name='category[]'
                          value='sale'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-category-1'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          Sale
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-category-2'
                          name='category[]'
                          value='travel'
                          type='checkbox'
                          checked
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-category-2'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          Travel
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-category-3'
                          name='category[]'
                          value='organization'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-category-3'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          Organization
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-category-4'
                          name='category[]'
                          value='accessories'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-category-4'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-t border-gray-200 px-4 py-6'>
                  <h3 className='-mx-2 -my-3 flow-root'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'
                      aria-controls='filter-section-mobile-2'
                      aria-expanded='false'
                    >
                      <span className='font-medium text-gray-900'>Size</span>
                      <span className='ml-6 flex items-center'>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
                        </svg>

                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className='pt-6' id='filter-section-mobile-2'>
                    <div className='space-y-6'>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-size-0'
                          name='size[]'
                          value='2l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-size-0'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          2L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-size-1'
                          name='size[]'
                          value='6l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-size-1'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          6L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-size-2'
                          name='size[]'
                          value='12l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-size-2'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          12L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-size-3'
                          name='size[]'
                          value='18l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-size-3'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          18L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-size-4'
                          name='size[]'
                          value='20l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-size-4'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          20L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-mobile-size-5'
                          name='size[]'
                          value='40l'
                          type='checkbox'
                          checked
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-mobile-size-5'
                          className='ml-3 min-w-0 flex-1 text-gray-500'
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <main className='mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8'>
          <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
              New Arrivals
            </h1>

            <div className='flex items-center'>
              <div
                className='relative inline-block text-left'
                ref={dropdownRef}
              >
                <div>
                  <button
                    type='button'
                    className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'
                    id='menu-button'
                    aria-expanded={isOpen}
                    aria-haspopup='true'
                    onClick={toggleDropdown}
                  >
                    Sort
                    <svg
                      className={`-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='menu-button'
                  >
                    <div className='py-1' role='none'>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm font-medium text-gray-900'
                        role='menuitem'
                      >
                        Most Popular
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-500'
                        role='menuitem'
                      >
                        Best Rating
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-500'
                        role='menuitem'
                      >
                        Newest
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-500'
                        role='menuitem'
                      >
                        Price: Low to High
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-500'
                        role='menuitem'
                      >
                        Price: High to Low
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <section aria-labelledby='products-heading' className='pb-24 pt-6'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>

            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              <form className='hidden lg:block'>
                <h3 className='sr-only'>Categories</h3>
                <ul
                  role='list'
                  className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900'
                >
                  <li>
                    <a href='#'>Totes</a>
                  </li>
                  <li>
                    <a href='#'>Backpacks</a>
                  </li>
                  <li>
                    <a href='#'>Travel Bags</a>
                  </li>
                  <li>
                    <a href='#'>Hip Bags</a>
                  </li>
                  <li>
                    <a href='#'>Laptop Sleeves</a>
                  </li>
                </ul>

                <div className='border-b border-gray-200 py-6'>
                  <h3 className='-my-3 flow-root'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'
                      aria-controls='filter-section-0'
                      aria-expanded='false'
                    >
                      <span className='font-medium text-gray-900'>Color</span>
                      <span className='ml-6 flex items-center'>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
                        </svg>

                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className='pt-6' id='filter-section-0'>
                    <div className='space-y-4'>
                      <div className='flex items-center'>
                        <input
                          id='filter-color-0'
                          name='color[]'
                          value='white'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-color-0'
                          className='ml-3 text-sm text-gray-600'
                        >
                          White
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-color-1'
                          name='color[]'
                          value='beige'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-color-1'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Beige
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-color-2'
                          name='color[]'
                          value='blue'
                          type='checkbox'
                          checked
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-color-2'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Blue
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-color-3'
                          name='color[]'
                          value='brown'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-color-3'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Brown
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-color-4'
                          name='color[]'
                          value='green'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-color-4'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Green
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-color-5'
                          name='color[]'
                          value='purple'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-color-5'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-b border-gray-200 py-6'>
                  <h3 className='-my-3 flow-root'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'
                      aria-controls='filter-section-1'
                      aria-expanded='false'
                    >
                      <span className='font-medium text-gray-900'>
                        Category
                      </span>
                      <span className='ml-6 flex items-center'>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
                        </svg>

                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className='pt-6' id='filter-section-1'>
                    <div className='space-y-4'>
                      <div className='flex items-center'>
                        <input
                          id='filter-category-0'
                          name='category[]'
                          value='new-arrivals'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-category-0'
                          className='ml-3 text-sm text-gray-600'
                        >
                          New Arrivals
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-category-1'
                          name='category[]'
                          value='sale'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-category-1'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Sale
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-category-2'
                          name='category[]'
                          value='travel'
                          type='checkbox'
                          checked
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-category-2'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Travel
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-category-3'
                          name='category[]'
                          value='organization'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-category-3'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Organization
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-category-4'
                          name='category[]'
                          value='accessories'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-category-4'
                          className='ml-3 text-sm text-gray-600'
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-b border-gray-200 py-6'>
                  <h3 className='-my-3 flow-root'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'
                      aria-controls='filter-section-2'
                      aria-expanded='false'
                    >
                      <span className='font-medium text-gray-900'>Size</span>
                      <span className='ml-6 flex items-center'>
                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
                        </svg>

                        <svg
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                          data-slot='icon'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className='pt-6' id='filter-section-2'>
                    <div className='space-y-4'>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-0'
                          name='size[]'
                          value='2l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-size-0'
                          className='ml-3 text-sm text-gray-600'
                        >
                          2L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-1'
                          name='size[]'
                          value='6l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-size-1'
                          className='ml-3 text-sm text-gray-600'
                        >
                          6L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-2'
                          name='size[]'
                          value='12l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-size-2'
                          className='ml-3 text-sm text-gray-600'
                        >
                          12L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-3'
                          name='size[]'
                          value='18l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-size-3'
                          className='ml-3 text-sm text-gray-600'
                        >
                          18L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-4'
                          name='size[]'
                          value='20l'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-size-4'
                          className='ml-3 text-sm text-gray-600'
                        >
                          20L
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-5'
                          name='size[]'
                          value='40l'
                          type='checkbox'
                          checked
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='filter-size-5'
                          className='ml-3 text-sm text-gray-600'
                        >
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className='lg:col-span-3'>
                <div className='bg-white py-6 sm:py-8 lg:py-12'>
                  <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
                    <div className='grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3'>
                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Austin Wade'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />

                          <div className='absolute bottom-2 left-0 flex gap-2'>
                            <span className='rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white'>
                              -50%
                            </span>
                            <span className='rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800'>
                              New
                            </span>
                          </div>
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Fancy Outfit
                            </a>
                            <span className='text-gray-500'>
                              by Fancy Brand
                            </span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $19.99
                            </span>
                            <span className='text-sm text-red-500 line-through'>
                              $39.99
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Nick Karvounis'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Cool Outfit
                            </a>
                            <span className='text-gray-500'>by Cool Brand</span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $29.99
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Nick Karvounis'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Cool Outfit
                            </a>
                            <span className='text-gray-500'>by Cool Brand</span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $29.99
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Nick Karvounis'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Cool Outfit
                            </a>
                            <span className='text-gray-500'>by Cool Brand</span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $29.99
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Nick Karvounis'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Cool Outfit
                            </a>
                            <span className='text-gray-500'>by Cool Brand</span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $29.99
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Nick Karvounis'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Cool Outfit
                            </a>
                            <span className='text-gray-500'>by Cool Brand</span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $29.99
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Nick Karvounis'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Cool Outfit
                            </a>
                            <span className='text-gray-500'>by Cool Brand</span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $29.99
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Austin Wade'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Nice Outfit
                            </a>
                            <span className='text-gray-500'>by Nice Brand</span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $35.00
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <a
                          href='#'
                          className='group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'
                        >
                          <img
                            src='https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700'
                            loading='lazy'
                            alt='Photo by Vladimir Fedotov'
                            className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                          />
                        </a>

                        <div className='flex items-start justify-between gap-2 px-2'>
                          <div className='flex flex-col'>
                            <a
                              href='#'
                              className='text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl'
                            >
                              Lavish Outfit
                            </a>
                            <span className='text-gray-500'>
                              by Lavish Brand
                            </span>
                          </div>

                          <div className='flex flex-col items-end'>
                            <span className='font-bold text-gray-600 lg:text-lg'>
                              $49.99
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default SearchProducts
