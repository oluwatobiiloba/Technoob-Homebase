import React from 'react'
 import { acheive_icon, filtersearch, storage_icon } from '../../../data/assets'
 import AdminCard from '../../../utility/AdminCard'
 import EventInput from '../../../components/EventInput'

 const EventMng = () => {



   return (

     <section>
       <div className=' flex justify-between sm:pl-5 pl-1'>
         <div className='flex flex-col sm:flex-row py-1 sm:py-10 justify-start sm:justify-center items-start sm:items-center '>
           <h1 className='md:text-4xl text-2xl mr-2'>Hey, Esther-</h1>
           <p className=' md:pt-2 pt-[3px] '>Welcome your event's page</p>
         </div>


       </div>
       <div className=' lg:mx-4 p-5 rounded-md bg-white sm:shadow-md w-full '>
         <div className='w-full '>
           <div className='flex flex-col sm:flex-row justify-between w-full'>
             <div>
               <h1 className='text-xl font-bold sm:font-normal sm:ml-5 lg:py-4 sm:text-[#3A3A3A] sm:text-4xl'>Event Management</h1>
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

           <div className='mt-10'>
             <p className='text-2xl text-[#3a3a3a] '>Statistics</p>
             <p className='text-base text-[#3a3a3a] opacity-50 '>See Metrics</p>

             <div className='flex mt-3 p-3 gap-3 bg-slate-50 rounded-sm flex-wrap'>
               <AdminCard name={'Event hosted'} fileType={'Event'} icon={storage_icon} Amount={45}/>
               <AdminCard name={'Upcoming Events'} Amount={3} fileType={'Downloads'} icon={acheive_icon}/>
             </div>

             <div className='mt-10 w-full flex'>
               <div className='flex flex-col w-full sm:mx-8'>
                 <div>
                   <div className='mb-3'> 
                     <p className='text-2xl'>Add new event</p>
                     <p className='text-sm text-[#3a3a3a] opacity-50'>Add event details</p>

                   </div>

                   <div className='flex flex-col flex-wrap'>
                     <div className='flex justify-between gap-4 w-full sm:w-[70%] mb-10 flex-wrap'>
                       <EventInput label={'event theme'} placeholder={'Resurrection night'}/>
                       <EventInput label={'event location'} placeholder={'New york, USA'}/>
                     </div>

                     <div className='flex justify-between gap-4 flex-wrap mb-7 sm:w-[70%]'>
                       <div className='flex flex-col w-full sm:w-auto flex-wrap'>
                           <div className='mb-3 flex gap-8'>
                               <label htmlFor="input" className='ml-1 capitalize text-xl'>Ticketing</label>
                               <div className='flex gap-8'>
                                 <div className='flex items-center'>
                                   <input id='free' type="radio" className='mr-2' />
                                   <label htmlFor="free">Free</label>
                                 </div>
                                 <div className='flex items-center'>
                                   <input id='free' type="radio" className='mr-2' />
                                   <label htmlFor="free">Paid</label>
                                 </div>

                               </div>
                           </div>
                           <input id='input' type='number' placeholder='--input price--' 
                             className='placeholder:text-[#3a3a3a] placeholder:italic placeholder:opacity-50 placeholder:pl-1 focus:outline-none focus-within:bg-slate-100 focus:border-tblue  focus:border-none focus:ring-[0] border-2 px-3 w-full  sm:w-[287px] h-[40px] rounded-sm ' />
                       </div>

                       <EventInput type={'date'} label={'event Date'} placeholder={'Event management'}/>
                     </div>
                     <div className='flex items-end justify-between mb-12 flex-wrap sm:flex-nowrap'>
                       <div className='mt-5 mb-4 sm:mb-0 flex flex-col w-full'>
                         <label htmlFor="input" className='mb-3 ml-1 capitalize text-xl'>Event link</label>
                         <input id='input' type='text' placeholder='~~link here~~' 
                         className='placeholder:text-[#3a3a3a] placeholder:opacity-50 placeholder:pl-1 focus:outline-none focus-within:bg-slate-100 focus:border-tblue  focus:border-none focus:ring-[0] border-2 px-3 w-full sm:w-[92%] h-[40px] rounded-sm ' />
                       </div>

                      <button
                       className='bg-tblue text-white py-2 px-8 rounded-md w-full sm:h-[54px] sm:w-[287px]'
                       >Publish Event</button>

                     </div>
                   </div>

                 </div>

               </div>
             </div>

           </div>
         </div>

       </div>
     </section>
   )
 }

 export default EventMng