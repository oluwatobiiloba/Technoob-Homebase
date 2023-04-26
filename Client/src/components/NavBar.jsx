import React, { useState } from 'react'
import Button from '../utility/button'
import { navLinks } from '../data/contact';
import { menu } from '../data/assets';
import { close } from '../data/assets/asset';

import { Link } from 'react-router-dom';

const NavBar = () => {

    const [active, setActive] = useState('Home');
    const [toggle, setToggle] = useState(false)


    const handleClick = (e) => {
        setActive(e.target.value);
        console.log(e.target)
        console.log(active)
    }

  return (
    <nav className='w-full bg-[#fff] '>
        <div className='w-full mt-5 py-2 px-5 sm:px-20 flex justify-between items-center'>
            <div className='text-2xl font-extrabold text-[#5E7CE8]'>Tech Noob</div>


            <div className='hidden lg:flex w-[800px] justify-center'>
                <ul className='flex font-normal justify-between gap-8'>

                    {navLinks.map((nav, i) =>(
                       
                        <li key={i} className={`text-lg hover:text-[#27AE60]`}>
                           
                            <Link className={`${active === nav.title ? 'text-[#27AE60]' : ''}`} to={`/${nav.link}`}  onClick={handleClick}>{nav.title}</Link>
                        </li>
                    
                    ))}
                    
                </ul>
            </div>


            <div className='flex lg:hidden h-full items-center justify-center'>
                <img src={toggle ? close : menu} alt="menu" onClick={()=> setToggle((prev) => !prev)} className='h-4 w-4'/>

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10 sidebar `}>
                    <ul className='flex font-normal justify-between gap-8 list-none flex-1 flex-col text-white '>

                            {navLinks.map((nav, i) =>(
                            
                                <li key={i} className={`text-lg hover:text-[#27AE60]`}>
                                
                                <Link className={`${active === nav.title ? 'text-[#27AE60]' : ''}`} to={`#${nav.link}`}  onClick={handleClick}>{nav.title}</Link>
                            </li>

                        ))}

                     </ul>
                </div>
            </div>

            <div className='hidden gap-2 lg:flex' > 
                <Button name={'Login'}/>
                <Button name={'Get Started'}/>
            </div>
        </div>
    </nav>
  )
}

export default NavBar