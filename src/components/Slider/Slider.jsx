import React from 'react'
import images from '../../assets/images'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
function Slider() {

    const prev = () => {
        return <a className=' hidden lg:block cursor-pointer text-sm md:text-base hover:text-prime font-pops'>Prev</a>
    }
    const next = () => {
        return <a className='hidden lg:block cursor-pointer text-sm md:text-base hover:text-prime font-pops'>Next</a>
    }



    return (
        <div className="slider bg-white">
            <div className="">

                <AliceCarousel renderPrevButton={prev} renderNextButton={next} className="slider_image ">
                    {/* slider1 */}
                    <div className="slider1 grid grid-cols-4 gap-x-[20px] md:gap-x-[30px]">
                        <picture>
                            <img src={images.slide.slider1} className='sliderimg ' alt="" />
                        </picture>
                        <picture>
                            <img src={images.slide.slider2} className='sliderimg' alt="" />
                        </picture>
                        <picture>
                            <img src={images.slide.slider3} className='sliderimg' alt="" />
                        </picture>
                        <picture>
                            <img src={images.slide.slider4} className='sliderimg' alt="" />
                        </picture>
                    </div>
                    {/* slider2  */}
                    <div className="slider2 grid grid-cols-4 gap-x-[20px] md:gap-x-[30px]">
                        <picture>
                            <img src={images.slide.slider4} className='sliderimg' alt="" />
                        </picture>
                        <picture>
                            <img src={images.slide.slider3} alt="" />
                        </picture>
                        <picture>
                            <img src={images.slide.slider2} alt="" />
                        </picture>
                        <picture>
                            <img src={images.slide.slider1} alt="" />
                        </picture>
                    </div>

                </AliceCarousel>
            </div>
        </div>
    );
}

export default Slider