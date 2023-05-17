import React, { useState } from 'react'
import img from '../img/quino-al-xhGMQ_nYWqU-unsplash 2.png'
import Input from '../utility/Input'

const Form = () => {
  const [form, setForm] = useState({
    'Full Name' : '',
    Email : '',
    Phone : '',
    Message : ''
  });
  const regEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleChange =(e)=> {
    setForm({...form, [e.target.name]:e.target.value})
  }
    
  //send a responce
  const sendMessage = async (text) => {
    if(regEx.test(form.Email) === false){
      console.log('please enter a valid email')
      alert('Please enter a valid Email')
     } else{
   
       try {
         var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
         
         var raw = JSON.stringify({
           text
         });
         
         var requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
         };
         
        const response = await fetch("https://technoob-staging.azurewebsites.net/api/v1/user/contact-us", requestOptions)
         
        if(response.status){
        const data = await response.json()
        console.log('Success', data,  'Message is valid')
        alert('Message successfully sent');
        }
       
       } catch (error) {
         console.log(error)
       }
     
      
     }
  }

  const onSubmit = () =>{
    // e.preventDefault()
    if (!form.Message) {
      alert('Pls input a mesage')
      return
    }

    //fetchData()

    sendMessage(form)

    setForm({
      'Full Name' : '',
      Email : '',
      Phone : '',
      Message : ''
    })
  }

  return (
    <div className=' md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center'>
        <img src={img} alt="" className=' lg:block hidden w-[50%]' />
        <form action="get" className='block bgcontact lg:p-20 p-5 rounded lg:w-[50%] w-full ' >
            <Input placeholder={'Full Name'} name={'Full Name'} value={`${form['Full Name']}`} onChange={handleChange} />
            <Input placeholder={'Email Address'} name={'Email'} value={form.Email} onChange={handleChange}/>
            <Input placeholder={'Phone Number'} name={'Phone'} value={form.Phone} onChange={handleChange}/>
            <label htmlFor="message" className=' text-2xl font-semibold py-10 px-4 ' >Leave a message</label><br/>
            <textarea name="Message" value={form.Message} onChange={handleChange} placeholder='Your message here' className=' ring-1 rounded outline-none md:w-[100%] w-[100%] md:h-60 h-40 md:px-10 p-4 py-10 my-10' id="" cols="30" rows="10"></textarea>
            <button type='button'  onClick={onSubmit} className=' bg-tblue text-twhite py-[14px] lg:w-[100%] w-[100%] rounded'>Send Message</button>
        </form>
    </div>
  )
}

export default Form;