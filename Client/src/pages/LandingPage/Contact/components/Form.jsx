import React, { useState } from 'react'
import img from '../img/quino-al-xhGMQ_nYWqU-unsplash 2.png'
import Input from '../utility/Input'

const Form = () => {
  const [fullname, setFullname] =useState('');
  const [email, setEmail] =useState('');
  const [phone, setPhone] =useState('');
  const [message, setMessage] =useState('');
    
  //send a responce
  const sendMessage = async (text) => {
    // const res = await fetch('http://technoob-staging.azurewebsites.net/api/v1/user/contact-us', {
    //   method : 'POST',
    //   headers : {
    //     'Content-type': 'application/json'
    //   },
    //   body : JSON.stringify(text)
    // })
    // const rest = res.json()
    // console.log(rest)
    alert(JSON.stringify(text))
  }

  const onSubmit = () =>{
    // e.preventDefault()
    if (!message) {
      alert('Pls input a mesage')
      return
    }

    //fetchData()

    sendMessage({fullname, email, phone, message})

    setFullname('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <div className=' md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center'>
        <img src={img} alt="" className=' md:block hidden w-[50%]' />
        <form action="get" className='block bgcontact md:p-20 p-5 m-2 rounded md:w-[50%] ' >
            <Input name={'Full Name'} value={fullname} onChange={(e) => setFullname(e.target.value)} />
            <Input name={'Email Address'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input name={'Phone Number'} value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label htmlFor="message" className=' text-2xl font-semibold py-10 px-4 ' >Leave a message</label><br/>
            <textarea name="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your message here' className=' ring-1 rounded outline-none md:w-[100%] w-[100%] md:h-60 h-40 md:px-10 p-4 py-10 my-10' id="" cols="30" rows="10"></textarea>
            <button type='button'  onClick={onSubmit} className=' bg-tblue text-twhite py-[14px] lg:w-[100%] w-[100%] rounded'>Send Message</button>
        </form>
    </div>
  )
}

export default Form;