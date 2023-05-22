import React from 'react'

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
      amtlabel : 'Documents',
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
          <div className=' md:flex block w-full justify-between '>
            {statistics.map((opt, i) => (
              <div key={i} className=' p-3 shadow-md rounded-md mx-1 lg:w-[200px] lg:h-auto'>
                <p className=' p-5'>{opt.name}</p>
                <p className=' p-2'><span className=' font-bold text-lg'>{opt.amount}</span> {opt.amtlabel} </p>
                <p className=' p-2'>{opt.tracks} </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Section