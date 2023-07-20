import React from 'react'

 const AdminCard = ({statistics}) => {
 
   return (
    <div key={statistics.name} className=' px-3 pt-5 pb-6 rounded-lg shadow-md lg:w-[40%] mr-6 '>
    <p className=' pt-3 pb-6 px-2 flex text-xl text-[#71717A] w-auto'>{statistics.name} <span className={`${statistics.style} p-2 rounded-full ml-3 mt-[-2px]`}>{statistics.icon}</span> </p>
    <div className=' flex justify-start items-end'>
      <p className=' p-2 mr-6 text-xl'><span className=' font-bold text-3xl'>{statistics.amount}</span> {statistics.amtlabel} </p>
      <p className=' p-2 text-[#35BA83] flex gap-4 items-center'> <span className='text-xl'>{statistics.icon2}</span> {statistics.tracks} </p>
    </div>
  </div>
   )
 }

 export default AdminCard