import React from 'react';
import { image2 } from '../../../../data/assets';
import Button from '../../../../utility/button';

const Page2 = () => {
  return (
    <section className='w-full md:h-screen flex flex-col flex-wrap justify-start items-center px-5 sm:px-20 md:flex-row sm:my-[4rem] my-16 '>
        <div className=' sm:flex-1 mb-4 w-full md:mr-4'>
            <div className='flex flex-col items-center md:items-start w-full'>
              <h1 className='text-2xl font-bold  min-w-[288px] text-[#5E7CE8] md:text-[55px] sm:font-[900] lg:w-[750px] sm:leading-[70px] mb-3 '>
                  Revolutionizing skill Learning and <span className='text-[#27AE60]'>job placement</span> 
              </h1>
              <p className='text-xs w-[342px] sm:w-[691px] sm:text-xl mb-3 sm:mb-5'>
              Tech Noob's platform has the potential to completely change how individuals learn and find work in the tech sector. We provide resources and assistances for job placement and skill development that are tailored to the requirements of new tech learning. Our methods and initiatives are adaptable, inexpensive, and available to everyone who wants to begin a career in technology. We are dedicated to fostering a tech sector that is more inclusive and diverse.
              </p>
                <a href="https://twitter.com/i/communities/1571774895813689347" target='_blank' rel="noreferrer" >
                  <Button name={'Join the community'}/>
                </a>

            </div>
        </div>
        <div className=' flex-1'>
            <img src={image2} alt="pg2-img"  className='' />  
        </div>
    </section>
  )
}

export default Page2