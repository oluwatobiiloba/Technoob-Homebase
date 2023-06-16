import React,{useState} from 'react'
import { filtersearch } from '../../../data/assets'
import UploadFile from '../../../utility/UploadFile'

const EventMng = () => {



  return (
    
    <section>
      <div className=' flex justify-between'>
        <div className='flex py-10 nun'>
          <h1 className=' md:text-4xl text-2xl'>Hey, Esther-</h1>
          <p className=' md:pt-2 pt-[3px] '>Welcome your event's page</p>
        </div>
        

      </div>
      <div className=' lg:mx-4 p-5 rounded-md bg-white shadow-md w-full '>
        <div className='w-full '>
          <div className='flex flex-col sm:flex-row justify-between w-full'>
            <div>
              <h1 className=' text-2xl lg:py-4 '>Event Management</h1>
            </div>
            <div className='flex items-center gap-3 m-4'>
              <input 
                type="text"
                placeholder='Search resources'
                className='placeholder:italic placeholder:text-slate-400 border rounded-md w-[423px] focus:outline-none text-base h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] ' 
                />
              <img src={filtersearch} alt="filter" className='w-[24px] h-[24px]'/>
            </div>
          </div>

          <div className='mt-16'>
            <p className='text-2xl text-[#3a3a3a] '>Statistics</p>
            <p className='text-base text-[#3a3a3a] opacity-50 '>See Metrics</p>

            <div className='flex mt-3 p-3 gap-3 bg-slate-50 rounded-sm'>
              <div className='bg-white w-[444px] h-[209px] p-8 rounded-md'>
                <div className='pb-10'>
                  <p className='text-2xl mr-5 text-[#71717a]'>Events hosted</p>
                </div>

                <p className='text-4xl text-[#3a3a3a]'>45<span className='text-xl opacity-50 ml-2'>Events</span></p>
              </div>
            </div>

            <div className='mt-10 w-full flex'>
              <div className='flex flex-col sm:flex-row sm:justify-between w-full mx-8'>
                <div>
                  <div className='mb-3'> 
                    <p>Add new event</p>
                  </div>
                 <div>
                  <input type="text" />
                 </div>


                </div>

                <button
                  className='border border-tblue text-tblue py-2 px-8 rounded-md sm:h-[54px] sm:w-[287px]'
                  >Publish Event</button>
              </div>
            </div>
            <div className='hidden'>

            </div>
           
          </div>
        </div>

      </div>
    </section>
  )
}

export default EventMng

