import React, { useState } from 'react'
import img from '../img/quino-al-xhGMQ_nYWqU-unsplash 2.png'
import Input from '../utility/Input'

const Form = () => {
  const [form, setForm] = useState({
    FullName : '',
    Email : '',
    Phone : '',
    Message : ''
  });
  const regEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleChange =(e)=> {
    setForm({...form, [e.target.name]:e.target.value})
  }
    
  //send a responce
  const sendMessage = async () => {
    if(regEx.test(form.Email) === false){
      console.log('please enter a valid email')
      alert('Please enter a valid Email')
     } else{
   
       try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": form.Email,
          "name": form.FullName,
          "message": form.Message
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        const userContact = await fetch("https://technoob-staging.azurewebsites.net/api/v1/user/contact-us", requestOptions)  
        const result = await userContact.json()
        console.log(result)
        if(result.status === 'success'){
          alert('Message sent successfuly')
        }

       
       } catch (error) {
         console.log(error)
       }
       setTimeout(()=>{
        console.log('it worked')
        setForm({
          FullName : '',
          Email : '',
          Phone : '',
          Message : ''
        })
       }, 2000)
      
     }
  }

  const onSubmit = async () =>{
    // e.preventDefault()
    if (!form.Message) {
      alert('Pls input a mesage')
      return
    }

    //fetchData()
    await sendMessage()
    console.log(form)

    
  }

  return (
    <div className=' md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center'>
        <img src={img} alt="" className=' lg:block hidden w-[50%]' />
        <form action="get" className='block bgcontact lg:p-20 p-5 rounded lg:w-[50%] w-full ' >
            <Input placeholder={'Full Name'} name={'FullName'} onChange={handleChange} />
            <Input placeholder={'Email Address'} name={'Email'}  onChange={handleChange}/>
            <Input placeholder={'Phone Number'} name={'Phone'}  onChange={handleChange}/>
            <label htmlFor="message" className=' text-2xl font-semibold py-10 px-4 ' >Leave a message</label><br/>
            <textarea name="Message" onChange={handleChange} placeholder='Your message here' className=' ring-1 rounded outline-none md:w-[100%] w-[100%] md:h-60 h-40 md:px-10 p-4 py-10 my-10' id="" cols="30" rows="10"></textarea>
            <button type='button'  onClick={onSubmit} className=' bg-tblue text-twhite py-[14px] lg:w-[100%] w-[100%] rounded'>Send Message</button>
        </form>
    </div>
  )
}

export default Form;