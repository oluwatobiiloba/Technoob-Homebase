import React from 'react'
import { MdOutlineNoteAdd, MdPermIdentity } from 'react-icons/md';
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import img from '../img/Annotation 2023-05-22 185307.jpg'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Dashboard = () => {
  const statistics = [
    {
      name : 'Uploads',
      amount : 345,
      amtlabel : 'Documents',
      tracks : '36 New viewers',
      icon : <MdOutlineNoteAdd/>,
      style : 'bg-green-100 text-tgreen'
    },
    {
      name : 'Users',
      amount : 800,
      amtlabel : 'Total Users',
      tracks : '80 New Users',
      icon : <MdPermIdentity/>,
      style : 'text-[#D4C433] bg-yellow-100'
    },
    {
      name : 'Downloads',
      amount : 750,
      amtlabel : 'Downloads',
      tracks : '+ 400',
      icon : <BsFileEarmarkSpreadsheet/>,
      style : 'text-[#114FF580] bg-blue-100'
    },
    {
      name : 'Traffic',
      amount : '375,455',
      amtlabel : 'Views',
      tracks : '3600 views',
      icon : <HiArrowsRightLeft/>,
      style : 'text-[#6835BA80] bg-purple-100'
    }
  ]

  const user =  cookies.get("user").user
  const username = user.username

  return (
    <section>
        <div className=' flex py-10 nun justify-start items-center'>
            <h1 className=' font-semibold md:text-3xl text-xl'>Hey, {username} </h1>
            <p className=' md:pt-2 pt-[3px] text-lg ml-3 '>-here's a look at your recent activities</p>
        </div>
        <div className=' lg:mx-5 px-10 py-5 rounded-xl bg-white w-full pb-20 '>
          <h1 className=' text-2xl lg:py-4 font-semibold'>Admin Overview</h1>
          <p className='text-lg'>Statistics</p>
          <div className=' md:flex block w-full justify-between pb-3 '>
            {statistics.map((opt, i) => (
              <div key={i} className=' p-3 shadow-md rounded-md my-2 mx-2 lg:w-[80%] lg:h-auto'>
                <p className=' py-3 px-2 flex text-[#71717A] justify-between w-[auto]'>{opt.name}<span className={`${opt.style} rounded-full p-2`}>{opt.icon}</span> </p>
                <p className=' p-2'><span className=' font-bold text-xl'>{opt.amount}</span> {opt.amtlabel} </p>
                <p className=' p-2 text-[#35BA83]'>{opt.tracks} </p>
              </div>
            ))}
          </div>
          <div className=' flex py-10 border-t-2 border-b-2'>
            <p className=' font-semibold text-lg  ml-10 mt-3'>Traffic Report</p>
            <span className=' border ml-14 p-2 rounded-full bg-[#bbc5e780]'>
              <button className=' bg-[#5E7CE880] text-twhite p-2 rounded-full border w-[120px] hover:bg-[#5E7CE880] hover:text-twhite shadow
              '>Last Year</button> <button className=' p-2 rounded-full border bg-twhite w-[120px] hover:bg-[#5E7CE880] hover:text-twhite
              '>6 Months</button> <button className=' p-2 rounded-full border bg-twhite w-[120px] hover:bg-[#5E7CE880] hover:text-twhite
              '>3 Months</button> <button className=' p-2 rounded-full border bg-twhite w-[120px] hover:bg-[#5E7CE880] hover:text-twhite
              '>30 Days</button> <button className=' p-2 rounded-full border bg-twhite w-[120px] hover:bg-[#5E7CE880] hover:text-twhite
              '>7 Days</button>
            </span>
          </div>
          <img src={img} alt="Chart" className=' w-full' />
          <div>
            <div className=' flex justify-between'>
              <div>
                <h2 className=' text-xl font-semibold pt-4'>Activities</h2>
                <p className=' text-lg text-[#747272] mb-1'>See list of resent activities</p>
              </div>
              <button className='float-right border py-2 px-8 my-[20px] rounded flex justify-between shadow-sm'>Weekly</button>
            </div>
            <div className='flex overflow-x-auto'>
              <table className=' border-t border-b w-full overflow-x-auto'>
                <thead>
                  <tr>
                  <td><h4 className=' font-semibold text-lg'>Name</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>File</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Category</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Track</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Author</h4></td>
                  <td><div  className=' text-sm flex justify-between mb-2'><p>status</p> <span>...</span></div></td>
                </tr>
                </thead>
                <tbody>
                  <tr className=''>
                  <td><p className=' text-sm'>Dont make me think</p></td>
                  <td><p className=' px-14 text-sm'>PDF</p></td>
                  <td><p className=' px-14 text-sm'>Book</p></td>
                  <td><p className=' px-14 text-sm'>Design</p></td>
                  <td><p className=' px-14 text-sm'>Don Norman</p></td>
                  <td> <span className=' bg-green-700 w-2 h-2 rounded-full'> </span><button className=' bg-green-300 rounded-full px-4 py-1 my-2'> Complete</button></td>
                </tr>
                <tr className=' border-t'>
                  <td><p className=' text-sm'>Design of everyday thing</p></td>
                  <td><p className=' px-14 text-sm'>PDF</p></td>
                  <td><p className=' px-14 text-sm'>Book</p></td>
                  <td><p className=' px-14 text-sm'>Design</p></td>
                  <td><p className=' px-14 text-sm'>Oshin Timi</p></td>
                  <td> <span className=' bg-green-700 w-2 h-2 rounded-full'> </span><button className=' bg-green-300 rounded-full px-4 py-1 my-6'> Complete</button></td>
                </tr>
                <tr className=' border-t'>
                  <td><p className=' text-sm'>Coding for Newbies</p></td>
                  <td><p className=' px-14 text-sm'>PDF</p></td>
                  <td><p className=' px-14 text-sm'>Book</p></td>
                  <td><p className=' px-14 text-sm'>Software Development</p></td>
                  <td><p className=' px-14 text-sm'>Esther Imodu</p></td>
                  <td> <span className=' bg-[#35BA834D] w-2 h-2 rounded-full'> </span><button className=' bg-green-300 rounded-full px-4 py-1 my-6'> Complete</button></td>
                </tr>
                </tbody>
                
              </table>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Dashboard