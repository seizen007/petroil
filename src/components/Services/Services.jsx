import React from 'react'
import Button from '../Button/Button'
const Services = () => {
  return (
    <div className='services bg-white font-pops'>
      <div className="services_wrapper grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4 lg:gap-0">
        <div className="services flex lg:justify-end text-center justify-center lg:text-start items-center px-4">
          <div className="text_wrapper w-[509px]">
            <h2 className='lg:text-[64px] md:text-[54px] text-[45px] font-bold'>Our Services</h2>
            <p className='md:text-base text-sm lg:w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
        {/* modern  */}
        <div className="modern bg-modern bg-no-repeat bg-center bg-cover ">
          <div className='bg-black/60 pt-[147px] pb-[139px] ps-4 sm:ps-[116px] md:pe-12 pe-4  h-full break-keep flex flex-col gap-y-4 '>
            <h3 className='text-white text-[25px] md:text-[30px] xl:text-[36px] font-bold  '>Modern natural oil and gas refineries.</h3>
            <Button href={'#'}  className={'xl:py-[14px] xl:px-[30px] py-2 px-4 text-white '}>learn more</Button>
          </div>
        </div>
        {/* supply  */}
        <div className="supply bg-supply bg-no-repeat bg-center bg-cover">
          <div className='bg-black/60 pt-[147px] pb-[139px] ps-4 sm:ps-[116px] md:pe-12 pe-4  h-full  break-keep flex flex-col gap-y-4 '>
            <h3 className='text-white text-[25px] md:text-[30px] xl:text-[36px] font-bold  '>Supply of national industries.</h3>
            <Button href={'#'} className={'xl:py-[14px] xl:px-[30px] py-2 px-4 text-white '}>learn more</Button>
          </div>
        {/* national  */}
        </div>
        <div href={'#'} className="national bg-national bg-no-repeat bg-center bg-cover">
          <div className="bg-black/60 pt-[147px] pb-[139px] ps-4 sm:ps-[116px] md:pe-12 pe-4 h-full  break-keep flex flex-col gap-y-4  ">
            <h3 className='text-white text-[25px] md:text-[30px] xl:text-[36px] font-bold  '>National fuel distribution and supply.</h3>
            <Button className={'xl:py-[14px] xl:px-[30px] py-2 px-4 text-white '}>learn more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services