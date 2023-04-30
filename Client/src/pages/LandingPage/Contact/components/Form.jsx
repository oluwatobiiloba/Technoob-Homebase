import React from 'react'
import img from '../img/quino-al-xhGMQ_nYWqU-unsplash 2.png'
import Input from '../utility/Input'

const Form = () => {
  return (
    <div className=' md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center'>
        <img src={img} alt="" className=' md:block hidden w-[50%]' />
        <form action="get" className='block bgcontact md:p-20 p-5 m-2 rounded md:w-[50%] '>
            <Input name={'Full Name'}/>
            <Input name={'Email Address'}/>
            <Input name={'Phone Number'}/>
            <label htmlFor="message" className=' text-2xl font-semibold py-10 px-4 ' >Leave a message</label><br/>
            <textarea name="" placeholder='Your message here' className=' ring-1 rounded outline-none md:w-[100%] w-[100%] md:h-60 h-40 md:px-10 p-4 py-10 my-10' id="" cols="30" rows="10"></textarea>
            <button className=' bg-tblue text-twhite py-[14px] lg:w-[100%] w-[100%] rounded'>Send Message</button>
        </form>
    </div>
  )
}

export default Form