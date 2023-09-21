import React, { useState } from 'react'
import images from '../../assets/images'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [use, setuse] = useState(false)
  const click =()=>{
    setuse(!use)
  }


  
  return (
    <nav>
    
    <div className="navbar bg-prime">
      <div className="container">
        
        <div className="nav-wrapper flex flex-wrap md:flex-col lg:flex-row items-center justify-between md:px-0 px-10">
          <picture>
            <img className='py-6' src={images.logo} alt="" />
          </picture>
          <div className="nav_toggle md:hidden text-3xl text-white duration-75 hover:border-2 hover:p-[1px] " onClick={click}>{
            use === true? <GiHamburgerMenu/>: <GiHamburgerMenu/>

          }</div>

          <ul className={`flex flex-col md:flex-row font-pops items-center gap-5 py-6 md:gap-12 md:py-8 md:p-0 md:w-auto w-full absolute right-0 z-20  bg-prime/20 backdrop-blur-lg md:bg-transparent md:static duration-300  ${use ? 'top-[150px]':'top-[-250px]'}`}>
            <li className='nav_items hover:scale-[1.1] duration-150'><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>Home</a></li>
            <li className='nav_items hover:scale-[1.1] duration-150'><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>About</a></li>
            <li className='nav_items hover:scale-[1.1] duration-150'><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>Services</a></li>
            <li className='nav_items hover:scale-[1.1] duration-150'><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>Gallery</a></li>
            <li className='nav_items hover:scale-[1.1] duration-150'><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>Blog</a></li>
            <div  className='hover:scale-[1.05]  duration-150 ease-in-out'>
              <a href='#' className="nav-btn border-2 border-white  md:py-[14px] md:px-[32px] py-2 px-5 uppercase hover:rounded-lg text-sm text-white duration-100">Contact</a>
            </div>
          </ul>
        </div>
        
      </div>
    </div>

    </nav>
  )
}

export default Navbar