import React, { useState, useEffect } from 'react'
import { image5 } from '../../../../data/assets';

import Button from '../../../../utility/button';

const Page6 = () => {

  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('')
  // const [subscribe, setSubscribe] = useState({
  //   email: ""
  // });


// // const handleClick = (e) =>{
//   const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
//   if(regEx.test(email)){
//     setMessage('Email is valid')
//   } else if(!regEx.test(email) && email !== '') {
//     setMessage('Email is not valid')
//   } else{
//     setMessage('');
    
//   }
//   console.log(subscribe)
// };

//   const handleChange = (e) =>{
//     setEmail(e.target.value);
    
//     setSubscribe({email: e.target.value});
//   };
//   useEffect(() => {
//     async function fetchData(){
//     const URL = "https://fakestoreapi.com/products";
//     const response = await fetch(URL);
//     const JSON =  await response.json();
//     console.log(JSON)
      
//   }
//   fetchData();
// }, [handleClick])


  

  return (
    <div className='flex justify-center items-center bg-[#F5F5F5] w-full h-auto py-20'>
        <div className='flex flex-col w-full'>
            <div className='flex flex-col justify-center items-center text-center bg-[#F9FAFB]'>
                <img src={image5} alt="subscribe" className='w-[123px] h-[56px] sm:my-4 '/>

                <div>
                    
                </div>
                <h1 className='font-[700] text-2xl text-[#5E7CE8] text-center sm:mb-3 '>
                      Stay <span className='text-[#27AE60]'> in the loop </span> 
                </h1>
                <p className='text-xs sm:text-lg text-[#667085] sm:mb-6'>want to be the first to know when we have exciting news?
                     subscribe to our list</p>

                     <div className='flex flex-col justify-center items-center sm:flex-row my-16 sm:my-6 gap-2'>
                        <input placeholder='Enter your email address' type='email'  className='bg-white w-[335px] h-[56px] border rounded-md ring-2 outline-0 text-base pl-4 placeholder:italic'/>
                        <Button name={'Subscribe'} type={'submit'}/>
                        {/* <h6>{message}</h6> */}
                     </div>
            </div>

        </div>
    </div>
  )
}

export default Page6