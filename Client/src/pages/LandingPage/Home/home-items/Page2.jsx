import React from 'react';
import { image2 } from '../../../../data/assets';
import Button from '../../../../utility/button';

const Page2 = () => {
  return (
    <div className='flex w-full items-start mb-10 pt-10'>
        <div className='flex flex-col justify-between items-center sm:gap-5 w-full sm:flex-row px-5'>
            
                <div className='flex flex-col w-[1000p] '>
                    <h1 className=''>
                        Revolutionizing skill Learning and <span className='text-[#27AE60]'> job placement</span> 
                    </h1>
                    <p className='w-[327px] text-xs sm:text-[20px] sm:leading-[30px] sm:w-[691px] font-[400] text-[#3a3a3a] mb-4'>
                    Tech Noob's platform has the potential to completely change how individuals learn and find work in the tech sector. We provide resources and assistances for job placement and skill development that are tailored to the requirements of new tech learning. Our methods and initiatives are adaptable, inexpensive, and available to everyone who wants to begin a career in technology. We are dedicated to fostering a tech sector that is more inclusive and diverse.
                    </p>

                    <Button name={'Join the Community'}/>
                </div>

          

            <div className='flex justify-center items-center'>
                <img src={image2} alt="pg2-img"  className='' />
            </div>
            
        </div>
    </div>
  )
}

export default Page2