import React from 'react'
import Button from '../Button/Button'

const LearnMore = () => {
    return (
        <div className="learn_more font-pops bg-[#F0F0F0]  ">
            <div className="container ">
                <div className="learn_wrapper grid grid-cols-1 lg:grid-cols-3 lg:py-[136px] py-10  ">

                    <div className="text_wrapper  bg-prime flex justify-center items-center">
                        <p className='xl:text-[36px] md:text-[30px]  text-[26px] font-bold text-white w-3/4 py-6'>Learn more about our company</p>
                    </div>

                    <div className="bg-learnMore bg-cover bg-no-repeat bg-center lg:col-start-2 lg:col-span-2 flex justify-center items-center pt-[168px] pb-[142px] ">
                        <div className="  ">
                            <Button href={'#'} className={'px-[30px] py-[14px] bg-white text-prime'}>learn more</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LearnMore