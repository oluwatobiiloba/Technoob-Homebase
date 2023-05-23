import React, { useState, useContext } from 'react'
import Button from '../utility/button'
import { navLinks } from '../data/contact';
import { menu, close } from '../data/assets';

import { AppContext } from '../AppContext/AppContext';

import { Link } from 'react-router-dom';

const NavBar = () => {


    const [isLoggedIn] = useContext(AppContext);

    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');


    const handleActive= (e)=>{
        setActive(e.target.innerText);

    }


  return (
    <nav className='w-full bg-white shadow-md '>
        <div className='w-full py-2 px-5 sm:px-20 flex justify-between items-center lg:h-[80px] '>
            <div className='text-lg md:text-2xl font-extrabold text-[#5E7CE8] cursor-pointer'><Link to={'/'}>Tech Noob</Link></div>


            <div className='hidden lg:flex w-[800px] justify-center'>
                <ul className='flex font-normal justify-between gap-8'>

                    {navLinks.map((nav, i) =>(
                       
                        <li key={i} className={`text-lg hover:text-[#27AE60]`}>
                           
                            <Link 
                                className={` ${active === nav.title ? 'text-[#27AE60]' : ''}`} 
                                to={`/${nav.link}`}
                                onClick={handleActive}
                                >
                                    {nav.title}
                                </Link>
                        </li>
                    
                    ))}
                    
                </ul>
            </div>


            <div className='flex lg:hidden h-full items-center justify-center'>
                <img src={toggle ? close : menu} alt="menu" onClick={()=> setToggle((prev) => !prev)} className='h-4 w-4 cursor-pointer'/>

                <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-white rounded-md absolute top-16 right-0 mx-1 my-2 w-[375px] z-10 h-[537px] sidebar flex-col transition`}>
                    <ul className='flex font-normal justify-start gap-7 list-none flex-col text-white'>

                            {navLinks.map((nav, i) =>(
                            
                                <li key={i} className={`text-2xl hover:text-tblue`}>
                                
                                <Link className={`sidebar ${'text-black'} `}  to={`/${nav.link}`}  onClick={()=> setToggle((prev) => !prev)}>{nav.title}</Link>
                            </li>

                        ))}

                     </ul>
                     
                     <div className='flex flex-col justify-center items-center mt-10 gap-5'>
                        
                        <Link onClick={()=> setToggle((prev) => !prev)} to={'/User-Login'}>
                            <button name={'Login'} className=' text-[#111111] bg-[#EFF0F5]   font-[600]  w-[335px] sm:w-[201px] h-[54px] text-base rounded-md py-4 px-3.5'>Login</button>
                         </Link>

                                <p className='text-base font-semibold'>Or</p>

                        <Link onClick={()=> setToggle((prev) => !prev)} to={'/Sign-Up'}>
                            <Button name={'Get Started'}/>
                        </Link> 
                        
                     </div>
                </div>
            </div>

            {isLoggedIn ? 
                <div className='hidden lg:block w-[20%] text-center'>
                    <h2 className='lg:text-2xl font-semibold'>Welcome to <span className='text-tblue'>TechNoob!</span></h2>
                </div>
                
                : 
            
                <div className='hidden gap-2 lg:flex' > 
                <Link to={'/User-Login'}>
                    <button name={'Login'} className='w-[130px] sm:w-[130px] h-[54px] text-[#111111] bg-[#EFF0F5] rounded-md py-4 px-3.5 text-base font-[600]'>Login</button>
                </Link>
                <Link to={'/Sign-Up'}>
                    <Button name={'Get Started'}/>
                </Link>

            </div>}
        </div>
    </nav>
  )
}

export default NavBar