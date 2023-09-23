import React from 'react'

const Hero = () => {
    return (
        <div className="banner bg-hero-banner bg-no-repeat bg-cover bg-center w-full">
            <div className="w-full h-full bg-black/60 ">
                <div className="container">
                    <div className="banner-wrapper flex flex-wrap gap-y-10 lg:py-[257px] sm:py-24 md:py-32 py-20  text-white lg:w-9/12 ">
                        <h1 className='font-pops  lg:text-[54px] sm:text-[44px] text-[34px] font-bold '>
                            We exist since 1975 on the oil and gas industry.
                        </h1>
                        <a href='https://github.com/seizen007/petroil.git' className="banner-btn bg-[#F40404] md:py-[14px] md:px-10 py-3 px-2  uppercase md:text-base text-sm border 
                        border-transparent hover:bg-transparent hover:border-white 
                        hover:scale-[1.1] duration-150 ease-in-out hover:rounded-lg ">
                            learn more
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero