import React from 'react'
import { esther} from '../../../../data/assets'

const Page5 = () => {
    return (
      <div className='flex flex-col items-center justify-center bg-[#E1F9E3] h-auto sm:h-screen mb-10 sm:mb-0 py-10 sm:py-[2rem] px-20 w-full'>
         
          <div className='bg-white rounded-lg w-[300px] sm:w-full h-auto md:h-[40rem] flex flex-wrap justify-center items-center p-5 mx-10 sm:mx-20 sm:p-[3rem] '>
                  
                      <div className='flex flex-col text-center justify-start items-center  sm:w-full '>
                            <div className=' items-center h-auto mb-4 sm:mb-8  '>
                              <h2 className='text-base sm:text-[2rem] sm:leading-[60px]'>"Being a part of this tech community has been an absolute game-changer for me. As a tech newbie, working alongside other passionate members to build the website for the community was an invaluable experience. The support and mentorship I received during the process were remarkable. I can't recommend this community enough!"</h2>
                            </div> 
                            <div className='flex flex-col justify-center items-center gap-2 '>
                                <img src={esther} alt="page5" className='rounded-full w-[36px] h-[36px] sm:w-16 sm:h-16' />
                                <h3 className='text-[14px] sm:text-[18px] font-normal text-[#101828]'>Esther </h3>
                                <p className='sm:text-base text-[13px] text-[#667085]'>Product Manager, Meta.</p>
                            </div>  
                      </div>
                  
          </div>
      </div>
    )
  }

export default Page5