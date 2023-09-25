import React from 'react'
import Button from '../Button/Button'
const Services = () => {
  return (
    <div className='services bg-white font-pops'>
      <div className="services_wrapper grid grid-cols-1 md:grid-cols-2 grid-flow-row">
        <div className="our_services">service</div>
        {/* modern  */}
        <div className="modern bg-modern bg-no-repeat bg-center bg-cover ">
          <div className='bg-black/60 pt-[147px] pb-[139px]  ps-[116px]'>
            <h3 className='text-white text-[36px] font-bold  w-3/4'>Modern natural oil and gas refineries.</h3>
            <Button className={''}>learn more</Button>
          </div>
        </div>
        {/* supply  */}
        <div className="supply bg-supply bg-no-repeat bg-center bg-cover">
          <div className='bg-black/60 pt-[147px] pb-[139px] ps-[116px] '>
            <h3 className='text-white text-[36px] font-bold  w-3/4'>Supply of national industries.</h3>
            <Button className={''}>learn more</Button>
          </div>
        {/* national  */}
        </div>
        <div className="national bg-national bg-no-repeat bg-center bg-cover">
          <div className="bg-black/60 pt-[147px] pb-[139px] ps-[116px] break-keep ">
            <h3 className='text-white text-[36px] font-bold  w-3/4'>National fuel distribution and supply.</h3>
            <Button>learn more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services