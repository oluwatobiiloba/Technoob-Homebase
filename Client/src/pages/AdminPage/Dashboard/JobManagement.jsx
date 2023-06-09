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
        <div className="md:flex block w-full justify-start pb-3">
          {statistics.map((opt, i) => (
            <div key={i} className=' px-3 pt-10 pb-12 rounded-md shadow-md lg:w-[40%] mr-6 justify-between'>
              <p className=' pt-3 pb-6 px-2 flex text-[#71717A] w-auto'>{opt.name} <span className={`${opt.style} p-2 rounded-full ml-3 mt-[-2px]`}>{opt.icon}</span> </p>
              <div className=' flex'>
                <p className=' p-2 mr-6'><span className=' font-bold text-xl'>{opt.amount}</span> {opt.amtlabel} </p>
                <p className=' p-2 mt-1 text-[#35BA83]'>{opt.tracks} </p>
              </div>
            </div>
          ))}
        </div>
        <div className=' py-5'>
          <p className=' text-base font-semibold'>Add new job</p>
          <p className=' text-[#71717A] text-[10px]'>Add Job Details</p>
        </div>
        <form>
          <div className=' flex flex-wrap'>
            <div className=' block py-2 pr-20 my-4'>
              <div><label htmlFor="title" className=' text-base font-semibold p-1'>Job title</label></div>
              <input type="text" placeholder='Product Design' className=' border p-2 w-[300px]' />
            </div>
            <div className=' block py-2 pr-20 my-4'>
              <div><label htmlFor="title" className=' text-base font-semibold p-1'>Company</label></div>
              <input type="text" placeholder='Meta' className=' border p-2 w-[300px]' />
            </div>
            <div className=' block py-2 pr-20 my-4'>
              <div><label htmlFor="title" className=' text-base font-semibold p-1'>Your experience</label></div>
              <input type="text" placeholder='Product Design' className=' border p-2 w-[300px]' />
            </div>
            <div className=' block py-2 pr-20 my-4'>
              <div><label htmlFor="title" className=' text-base font-semibold p-1'>Job Location</label></div>
              <input type="text" placeholder='New york, USA' className=' border p-2 w-[300px]' />
            </div>
            <div className=' block py-2 pr-20 my-4'>
              <div><label htmlFor="title" className=' text-base font-semibold p-1'>Workplace type</label></div>
              <input type="text" placeholder='Product Design' className=' border p-2 w-[300px]' />
            </div>
            <div className=' block py-2 pr-20 my-4'>
              <div><label htmlFor="title" className=' text-base font-semibold p-1'>Job type</label></div>
              <input type="text" placeholder='Product Design' className=' border p-2 w-[300px]' />
            </div>
          </div>
          <div className=' justify-between'>
            <label htmlFor="Joblink" className=' text-lg font-semibold py-2 px-4 ' >Job link</label><br/>
            <input type="text" placeholder={'--Link here--'} className=' w-[70%] rounded-xl mx-1 border px-10 py-4 my-4 outline-0 bg-white' />
            <button type='button' className=' bg-tblue text-twhite py-[14px] lg:w-[20%] w-[100%] rounded'>Publish Job</button>
          </div>
        </form>
        <div>
            <div className=' flex justify-between'>
              <div>
                <h2 className=' text-xl font-semibold pt-4'>Recent Jobs</h2>
                <p className=' text-lg text-[#747272] mb-1'>See list of resent jobs posted</p>
              </div>
              <button className='float-right border py-2 px-8 my-[20px] rounded flex justify-between shadow-sm'>See all</button>
            </div>
            <div className='flex overflow-x-auto'>
              <table className=' border-t border-b w-full overflow-x-auto'>
                <thead>
                  <tr>
                  <td><h4 className=' font-semibold text-lg mt-2'>Title</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Company</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Workplace</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Location</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Experience</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Job Type</h4></td>
                  <td> <span>...</span></td>
                </tr>
                </thead>
                <tbody>
                  <tr>
                  <td><p className=' text-sm my-4'>Product Design</p></td>
                  <td><p className=' px-14 text-sm'>Meta</p></td>
                  <td><p className=' px-14 text-sm'>On-site</p></td>
                  <td><p className=' px-14 text-sm'>NY, USA</p></td>
                  <td><p className=' px-14 text-sm'>0-1 year</p></td>
                  <td><p className=' px-14 text-sm'> Full time</p></td>
                  <td></td>
                </tr>
                <tr className=' border-t'>
                  <td><p className=' text-sm my-6'>Front-end Developer</p></td>
                  <td><p className=' px-14 text-sm'>Twitter</p></td>
                  <td><p className=' px-14 text-sm'>Remote</p></td>
                  <td><p className=' px-14 text-sm'>Lagos, NG</p></td>
                  <td><p className=' px-14 text-sm'>1-3 years</p></td>
                  <td><p className=' px-14 text-sm'> Full time</p></td>
                  <td><span>...</span></td>
                </tr>
                <tr className=' border-t'>
                  <td><p className=' text-sm my-6'>Product Manager</p></td>
                  <td><p className=' px-14 text-sm'>Whatsapp</p></td>
                  <td><p className=' px-14 text-sm'>Remote</p></td>
                  <td><p className=' px-14 text-sm'>NY, USA</p></td>
                  <td><p className=' px-14 text-sm'>1-3 years</p></td>
                  <td><p className=' px-14 text-sm'>Contract</p></td>
                  <td><span>...</span></td>
                </tr>
                </tbody>
                
              </table>
            </div>
          </div>
      </div>
    </section>
  )
}

export default JobManagement