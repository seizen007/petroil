import React from 'react'

const Hero = () => {
    return (
        <div className="banner bg-hero-banner bg-no-repeat bg-cover bg-center w-full">
            <div className="w-full h-full bg-black/60 ">
                <div className="container">
                    <div className="banner-wrapper flex flex-col lg:gap-y-10 gap-y-6 lg:py-[257px] sm:py-24 md:py-32 py-20  text-white  sm:text-center md:text-start sm:items-center md:items-start">
                        <h1 className='font-pops  lg:text-[54px] sm:text-[40px] md:text-[44px] text-[39px] font-bold lg:w-3/4 sm:w-11/12 break-words'>
                            We exist since 1975 on the oil and gas industry.
                        </h1>
                        <a href='https://github.com/seizen007/petroil.git' className="banner-btn bg-[#F40404] lg:py-[14px] lg:px-10 py-3 px-5   uppercase lg:text-base text-sm border 
                        border-transparent hover:bg-transparent hover:border-white 
                        hover:scale-[1.1] duration-150 ease-in-out hover:rounded-lg w-fit ">
                            learn more
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero