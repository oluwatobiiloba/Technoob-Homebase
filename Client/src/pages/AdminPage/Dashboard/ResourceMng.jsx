import React, {useState} from 'react'
 import { filtersearch, storage_icon, acheive_icon } from '../../../data/assets'
 import UploadFile from '../../../utility/UploadFile'
 import AdminCard from '../../../utility/AdminCard'
 import { MdOutlineNoteAdd, MdPermIdentity } from 'react-icons/md';
 import {AiOutlineEye} from 'react-icons/ai'
import Button from '../../../utility/button'
import Table from '../../../components/Table';
import ResourceModal from '../../../Modals/ResourceModal';

 const ResourceMng = () => {

   //const [fileType, setfileType] = useState('')
   const [toggle, setToggle] = useState(false)
   
   // const handleChange = (e) => {
   //   setfileType(e.target.value)
   //   console.log(e.target.value)
   // } 
   const statistics = [
    {
      name : 'Jobs posted',
      amount : 45,
      amtlabel : 'Jobs',
      tracks : '360 views',
      icon : <MdOutlineNoteAdd/>,
      icon2: <AiOutlineEye/>,
      style : 'bg-green-100 text-tgreen'
    },
    {
      name : 'Applicants',
      amount : 120,
      amtlabel : 'Applicants',
      tracks : '80 Qualifies',
      icon : <MdPermIdentity/>,
      style : 'text-[#D4C433] bg-yellow-100'
    },
  ]


 
   return (

     <section className=' w-full'>
       <div className='flex justify-between sm:pl-5 pl-1'>
         <div className='flex flex-col sm:flex-row py-1 sm:py-10 justify-start sm:justify-center items-start sm:items-center '>
           <h1 className='md:text-4xl text-2xl mr-2'>Hey, Esther -</h1>
           <p className='md:pt-2 pt-1 text-sm sm:text-xl text-[#3A3A3A66] sm:text-black'>Welcome your resource page.</p>
         </div>

       </div>
       <div className=' lg:mx-4 p-5 md:rounded-md bg-white xl:shadow-md w-full'>
         <div className='w-full'>
           <div className='flex flex-col sm:flex-row justify-start sm:justify-between w-full'>
             <div>
               <h1 className='text-xl font-bold sm:font-normal sm:ml-3 lg:py-4 sm:text-[#3A3A3A] sm:text-3xl'>Resource Management</h1>
             </div>
             <div className='flex items-center gap-3 mt-4 sm:m-4'>
               <input 
                 type="text"
                 placeholder='Search resources'
                 className='placeholder:italic placeholder:text-slate-400 border rounded-md w-[423px] focus:outline-none text-base h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] ' 
                 />
               <img src={filtersearch} alt="filter" className='w-[24px] h-[24px]'/>
             </div>
           </div>

           <div className='mt-10'>
            <p className='text-2xl mb-1'>Statistics</p>
            <p className=' text-[#71717A] mb-8 text-[10px] md: text-base'>See Metrics</p>

             <div className='flex w-[100%] justify-start flex-wrap mt-3 p-3 gap-7 bg-slate-50 rounded-sm'>
             {statistics.map((opt, i) => (
            <div key={i} className=' px-3 pt-5 pb-6 rounded-lg shadow-md lg:w-[40%] mr-6 '>
              <p className=' pt-3 pb-6 px-2 flex text-xl text-[#71717A] w-auto'>{opt.name} <span className={`${opt.style} p-2 rounded-full ml-3 mt-[-2px]`}>{opt.icon}</span> </p>
              <div className=' flex justify-start items-end'>
                <p className=' p-2 mr-6 text-xl'><span className=' font-bold text-3xl'>{opt.amount}</span> {opt.amtlabel} </p>
                <p className=' p-2 text-[#35BA83] flex gap-4 items-center'> <span className='text-xl'>{opt.icon2}</span> {opt.tracks} </p>
              </div>
            </div>
          ))}
             </div>

             </div>


            <div className='mt-16 ml-4 mb-26'>
              <Button name={'Add new file'} handleClick={()=>setToggle((prev)=>!prev)}/>
            </div>
           
            <div className='mt-16'>
            <div className=' flex justify-between'>
              <div>
                <h2 className=' text-xl font-semibold pt-4'>Recent Jobs</h2>
                <p className=' text-lg text-[#747272] mb-1'>See list of resent jobs posted</p>
              </div>
              <button className='float-right border py-2 px-8 my-[20px] rounded flex justify-between shadow-sm'>See all</button>
            </div>
            <div className='flex overflow-x-auto'>
             <Table/>
            </div>
          </div>
         </div>

       </div>
       <div className={`${toggle ? 'flex flex-col' : 'hidden'} justify-center items-center absolute top-0 left-0 bottom-0 z-40 w-full h-screen`}>
             <ResourceModal toggle={toggle} setToggle={setToggle}/>   
        </div>
     </section>
   )
 }

 export default ResourceMng;