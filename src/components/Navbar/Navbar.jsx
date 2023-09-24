import React, { useState } from 'react'
import images from '../../assets/images'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Navbar = () => {
  const [use, setuse] = useState(false)
  
    const [hide, sethide] = useState(false)
  
  
  const click =()=>{
    setuse(!use)
  }
  const click2 =()=>{
    sethide(!hide)
  }

  const hidden = hide? `sm:w-1/2  `:'sm:w-1/2 sm:right-0'
  const navHide = use ? 'sm:h-[350px] h-[300px]':''




  
  return (
    <nav>
    
    <div className="navbar bg-prime">
      <div className="container">
        
        <div className="nav-wrapper flex sm:flex-wrap  lg:flex-row items-center justify-between relative z-20 ">
          <picture>
            <img className='py-6' src={images.logo} alt="" />
          </picture>
          <div className="nav_toggle lg:hidden text-3xl text-white duration-75 hover:border-2 hover:p-[1px] " onClick={click}>{
            // use === true? <GiHamburgerMenu/>: <GiHamburgerMenu/>
            <GiHamburgerMenu/>

          }</div>

         <div className={`meanubar-wrapper h-0 lg:h-auto overflow-hidden  lg:w-fit duration-300 absolute lg:static top-[93px] lg:bg-none bg-prime/70 backdrop-blur-md lg:backdrop-blur-none z-0 rounded-b-3xl lg:rounded-none ease-in-out  w-full ${navHide} ${hidden} `}>
         <ul className={`flex flex-col lg:flex-row font-pops items-center gap-5 py-6 md:py-7 px-1 lg:gap-12 lg:py-10  `}>
            <li className={`nav_items hover:scale-[1.1] duration-150`}><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>Home</a></li>
            <li className={`nav_items hover:scale-[1.1] duration-150`}><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>About</a></li>
            <li className={`nav_items hover:scale-[1.1] duration-150`}><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>Services</a></li>
            <li className={`nav_items hover:scale-[1.1] duration-150`}><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>Gallery</a></li>
            <li className={`nav_items hover:scale-[1.1] duration-150`}><a href="#" className=' text-base text-white hover:text-yellow-200 duration-200 '>Blog</a></li>
            <div  className={`hover:scale-[1.05]  duration-150 ease-in-out `}>
              <a href='#' className={`nav-btn border-2 border-white  lg:py-[14px] lg:px-[32px] py-1 px-3 uppercase hover:rounded-lg text-sm text-white duration-100 `}>{"contact"}</a>
            </div>
            <div className='lg:hidden hidden sm:block text-white text-3xl hover:text-4xl' onClick={click2}>
              {
                hide===true? <BsFillArrowRightCircleFill/>:<BsFillArrowLeftCircleFill/>
              }
            </div>
          </ul>
         </div>
        </div>
        
      </div>
    </div>

    </nav>
  )
}

export default Navbar