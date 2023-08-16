import React from 'react';
import { features } from '../../../../data/contact';

const Page3 = () => {
  return (
    <div className='flex flex-col items-center justify-start bg-[#F0F4FE] h-auto mb-10 sm:pb-10 py-10 sm:py-[2rem]'>
        <h1 className='font-[700] sm:font-[900] text-2xl sm:text-[58px]  text-[#27AE60] sm:leading-[78px] text-center '>
        Why should you <br className='md:hidden' /> <span className='text-[#5E7CE8]'> Join Us  </span> 
        </h1>

        <h6 className='my-5 mx-[4rem] text-center text-xs sm:text-lg flex sm:hidden'>
            Here are a few reasons why we are the best platform for your career growth
        </h6>

        <div className='bg-white rounded-lg h-auto sm:h-auto flex flex-wrap justify-center items-center mx-10 sm:mx-20 sm:p-[3rem] md:my-[3rem] '>
                {features.map((feature, i) => (
                    <div key={i} className='m-3 text-center w-[245px] sm:w-[384px]  flex justify-start items-center p-2 '>
                        <div className='flex flex-col justify-start items-center h-auto sm:h-[178px]  '>
                            <img src={feature.icon} alt={feature.title} className='rounded-full w-[31px] h-[31px] sm:h-[48px] sm:w-[48px] border-none  object-cover mb-1 sm:mb-3' />
                            <h3 className='font-bold sm:font-[500] text-[13px] sm:text-[20px] mb-1 sm:mb-3'>{feature.title}</h3>
                            <p className='text-[10px] sm:text-base sm:font-[400]'>
                                {feature.content}
                            </p>
                        </div>   
                    </div>
                ) )}
        </div>
    </div>
  )
}

export default Page3