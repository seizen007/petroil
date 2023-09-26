import React from 'react'

const Button = ({className,children}) => {
  return (
    <a className={`font-pops  hover:text-white capitalize bg-[#F40404]  text-[12px] lg:text-[16px] border font-semibold
    border-transparent hover:bg-transparent hover:border-white hover:scale-[1.1] duration-150 ease-in-out hover:rounded-lg w-fit ${className}`}>{children}</a>
  )
}

export default Button