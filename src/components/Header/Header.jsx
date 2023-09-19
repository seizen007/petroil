import React from 'react'
import images from '../../assets/images'

const Header = () => {
    return (
        <header className=' bg-[#282828] font-pops'>
            <div className="container  py-4 flex  gap-4 md:justify-between justify-evenly items-center">
                <div className="mail-wrapper flex md:flex-row flex-col text-xs text-white md:gap-x-[27px] gap-y-1 font-normal">
                    <div className="gmail flex items-center gap-1 w-[12.5rem] border-r-[#5C6A92] md:border-r-[2px]">
                        <picture>
                            <img src={images.mailLogo} alt="" className="" />
                        </picture>
                        <p>mail@yourcompany.com</p>
                    </div>
                    <div className="whatsapp  flex items-center gap-1">
                        <picture>
                            <img src={images.wappLogo} alt="" className="" />
                        </picture>
                        <p>+896 120 5889 (Toll free)</p>
                    </div>
                </div>
                <div className="icons-wrapper grid md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-2">
                    <picture>
                        <img src={images.icons.fb} alt="" />
                    </picture>
                    <picture>
                        <img src={images.icons.tweet} alt="" />
                    </picture>
                    <picture>
                        <img src={images.icons.linkdin} alt="" />
                    </picture>
                    <picture>
                        <img src={images.icons.insta} alt="" />
                    </picture>
                </div>
            </div>
        </header>

    )
}

export default Header