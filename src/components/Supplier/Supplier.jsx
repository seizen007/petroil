import React from 'react'

const Supplier = () => {
  return (
    <div className="supplier bg-white">
      <div className="container">
        <div className="supplier-wrapper flex flex-wrap gap-x-11 px-10 lg:px-0 lg:justify-between justify-center lg:text-start text-center font-pops items-center py-36">
          <div className="left-content flex justify-end ">
            <h2 className='font-bold w-[289px] text-5xl leading-[75px]'>The biggest
              supplier on
              the country</h2>

          </div>
          <div className="right-content  ">
            <p className='w-[651px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Supplier