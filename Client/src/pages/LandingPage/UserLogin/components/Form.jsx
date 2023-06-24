
import {useState,useContext} from 'react'
import img from '../img/quino-al-xhGMQ_nYWqU-unsplash 1.png'  
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../../../AppContext/AppContext';


const Form = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    UserName : '',
    Password : ''
  })
  const { setIsLoggedIn, setUserProfile, setDashboardToggle } = useContext(AppContext);

  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const login = async ()=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "password": user.Password,
      "username": user.UserName
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      credentials: "include"
    };

     fetch("https://technoob-staging.azurewebsites.net/api/v1/authenticate/login", requestOptions).then(response => {
    console.log(response)
       if (response.status === 200) {
        setIsLoggedIn(true);
        navigate('/Home')
      }
      return  response.json();
     }).then(result => {
      console.log(result)
       setUserProfile(result.data)
       localStorage.setItem('user', JSON.stringify(result));
       if (result.isAdmin) {
        setDashboardToggle({
          displayToggle: true,
          toggleValue: "User Dashboard"
        })
     }

     }).catch(error => {
       console.log('error', error)
     });
    
    //  fetch("https://technoob-staging.azurewebsites.net/api/v1/resources/rate/649065c099ca48fe86425c06", {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: JSON.stringify({
    //     "rating": 5
    //   }),
    //   redirect: 'follow'
    // }).then(response => {
    //  return  response.json();
    // }).then(result => {
     
    
    // }).catch(error => {
    //   console.log('error', error)
    // });

  }

  const submit = async (e) => {
    e.preventDefault()
    await login()
    console.log(user)
  }


 const handleClick = () => {
  navigate('/Sign-Up')
  }


  return (
    <section className=' md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center'>
      <img src={img} alt="" className=' lg:block hidden w-[50%]' />
      <form action="get" className='block bgcontact lg:p-20 p-5 rounded lg:w-[50%] w-full'>
      <label htmlFor="username" className=' text-2xl font-semibold py-10 px-4 ' >Username/Email</label><br/>
      <input type="username" name='UserName' placeholder="Username/Email" className=' w-[100%] rounded-xl m-1 border px-10 py-4 my-10 outline-0 ring-1 bg-white' onChange={handleChange} />
      <label htmlFor="password" className=' text-2xl font-semibold py-10 px-4 ' >Password</label><br/>
      <input type="password" name='Password' placeholder="Password" className=' w-[100%] rounded-xl m-1 border px-10 py-4 my-10 outline-0 ring-1 bg-white' onChange={handleChange} />
      <div className=' lg:flex'>

        <button className=' bg-tblue text-twhite py-[14px] lg:w-[50%] w-[100%] rounded' onClick={submit}>Login</button> <p className='py-5 lg:w-[10%] w-[100%] text-center'>Or</p>
        <button onClick={handleClick} className='py-[14px] lg:w-[40%] w-[100%] bg-twhitee ring-1 rounded'>Sign Up?</button>

      </div>
      <p className=' cursor-pointer px-2 py-8 italic'><span className=' text-red-500'>Forget </span><span>Password?</span></p>
      </form>
    </section>
  )
}

export default Form