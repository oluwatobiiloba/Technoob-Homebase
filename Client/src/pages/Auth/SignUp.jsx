import React from 'react';
import Input from '../LandingPage/Contact/utility/Input';

const SignUp = () => {
  return (
    <section>
      <header className='uni text-center md:text-6xl text-3xl font-bold md:py-20 py-10'>
        <span className=' text-tblue'>CONTACT</span><span className=' text-tgreen'> US</span>
      </header>

      <div className=' md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center'>
        
        <form action="get" className='block bgcontact md:p-20 p-5 m-2 rounded md:w-[50%] '>
            <Input name={'Full Name'}/>
            <Input name={'Email Address'}/>
            <div className='mb-5'>
            <button name={'Login'} className='flex justify-center items-center text-[#111111] bg-[#EFF0F5] rounded-md mb-2 py-3 px-3.5 text-base font-[600]'>Take Short Quiz</button>
            <p className='text-[#828282] text-sm'>This Quiz is to help in choosing Tech Stack</p>
            </div>
            <Input name={'Choose Password'}/>
            <Input name={'Confirm Password'}/>
            <button className=' bg-tblue text-twhite py-[14px] lg:w-[100%] w-[100%] rounded'>Sign Up</button>
        </form>
    </div>
    </section>
  )
}

export default SignUp