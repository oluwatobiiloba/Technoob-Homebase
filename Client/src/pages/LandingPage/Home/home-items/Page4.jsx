import React from 'react';
import Button from '../../../../utility/button';
import { image3 } from '../../../../data/assets';

const Page4 = () => {
  return (
    <div className='w-screen h-auto p-20 flex justify-center items-center bg-white '>
        <div className='flex flex-col-reverse sm:flex-row justify-center flex-wrap items-center gap-6'>
            <div className=''>
                <img src={image3} alt="join the community" className='w-[287px] h-[206px] sm:w-[576.92px] sm:h-[560px] rounded-2xl'/>
            </div>
            <div className='flex-1 text-center'>
                <h1 className=' font-[700] sm:font-[900] text-2xl sm:text-[58px] text-[#5E7CE8] sm:mb-6 '>
                Start your journey <span className='text-[#27AE60]'> Today</span> 
                </h1>
                <p className='text-xs sm:w-[707px] sm:text-[20px] mb-3 text-[#828282]'>Join over 4,000+ newbies already growing and getting equipped to break into tech.</p>

                <a href="https://twitter.com/i/communities/1571774895813689347" target='_blank' rel="noreferrer" >
                <Button name={'Join the community'}/>
              </a>
            </div>
        </div>
        
    </div>
  )
}

export default Page4