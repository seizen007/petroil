import React from 'react'
import images from '../../assets/images'

const Logos = () => {
    return (
        <div className="logos">
            <div className="container">
                <div className="logos_wrapper grid sm:grid-cols-4  grid-cols-1 justify-items-center lg:py-[139px] sm:py-20 py-10  gap-10  sm:gap-5 lg:gap-20">
                    <picture className='flex justify-center'>
                        <img className='sm:w-full w-[50%]' src={images.logos.logo1} alt="" />
                    </picture>
                    <picture className='flex justify-center'>
                        <img className='sm:w-full w-[50%]' src={images.logos.logo2} alt="" />
                    </picture>
                    <picture className='flex justify-center'>
                        <img className='sm:w-full w-[50%]' src={images.logos.logo3} alt="" />
                    </picture>
                    <picture className='flex justify-center'>
                        <img className='sm:w-full w-[50%]' src={images.logos.logo4} alt="" />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Logos