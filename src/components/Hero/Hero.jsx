import React from 'react'

const Hero = () => {
    return (
        <div className="banner bg-hero-banner bg-no-repeat bg-cover ">
            <div className="w-full h-full bg-black/60">
                <div className="container">
                    <div className="banner-wrapper flex flex-wrap gap-y-10 py-[257px]  text-white w-3/4  content-center">
                        <h1 className='font-pops text-[64px] font-bold'>
                            We exist since 1975 on the oil and gas industry.
                        </h1>
                        <a href='#' className="banner-btn bg-[#F40404] py-[14px] px-10 uppercase text-base border border-transparent hover:bg-transparent hover:border-white hover:scale-[1.1] duration-150 ease-in-out hover:rounded-lg ">
                            learn more
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero