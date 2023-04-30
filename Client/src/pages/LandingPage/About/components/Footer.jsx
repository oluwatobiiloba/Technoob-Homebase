import React from 'react'
import img from '../img/threeinone.jpg'

const Footer = () => {
  return (
    <footer className=' flex-col px-5 text-center bg-twhitee py-10'>
        <img src={img} alt="" className='mx-auto h-20 w-50' />
        <div className=' py-5'>
            <h4 className='font-bold text-lg'><span className=' text-tblue'>Stay </span><span className=' text-tgreen'>in the loop</span></h4>
            <p className=' text-[#667085] nun'>want to be the first to know when we have exciting news? subscribe to our list</p>
        </div>
        <form>
            <input type="text" placeholder='Enter your email address' className=' rounded m-1 border-tblue border px-10 py-4 italic' />
            <button className=' rounded px-24 py-4 m-1 bg-tblue text-twhite'>Subscribe</button>
        </form>
    </footer>
  )
}

export default Footer