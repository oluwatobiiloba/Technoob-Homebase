import React from 'react'
import Button from '../utility/button'
import { image2 } from '../data/assets'

const Page2 = () => {
  return (
    <div className='flex w-full items-start mb-10 '>
        <div className='flex flex-col justify-between items-center sm:gap-5 w-full sm:flex-row px-5 sm:px-[60px]'>
            <div>
                <div className='flex flex-col justify-start items-start mb-8 mt-4  '>
                    <h1 className='font-[700] sm:font-[900] text-2xl sm:text-[3.625rem] w-[288px] sm:w-[804px]  text-[#5E7CE8] sm:leading-[78px] '>
                        Revolutionizing skill Learning and <span className='text-[#27AE60]'> job placement</span> 
                    </h1>
                    <p className='w-[327px] text-xs sm:text-[20px] sm:leading-[30px] sm:w-[691px] font-[400] text-[#3a3a3a] mb-4'>
                    Tech Noob's platform has the potential to completely change how individuals learn and find work in the tech sector. We provide resources and assistances for job placement and skill development that are tailored to the requirements of new tech learning. Our methods and initiatives are adaptable, inexpensive, and available to everyone who wants to begin a career in technology. We are dedicated to fostering a tech sector that is more inclusive and diverse.
                    </p>

                    <Button name={'Join the Community'}/>
                </div>

            </div>

            <div className='flex justify-center items-center sm:w-[690px] sm:h-[540px]'>
                <img src={image2} alt="pg2-img"  className='w-[295px] h-[230.5px] sm:w-full sm:h-[526px]' />
            </div>
            
        </div>
    </div>
  )
}

export default Page2