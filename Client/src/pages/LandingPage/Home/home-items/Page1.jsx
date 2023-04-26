import React from 'react'
import { HeroText, Hero, Vector1  } from '../../../../data/assets/index';
import Button from '../../../../utility/button';

const Page1 = () => {
  return (
    <div className='flex flex-col bg-[#F5F5F5] items-start sm:items-center w-screen sm:mb-36 sm:pt-28'>
         <div className='flex flex-col justify-start w-full items-start sm:justify-center sm:items-center sm:mb-10'>
                <div className='w-[720px] flex flex-col relative sm:mb-4'>
                      <img src={HeroText} alt="hero-text" className='w-[280px] m-4  h-[29px] sm:w-[720px] sm:h-[77px] mb-1 '/>
                      <img src={Vector1} alt="scrb" className='hidden lg:flex w-[242px] absolute right-10 top-[85px]' />
                </div>
                <div className='w-[290px] sm:w-[712px] m-4 mb-7'>
                    <h4 className='text-xs text-[#3a3a3a] tracking-[0.015px] leading-4 sm:text-2xl sm:text-center'>Join our community of tech newbies with resources and great initiatives from Technoob to help navigate the muddled tech space.  Network with newbies and mentors and find great job opportunities curated solely for you.</h4>
                </div>
                <div className='flex justify-center items-center w-full'>
                      <Button name={'Get Started'}/>

                </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full  mt-14 relative'>
            <img src={Hero} alt="heroImg" className='w-[320px] h-[219px] sm:w-[823px] z-10 sm:h-[562px]'/>
            <div className='bg-[#E1F9E3] h-[62px] sm:h-[191px] w-full absolute bottom-[-46px] sm:bottom-[-160px] flex justify-center items-center'>
                <h6 className='text-xs'>
                Join 4,000+ companies already growing
                </h6>
            </div>
          </div>
    </div>
  )
}

export default Page1