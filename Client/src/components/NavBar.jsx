import React from 'react'
import Button from '../utility/button'
import { navLinks } from '../data/contact'
import { menu } from '../data/assets'

const NavBar = () => {
  return (
    <nav className='w-full bg-[#fff]'>
        <div className='w-full mt-5 py-2 px-5 sm:px-20 flex justify-between items-center'>
            <div className='text-2xl font-extrabold text-[#5E7CE8]'>Tech Noob</div>
            <div className='hidden lg:flex'>
                <ul className='flex text-lg font-normal justify-between gap-8'>

                    {navLinks.map((nav, i) =>(
                       
                        <li key={i}>
                             {console.log(nav.title)}
                            <a href={`#${nav.title}`}>{nav.title}</a>
                        </li>
                    
                    ))}
                    
                </ul>
            </div>
            <div className='flex lg:hidden '>
                <img src={menu} alt="menu" />
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