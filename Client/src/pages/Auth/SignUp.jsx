import React,{useState} from 'react';
import { SignUPIMG } from '../../data/assets';
import InputField from '../../utility/InputField';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    FullName: '',
    Email: '',
    Password: '',
    'Confirm Password': '',
  });


  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form)
    navigate('/')
    setForm({...form})
  }
  return (
    <section>
      <header className='uni text-center md:text-6xl text-3xl font-bold md:py-20 py-10'>
        <span className=' text-tblue'>Sign</span><span className='text-tgreen'> UP</span>
      </header>

      <div className=' md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center'>
        <img src={SignUPIMG} alt="Sign-Up" className=' lg:block hidden w-[50%]' />
        <form  onSubmit={handleSubmit} className='block bgcontact lg:p-20 p-5 w-full  rounded lg:w-[50%] '>
            <InputField type={'text'}  name={'FullName'} placeholder={'Full Name'} onChange={handleChange}/>
            <InputField type={'email'}  name={'Email'} placeholder={'Email'} onChange={handleChange}/>
            <div className='mb-5'>
            <button name={'Login'} className='flex justify-center items-center text-[#111111] bg-[#EFF0F5] rounded-md mb-2 py-3 px-3.5 text-base font-[600]'>Take Short Quiz</button>
            <p className='text-[#828282] text-sm'>This Quiz is to help in choosing Tech Stack</p>
            </div>
            <InputField type={'password'}  name={'Password'} placeholder={'Password'} onChange={handleChange}/>
            <InputField type={'password'}   name={'Confirm Password'} placeholder={'Confirm Password'} onChange={handleChange}/>
            <button type='submit' className=' bg-tblue text-twhite py-[14px] lg:w-[100%] w-[100%] rounded'>Sign Up</button>
        </form>
    </div>
    </section>
  )
}

export default SignUp