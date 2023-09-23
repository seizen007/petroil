import React from 'react'

const Supplier = () => {
  return (
    <div className="supplier bg-white">
      <div className="container">
        <div className="supplier-wrapper  flex flex-wrap items-center justify-between gap-y-10">
          <div className="left-content lg:w-[289px] w-[278px]  flex justify-end">
            <h2 className='font-bold lg:text-5xl text-[40px] lg:leading-[75px]'>The biggest
              supplier on
              the country</h2>

          </div>
          <div className="right-content  w-[610px] pr-10">
            <p className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Supplier