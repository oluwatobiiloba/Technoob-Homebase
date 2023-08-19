import React from 'react'
import { AiOutlineCloudServer } from "react-icons/ai";
import {BiArchive} from 'react-icons/bi'
import { AiOutlineEye } from "react-icons/ai";

 const AdminCard = ({statistics}) => {
  const statistic = [
    {
      name: "Files Uploaded",
      amount: 45,
      amtlabel: "Files Uploaded",
      // tracks: "20 files",
      icon: <AiOutlineCloudServer />,
      // icon2: <AiOutlineEye />,
      style: "bg-green-100 text-tgreen",
    },
    {
      name: "Files Downloaded",
      amount: 120,
      amtlabel: "Files Downloaded",
      // tracks: "203 Downloads",
      icon: <BiArchive/>,
      style: "text-[#D4C433] bg-yellow-100",
    },
  ];
   return (
    <div key={statistics.name} className=' px-3 pt-5 pb-6 rounded-lg shadow-md lg:w-[45%] mr-6 '>
      <p>{statistic.name}</p>
       
    <p className='  flex text-xl text-[#71717A] w-auto'>{statistics.name} <span className={`${statistics.style} p-2 rounded-full ml-3 mt-[-2px]`}>{statistics.icon}</span> </p>
    <div className=' flex justify-start items-end'>
      <p className=' p-2 mr-6 text-xl'><span className=' font-bold text-3xl'>{statistics.amount}</span> {statistics.amtlabel} </p>
      <p className=' p-2 text-[#35BA83] flex gap-4 items-center'> <span className='text-xl'>{statistics.icon2}</span> {statistics.tracks} </p>
    </div>
    </div>
   )
 }

 export default AdminCard