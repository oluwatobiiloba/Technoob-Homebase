import React from 'react';
import { MdOutlineNoteAdd, MdPermIdentity } from 'react-icons/md';

const JobManagement = () => {
  const statistics = [
    {
      name : 'Jobs posted',
      amount : 45,
      amtlabel : 'Jobs',
      tracks : '360 views',
      icon : <MdOutlineNoteAdd/>,
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
    <section>
      <div className=' flex py-10 nun'>
        <h1 className=' font-semibold md:text-3xl text-xl'>Hey, Esther-</h1>
        <p className=' md:pt-2 pt-[3px] '>Welcome your job page</p>
      </div>
      <div className=' lg:mx-4 p-5 rounded-md bg-white shadow-md w-full '>
        <h1 className=' text-2xl lg:py-4 font-semibold'>Job Management</h1>
        <p>Statistics</p>
        <p className=' text-[#71717A] text-[10px]'>See Metrics</p>
        <div className="md:flex block w-full justify-between pb-3">
          {statistics.map((opt, i) => (
            <div key={i} className=' p-3 rounded-md shadow-md lg:w-[49%] justify-between pb-10'>
              <p className=' py-3 px-2 flex text-[#71717A] w-auto'>{opt.name} <span className={`${opt.style} p-2 rounded-full ml-3 mt-[-2px]`}>{opt.icon}</span> </p>
              <div className=' flex'>
                <p className=' p-2 mr-2'><span className=' font-bold text-xl'>{opt.amount}</span> {opt.amtlabel} </p>
                <p className=' p-2 mt-1 text-[#35BA83]'>{opt.tracks} </p>
              </div>
            </div>
          ))}
        </div>
        <div className=' py-5'>
          <p>Add new job</p>
          <p className=' text-[#71717A] text-[10px]'>Add Job Details</p>
        </div>
      </div>
    </section>
  )
}

export default JobManagement