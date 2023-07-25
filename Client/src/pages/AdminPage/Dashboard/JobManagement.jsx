import React, {useEffect, useState} from 'react';
import { MdOutlineNoteAdd, MdPermIdentity } from 'react-icons/md';

import {AiOutlineEye} from 'react-icons/ai'
import serverApi from "../../../utility/server";

const JobManagement = () => {
  const [ jobData,setJobData ] = useState(null)
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
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  const fetchUser = async () => {
    // const user = await serverApi.post("/authenticate/login",{
    //   password: "testing000",
    //   username: "oluwatobiiloba"
    // })

    const response = await serverApi.get("/jobs/metrics",{ withCredentials: true });

    console.log(response)
  }
  const fetchJobMetrics = async () => {
    const response = await serverApi.get("/jobs/metrics",{ withCredentials: true });
    console.log(response)
  }



  const fetchJobsPreload = async () =>{
    const response = await serverApi.get("/jobs/all",{ withCredentials: true });
    console.log(response)
  }

  useEffect(() => {
    fetchUser()
    // fetchJobMetrics()
    // fetchJobsPreload()
  }, []);

  return ( 
    <section>
      <div className=' flex py-10 nun justify-start items-center'>
        <h1 className='  md:text-3xl text-xl font-semibold'>Hey, Esther  -</h1>
        <p className='md:pt-2 pt-1 text-sm ml-3 sm:text-lg text-[#3A3A3A66] sm:text-black '>Welcome the  job management console.</p>
      </div>
      <div className=' lg:mx-4 p-5  rounded-md bg-white shadow-md w-full '>
        <h1 className='text-xl font-semibold sm:ml-4 lg:py-4 sm:text-[#3A3A3A] sm:text-2xl'>Job Management</h1>
        <p className='mt-4 lg:mt-4 text-xl mb-1'>Statistics</p>
        <p className=' text-[#71717A] lg:mb-8 text-[12px] md:text-sm'>See Metrics</p>
        <div className="md:flex block w-full justify-start pb-3">
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
        <div className=' py-5'>
          <p className=' text-2xl font-semibold'>Add new job</p>
          <p className=' text-[#71717A] text-[16px]'>Add Job Details</p>
        </div>
        <form id='job'>
          <div>
            <div className=' flex justify-between'>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Job title</label></div>
                <input type="text" placeholder='Product Design' className=' border px-2 py-[6px] my-2 w-[250px]' />
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Company</label></div>
                <input type="text" placeholder='Meta' className=' border px-2 py-[6px] my-2 w-[250px]' />
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Your experience</label></div>
                <select name="job-type" id="job" className=' border px-2 py-[6px] my-2 w-[250px]'>
                  <option value="1">0-1 year</option>
                  <option value="2">1-3 years</option>
                  <option value="3">3-5 years +</option>
                </select>
              </div>
            </div>
            <div className=' flex justify-between'>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Job Location</label></div>
                <input type="text" placeholder='New york, USA' className=' border px-2 py-[6px] my-2 w-[250px]' />
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Workplace type</label></div>
                <select name="workspace-type" id="job" className=' border px-2 py-[6px] my-2 w-[250px]'>
                  <option value="1">On-site</option>
                  <option value="2">Hybrid</option>
                  <option value="3">Remote</option>
                </select>
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Job type</label></div>
                <select name="job-type" id="job" className=' border px-2 py-[6px] my-2 w-[250px]'>
                  <option value="1">Full time</option>
                  <option value="2">Contract</option>
                  <option value="3">Internship</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className=' w-[70%]'>
              <label htmlFor="Joblink" className=' text-lg font-semibold py-2 px-4 ' >Job link</label><br/>
              <input type="text" placeholder={'--Link here--'} className=' w-full mx-1 border py-3 px-2 my-4 outline-0 bg-white' />
            </div>
            <div className=' w-[20%]'>
              <button type='button' className=' mt-11 bg-tblue text-twhite py-[12px] lg:w-full w-[100%] rounded'>Publish Job</button>
            </div>
          </div>
        </form>
        <div className='mt-16'>
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
                  <td><h4 className=' px-10 font-semibold text-lg'>Company</h4></td>
                  <td><h4 className=' px-10 font-semibold text-lg'>Workplace</h4></td>
                  <td><h4 className=' px-10 font-semibold text-lg'>Location</h4></td>
                  <td><h4 className=' px-10 font-semibold text-lg'>Experience</h4></td>
                  <td><h4 className=' px-10 font-semibold text-lg'>Job Type</h4></td>
                  <td> <span>...</span></td>
                </tr>
                </thead>
                <tbody>
                  <tr>
                  <td><p className=' text-sm my-4'>Product Design</p></td>
                  <td><p className=' px-10 text-sm'>Meta</p></td>
                  <td><p className=' px-10 text-sm'>On-site</p></td>
                  <td><p className=' px-10 text-sm'>NY, USA</p></td>
                  <td><p className=' px-10 text-sm'>0-1 year</p></td>
                  <td><p className=' px-10 text-sm'> Full time</p></td>
                  <td></td>
                </tr>
                <tr className=' border-t'>
                  <td><p className=' text-sm my-6'>Front-end Developer</p></td>
                  <td><p className=' px-10 text-sm'>Twitter</p></td>
                  <td><p className=' px-10 text-sm'>Remote</p></td>
                  <td><p className=' px-10 text-sm'>Lagos, NG</p></td>
                  <td><p className=' px-10 text-sm'>1-3 years</p></td>
                  <td><p className=' px-10 text-sm'> Full time</p></td>
                  <td><span>...</span></td>
                </tr>
                <tr className=' border-t'>
                  <td><p className=' text-sm my-6'>Product Manager</p></td>
                  <td><p className=' px-10 text-sm'>Whatsapp</p></td>
                  <td><p className=' px-10 text-sm'>Remote</p></td>
                  <td><p className=' px-10 text-sm'>NY, USA</p></td>
                  <td><p className=' px-10 text-sm'>1-3 years</p></td>
                  <td><p className=' px-10 text-sm'>Contract</p></td>
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