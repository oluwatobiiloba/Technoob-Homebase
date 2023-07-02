import React from 'react'
import { Hero, Vector1  } from '../../../../data/assets/index';
import { Link } from 'react-router-dom';
import Button from '../../../../utility/button';
import { HomeItems } from '../../../../data/contact';

const Page1 = () => {
  return (
    <div className='flex flex-col bg-[#F5F5F5] items-start sm:items-center w-full sm:mb-36 sm:pt-10'>
         <div className='flex flex-col justify-start w-full items-start px-4 sm:justify-center sm:items-center sm:mb-10'>
                <div className='w-[720px] flex flex-col relative mt-5 mb-2 sm:mb-4'>
                  <header className='uni text-left sm:text-center  md:text-6xl text-2xl font-bold md:py-5 relative'>
                    <span className=' text-tblue'>Learn, Grow,</span> <span className='text-tgreen'> Connect</span>
                  </header>
                  <img src={Vector1} alt="scrb" className='hidden lg:flex w-[242px] absolute right-16 top-[80px]' />
                </div>
                <div className='w-[290px] sm:w-[712px]  sm:m-4 mb-7 '>
                    <h4 className='text-xs text-[#3a3a3a] tracking-[0.015px] leading-4 sm:text-2xl sm:text-center'>Join our community of tech newbies with resources and great initiatives from Technoob to help navigate the muddled tech space.  Network with newbies and mentors and find great job opportunities curated solely for you.</h4>
                </div>
                <div className='flex justify-center items-center w-full'>
                  <Link to={'/Sign-Up'}>
                      <Button name={'Get Started'}/>
                  </Link>

                </div>
          </div>
          <div className='flex flex-col justify-start items-center w-full h-[270px] sm:h-[710px] relative'>
            <img src={Hero} alt="heroImg" className='w-[320px] h-[219px] sm:w-[823px] sm:h-[562px] '/>


            <div className='bg-[#E1F9E3] h-[62px] sm:h-[191px] w-full absolute bottom-0 sm:bottom-0 flex flex-col justify-center items-center'>
                <h6 className='text-xs sm:text-xl sm:mb-3'>
                Join 4,000+ companies already growing
                </h6>
                <div className='w-[80%] mx-3 sm:w-[60%] flex justify-between items-center mt-3'>
                    {HomeItems.map((item, i) => (
                      <div key={i} className='flex justify-between items-center'>
                          <img src={item.img} alt={item.title} className='mr-1 sm:mr-2 h-[1rem] w-[1rem] lg:h-[44px] lg:w-[44px]' />
                          <p className='font-semibold text-sm sm:text-xl '>{item.title}</p>
                      </div>
                    ))}
                </div>
            </div>
          </div>
    </div>
  )
}

export default Page1