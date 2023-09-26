import React from 'react'
import images from '../../assets/images'

const Logos = () => {
    return (
        <div className="logos">
            <div className="container">
                <div className="logos_wrapper grid lg:grid-cols-4 grid-cols-2  justify-items-center  py-[139px] gap-10 md:gap-20">
                    <picture>
                        <img src={images.logos.logo1} alt="" />
                    </picture>
                    <picture>
                        <img src={images.logos.logo2} alt="" />
                    </picture>
                    <picture>
                        <img src={images.logos.logo3} alt="" />
                    </picture>
                    <picture>
                        <img src={images.logos.logo4} alt="" />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Logos