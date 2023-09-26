import React from 'react'
import Button from '../Button/Button'

const Blog = () => {
    return (
        <div className="blog bg-[#F0F0F0] font-pops">
            <div className="container">
                <div className="blog_wrapper grid lg:grid-cols-3 grid-cols-1 justify-items-center lg:justify-items-end lg:gap-x-[62px] gap-7 lg:pt-[110px] lg:pb-[162px] py-10">
                    <div className="bg-blog1 bg-no-repeat bg-cover bg-center ">
                        <div className="blog1_wrapper bg-black/60 pt-[75px] pb-[55.28px] px-[48px] flex flex-col gap-[52px]">
                            <p className='xl:text-[24px] text-[20px] text-white font-bold '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <Button href={'#'} className={'bg-white/50 py-[10px] px-[23px] text-white '} >read more</Button>
                        </div>
                    </div>
                    <div className="bg-blog2 bg-no-repeat bg-cover bg-center ">
                        <div className="blog2_wrapper bg-black/60 pt-[75px] pb-[55.28px] px-[48px] flex flex-col gap-[52px]">
                            <p className='xl:text-[24px] text-[20px] text-white font-bold '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <Button href={'#'} className={'bg-white/50 py-[10px] px-[23px] text-white '} >read more</Button>
                        </div>
                    </div>
                    <div className="bg-blog3 bg-no-repeat bg-cover bg-center ">
                        <div className="blog3_wrapper bg-black/60 pt-[75px] pb-[55.28px] px-[48px] flex flex-col gap-[52px]">
                            <p className='xl:text-[24px] text-[20px] text-white font-bold '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <Button href={'#'} className={'bg-white/50 py-[10px] px-[23px] text-white '} >read more</Button>
                        </div>
                    </div>
                    <div className="text lg:row-start-2 lg:col-start-3">
                        <a className='font-bold uppercase flex items-center duration-200 hover:text-prime '>more from the blog<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="black" />
                        </svg> </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog