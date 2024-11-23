import React from 'react'

const PlaceOrder = () => {
  return (                                                <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-start items-start gap-8 inline-flex">
            <div class="w-full flex-col justify-start items-start lg:gap-14 gap-8 flex">
                <div class="w-full text-center text-black text-3xl font-bold font-manrope leading-normal">Order  Confirmation</div>
                <div class="flex-col justify-start items-start gap-3 flex">
                    <h4 class="text-black text-xl font-medium leading-8">Hello, John smith</h4>
                    <h5 class="text-gray-500 text-lg font-normal leading-8">Thank you for shopping</h5>
                    <h5 class="text-gray-500 text-lg font-normal leading-8">Your order has been confirmed and will be shipped within two days.</h5>
                </div>
            </div>
            <div class="w-full justify-center items-start ">
                <div class="w-full hidden md:grid grid-cols-2 p-4 bg-gray-50">
                    <span class="text-gray-500 text-base font-normal leading-relaxed">Product</span>
                    <p class="flex items-center justify-between">
                        <span class="w-full max-w-[200px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed ">Size</span>
                        <span class="w-full max-w-[260px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed ">Quantity</span>
                        <span class="w-full max-w-[200px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed ">Price</span>
                        <span class="w-full max-w-[200px] text-center"></span>
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-sm:max-w-xl max-xl:mx-auto">
                    <div class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                        <div class="w-[120px] h-[120px] img-box bg-gray-50 rounded-xl justify-center items-center inline-flex">
                            <img src="https://pagedone.io/asset/uploads/1713334568.png" alt="Denim Shirt image" class="xl:w-[75px] object-cover">
                        </div>
                        <div class="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
                            <h4 class="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">Top for Women</h4>
                            <h5 class="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">Product ID: 4553458120</h5>
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-between flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                        <h5 class="w-full max-w-[142px] text-center text-black text-lg font-medium leading-relaxed">L</h5>
                        <button class="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                            </svg>
                            <input type="text" class="w-12 h-12 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-relaxed px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex" placeholder="02">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 6V18M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                            </svg>
                        </button>
                        <h5 class="max-w-[142px] w-full text-center text-black text-lg font-medium leading-relaxed pl-5">$50.00</h5>
                        <button class="group max-w-[176px] text-center w-full flex items-center justify-center transition-all duration-700 ease-in-out">
                            <svg class="text-gray-500 group-hover:text-gray-900 transition-all duration-700 ease-in-out" class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g filter="url(#filter0_d_484_1442)">
                            <path d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
                            </g>
                            <defs>
                            <filter id="filter0_d_484_1442" x="-2" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feOffset dy="1"></feOffset>
                            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_484_1442"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_484_1442" result="shape"></feBlend>
                            </filter>
                            </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-sm:max-w-xl max-xl:mx-auto">
                    <div class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                        <div class="w-[120px] h-[120px] img-box bg-gray-50 rounded-xl justify-center items-center inline-flex">
                            <img src="https://pagedone.io/asset/uploads/1713334581.png" alt="Blue T-shirt for Men image" class="xl:w-[75px] object-cover">
                        </div>
                        <div class="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
                            <h4 class="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">Blue T-shirt for Men</h4>
                            <h5 class="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">Product ID: 8953458747</h5>
                        </div>
                    </div>
                    <div class="flex items-center justify-between flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                        <h5 class="w-full max-w-[142px] text-center text-black text-lg font-medium leading-relaxed">M</h5>
                        <button class="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                            </svg>
                            <input type="text" class="w-12 h-12 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-relaxed px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex" placeholder="02">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 6V18M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                            </svg>
                        </button>
                        <h5 class="max-w-[142px] w-full text-center text-black text-lg font-medium leading-relaxed pl-5">$50.00</h5>
                        <button class="group max-w-[176px] text-center w-full flex items-center justify-center transition-all duration-700 ease-in-out">
                            <svg class="text-gray-500 group-hover:text-gray-900 transition-all duration-700 ease-in-out" class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g filter="url(#filter0_d_484_1442)">
                            <path d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
                            </g>
                            <defs>
                            <filter id="filter0_d_484_1442" x="-2" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feOffset dy="1"></feOffset>
                            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_484_1442"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_484_1442" result="shape"></feBlend>
                            </filter>
                            </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-center gap-4 flex">
                <div class="w-full justify-between items-center gap-6 inline-flex">
                    <h5 class="text-gray-600 text-lg font-normal leading-8">Subtotal:</h5>
                    <h5 class="text-right text-gray-900 text-lg font-semibold leading-8">$ 100.00</h5>
                </div>
                <div class="w-full justify-between items-center gap-6 inline-flex">
                    <h5 class="text-gray-600 text-lg font-normal leading-8">Delivery:</h5>
                    <h5 class="text-right text-gray-900 text-lg font-semibold leading-8">Free</h5>
                </div>
                <div class="w-full justify-between items-center gap-6 inline-flex">
                    <h5 class="text-gray-600 text-lg font-normal leading-8">Total:</h5>
                    <h5 class="text-right text-gray-900 text-lg font-semibold leading-8">₹100.00</h5>
                </div>
            </div>
        </div>
    </div>
</section>
                                        )
}

export default PlaceOrder
