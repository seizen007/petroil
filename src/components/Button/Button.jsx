import React from 'react'

const Button = ({className,children}) => {
  return (
    <a className={`font-pops text-white capitalize banner-btn bg-[#F40404] text-sm md:text-base border 
    border-transparent hover:bg-transparent hover:border-white hover:scale-[1.1] duration-150 ease-in-out hover:rounded-lg w-fit ${className}`}>{children}</a>
  )
}

export default Button