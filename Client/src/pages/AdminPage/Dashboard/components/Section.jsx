import React from 'react'
import img from '../../img/Annotation 2023-05-22 185307.jpg'

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
        <div className=' flex p-10'>
            <h1 className=' font-semibold md:text-3xl text-xl'>Hey, Esther-</h1>
            <p className=' md:pt-2 pt-[3px] '>here's a look at your resent activities</p>
        </div>
        <div className=' lg:mx-14 p-5 rounded-md bg-white shadow-md w-full '>
          <h1 className=' text-2xl lg:py-4 font-semibold'>Admin Overview</h1>
          <p>Statistics</p>
          <div className=' md:flex block w-full justify-between pb-3 '>
            {statistics.map((opt, i) => (
              <div key={i} className=' p-3 shadow-md rounded-md my-2 mx-2 lg:w-full lg:h-auto'>
                <p className=' p-5'>{opt.name}</p>
                <p className=' p-2'><span className=' font-bold text-xl'>{opt.amount}</span> {opt.amtlabel} </p>
                <p className=' p-2 text-green-400'>{opt.tracks} </p>
              </div>
            ))}
          </div>
          <div className=' flex py-10 border-t-2 border-b-2'>
            <p className=' font-semibold text-lg  ml-10 mt-3'>Traffic Report</p>
            <span className=' border ml-14 p-2 rounded-full bg-[#bbc5e780]'>
              <button className=' bg-[#5E7CE880] text-twhite p-2 rounded-full border w-[120px] hover:bg-gray-500 hover:text-twhite shadow
              '>Last Year</button> <button className=' p-2 rounded-full border bg-twhite w-[120px] hover:bg-gray-500 hover:text-twhite
              '>6 Months</button> <button className=' p-2 rounded-full border bg-twhite w-[120px] hover:bg-gray-500 hover:text-twhite
              '>3 Months</button> <button className=' p-2 rounded-full border bg-twhite w-[120px] hover:bg-gray-500 hover:text-twhite
              '>30 Days</button> <button className=' p-2 rounded-full border bg-twhite w-[120px] hover:bg-gray-500 hover:text-twhite
              '>7 Days</button>
            </span>
          </div>
          <img src={img} alt="Chart" className=' w-full' />
          <div>
            <div className=' flex justify-between'>
              <div>
                <h2>Activities</h2>
                <p>See list of resent activities</p>
              </div>
              <button className='float-right'>Weekly</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Section