import React from 'react'
import images from '../../assets/images'
const Services = () => {
  return (
    <div className='services bg-white'>
        <div className="services_wrapper grid grid-cols-2 grid-rows-2">
            <div className="our_services">service</div>
            <div className="modern">
              <picture>
                <img src={images.service.modern} alt="" />
              </picture>
            </div>
            <div className="supply">supply</div>
            <div className="national">national</div>
        </div>
    </div>
  )
}

export default Services