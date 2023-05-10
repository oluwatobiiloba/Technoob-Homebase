import { useState } from 'react'
import img from '../img/threeinone.jpg'

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const regEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



  const handleChange = (e) =>{
    setEmail(e.target.value);

  };


  const handleClick = async (e) =>{
    e.preventDefault();
    if(regEx.test(email) === false){
    console.log('please enter a valid email')
    alert('Please enter a valid Email')
    

      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          email
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
      const response = await fetch("https://technoob-staging.azurewebsites.net/api/v1/user/mailing-list", requestOptions)
        
      if(response.status){
      const data = await response.json()
      console.log('Success', data,  'Email is valid')
      alert('Email successfully added');
      }
      
      } catch (error) {
        console.log(error)
      }
    
    
      setEmail('')
    }
  

  }
  return (
    <footer className=' flex-col px-5 text-center bg-twhitee py-10'>
        <img src={img} alt="" className='mx-auto h-20 w-50' />
        <div className=' py-5'>
            <h4 className='font-bold text-lg'><span className=' text-tblue'>Stay </span><span className=' text-tgreen'>in the loop</span></h4>
            <p className=' text-[#667085] nun'>want to be the first to know when we have exciting news? subscribe to our list</p>
        </div>
        <form>
            <input type="email" value={email} onChange={handleChange} placeholder='Enter your email address' className=' rounded m-1 border-tblue border px-10 py-4 italic' />
            <button type='submit' onClick={handleClick} className=' rounded px-24 py-4 m-1 bg-tblue text-twhite'>Subscribe</button>
        </form>
    </footer>
  )
}

export default Footer