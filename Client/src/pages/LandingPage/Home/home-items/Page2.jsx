import React from 'react';
import { image2 } from '../../../../data/assets';
import Button from '../../../../utility/button';

const Page2 = () => {
  return (
    <section className='w-screen h-screen flex flex-col justify-center items-center px-5 sm:px-20 sm:flex-row sm:mt-[4rem]'>
        <div className=' sm:flex-1 mb-4 mr-4'>
            <div className='flex flex-col '>
            <h1 className='text-2xl font-bold w-[288px] text-[#5E7CE8] sm:text-[55px] sm:font-[900] sm:w-[750px] sm:leading-[70px] mb-3 '>
                 Revolutionizing skill Learning and <span className='text-[#27AE60]'> job placement</span> 
            </h1>
            <p className='text-xs w-[342px] md:w-[691px] md:text-xl mb-3 sm:mb-5'>
            Tech Noob's platform has the potential to completely change how individuals learn and find work in the tech sector. We provide resources and assistances for job placement and skill development that are tailored to the requirements of new tech learning. Our methods and initiatives are adaptable, inexpensive, and available to everyone who wants to begin a career in technology. We are dedicated to fostering a tech sector that is more inclusive and diverse.
            </p>

            <Button name={'Join the community'}/>

            </div>
        </div>
        <div className=' sm:flex-1'>
            <img src={image2} alt="pg2-img"  className='' />  
        </div>
    </section>
  )
}

export default Page2