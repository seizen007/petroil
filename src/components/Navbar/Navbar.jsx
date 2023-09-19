import React from 'react'
import images from '../../assets/images'

const Navbar = () => {
  return (
    <>
    <div className="border border-yellow-400 my-[0.5px]"></div>
    <div className="navbar bg-[#F40404]">
      <div className="container">
        <div className="nav-wrapper flex items-center justify-between">
          <picture>
            <img src={images.logo} alt="" />
          </picture>
          <ul className='flex font-pops items-center text-base text-white gap-12 py-8'>
            <li className=''><a href="#" className=''>Home</a></li>
            <li className=''><a href="#" className=''>About</a></li>
            <li className=''><a href="#" className=''>Services</a></li>
            <li className=''><a href="#" className=''>Gallery</a></li>
            <li className=''><a href="#" className=''>blog</a></li>
            <div  className='hover:scale-[1.05]  duration-150 ease-in-out'>
              <a href='#' className="nav-btn border-2 border-white py-[14px] px-[32px] uppercase hover:rounded-lg">Contact</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar