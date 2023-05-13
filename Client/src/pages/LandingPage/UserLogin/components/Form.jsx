import img from '../img/quino-al-xhGMQ_nYWqU-unsplash 1.png';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

 const handleClick = () => {
  navigate('/Sign-Up')
  }

  return (
    <section className=' md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center'>
      <img src={img} alt="" className=' md:block hidden w-[50%]' />
      <form action="get" className='block bgcontact md:p-20 p-5 m-2 rounded md:w-[50%] '>
      <label htmlFor="username" className=' text-2xl font-semibold py-10 px-4 ' >Username/Email</label><br/>
      <input type="username" placeholder="Username/Email" className=' w-[100%] rounded-xl m-1 border px-10 py-4 my-10 outline-0 ring-1 bg-white' />
      <label htmlFor="password" className=' text-2xl font-semibold py-10 px-4 ' >Password</label><br/>
      <input type="password" placeholder="Password" className=' w-[100%] rounded-xl m-1 border px-10 py-4 my-10 outline-0 ring-1 bg-white' />
      <div className=' lg:flex'>
        <button className=' bg-tblue text-twhite py-[14px] lg:w-[50%] w-[100%] rounded'>Login</button> 
        
        <p className='py-5 lg:w-[10%] w-[100%] text-center'>Or</p>
        
          <button onClick={handleClick} className='py-[14px] lg:w-[40%] w-[100%] bg-twhitee ring-1 rounded'>Sign Up? </button> 
        
        
        
      </div>
      <p className=' cursor-pointer px-2 py-8 italic'><span className=' text-red-500'>Forget </span><span>Password?</span></p>
      </form>
    </section>
  )
}

export default Form