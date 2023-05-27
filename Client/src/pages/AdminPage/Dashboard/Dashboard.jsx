import React from 'react'
import img from '../img/Annotation 2023-05-22 185307.jpg'

const Section = () => {
  const statistics = [
    {
      name : 'Uploads',
      amount : 345,
      amtlabel : 'Documents',
      tracks : '36 New viewers'
    },
    {
      name : 'Users',
      amount : 800,
      amtlabel : 'Total Users',
      tracks : '36 New Users'
    },
    {
      name : 'Downloads',
      amount : 750,
      amtlabel : 'Downloads',
      tracks : '+ 400'
    },
    {
      name : 'Traffic',
      amount : '375,455',
      amtlabel : 'Views',
      tracks : '3600 views'
    }
  ]
  return (
    <section>
        <div className=' flex py-10 nun'>
            <h1 className=' font-semibold md:text-3xl text-xl'>Hey, Esther-</h1>
            <p className=' md:pt-2 pt-[3px] '>here's a look at your resent activities</p>
        </div>
        <div className=' lg:mx-5 px-10 py-5 rounded-xl bg-white w-full pb-20 '>
          <h1 className=' text-2xl lg:py-4 font-semibold'>Admin Overview</h1>
          <p>Statistics</p>
          <div className=' md:flex block w-full justify-between pb-3 '>
            {statistics.map((opt, i) => (
              <div key={i} className=' p-3 shadow-md rounded-md my-2 mx-2 lg:w-full lg:h-auto'>
                <p className=' p-5'>{opt.name}</p>
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
                  <td><h4 className=' font-semibold text-lg'>Name</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>File</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Category</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Track</h4></td>
                  <td><h4 className=' px-14 font-semibold text-lg'>Author</h4></td>
                  <td><div  className=' text-sm flex justify-between mb-2'><p>status</p> <span>...</span></div></td>
                </thead>
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
              </table>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Section