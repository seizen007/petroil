import React from 'react'

const Supplier = () => {
  return (
    <div className="supplier bg-white">
      <div className="container">
        <div className="supplier-wrapper flex flex-wrap  justify-around lg:justify-normal items-center gap-y-3 xl:gap-x-[178px] lg:gap-x-[100px] pt-[78px] pb-[100px]">
          <div className="left-content sm:w-fit w-full md:w-[289px]">
            <h2 className='font-bold text-[34px] md:text-[41px] lg:text-[48px] lg:leading-[72px] md:leading-[60px]'>The biggest
              supplier on
              the country</h2>

          </div>
          <div className="right-content lg:w-[550px] md:w-2/4 w-full sm:text-center md:text-start ">
            <p className=' text-sm md:text-base break-words '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Supplier
