import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.min.css'

const Product = () => {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Main Slider */}
          <div className='slider-box mx-0 h-full w-full max-lg:mx-auto'>
            <Swiper className='swiper main-slide-carousel swiper-container relative mb-6'>
              <div className='swiper-wrapper'>
                {[
                  '1700472379.png',
                  '1711622397.png',
                  '1711622408.png',
                  '1711622419.png',
                  '1711622437.png'
                ].map((img, index) => (
                  <SwiperSlide key={index} className='swiper-slide'>
                    <div className='block'>
                      <Image
                        src={`https://pagedone.io/asset/uploads/${img}`}
                        alt='Summer Travel Bag image'
                        width={500}
                        height={500}
                        className='rounded-2xl object-cover max-lg:mx-auto'
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>

            {/* Thumbnail Slider */}
            <div className='nav-for-slider'>
              <Swiper className='swiper-wrapper'>
                {[
                  '1700472379.png',
                  '1700472430.png',
                  '1700472416.png',
                  '1700472446.png',
                  '1700472467.png'
                ].map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className='swiper-slide thumbs-slide'
                  >
                    <Image
                      src={`https://pagedone.io/asset/uploads/${img}`}
                      alt='Summer Travel Bag image'
                      width={100}
                      height={100}
                      className='cursor-pointer rounded-xl object-cover transition-all duration-500'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Product Details */}
          <div className='flex items-center justify-center'>
            <div className='pro-detail w-full max-lg:mx-auto max-lg:mt-8 max-lg:max-w-[608px] lg:pl-8 xl:pl-16'>
              <div className='mb-6 flex items-center justify-between gap-6'>
                <div className='text'>
                  <h2 className='font-manrope mb-2 text-3xl font-bold leading-10 text-gray-900'>
                    Yellow Summer Travel Bag
                  </h2>
                  <p className='text-base font-normal text-gray-500'>
                    ABS LUGGAGE
                  </p>
                </div>
                <button className='group p-0.5 transition-all duration-500'>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      className='fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100'
                      cx='30'
                      cy='30'
                      r='30'
                    />
                    <path
                      className='stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-700'
                      d='M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115'
                      stroke=''
                      strokeWidth='1.6'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>

              {/* Product Price and Discount */}
              <div className='mb-8 flex flex-col gap-y-3 min-[400px]:flex-row min-[400px]:items-center'>
                <div className='flex items-center'>
                  <h5 className='font-manrope text-2xl font-semibold leading-9 text-gray-900'>
                    $ 199.00
                  </h5>
                  <span className='ml-3 text-lg font-semibold text-indigo-600'>
                    30% off
                  </span>
                </div>
              </div>

              {/* Color Options */}
              <p className='mb-2 text-lg font-medium text-gray-900'>Color</p>
              <div className='mb-6 grid max-w-sm grid-cols-3 gap-3'>
                {['1700472379.png', '1700472517.png', '1700472529.png'].map(
                  (img, index) => (
                    <div key={index} className='color-box group'>
                      <div>
                        <Image
                          src={`https://pagedone.io/asset/uploads/${img}`}
                          alt='Summer Travel Bag image'
                          width={100}
                          height={100}
                          className='aspect-square rounded-xl border-2 border-gray-100 object-cover transition-all duration-500 group-hover:border-indigo-600 min-[400px]:h-[100px]'
                        />
                        <p className='mt-2 text-center text-sm font-normal leading-6 text-gray-400 group-hover:text-indigo-600'>
                          {['Black', 'Brown', 'Beige'][index]}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Size Options */}
              <p className='mb-2 text-lg font-medium text-gray-900'>
                Size (KG)
              </p>
              <div className='mb-3 grid grid-cols-2 gap-3 min-[400px]:mb-8 min-[400px]:grid-cols-4'>
                {['Full Set', '10 kg', '25 kg', '35 kg'].map((size, index) => (
                  <button
                    key={index}
                    className='w-full whitespace-nowrap rounded-full border border-gray-200 px-5 py-2.5 text-center text-sm font-semibold leading-6 text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300'
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
