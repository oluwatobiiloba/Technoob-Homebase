import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {BsBell} from 'react-icons/bs'
import {TbSettings} from 'react-icons/tb'
import { people01 } from '../data/assets/asset';
import { NavLink } from 'react-router-dom';

import { MdOutlineDashboard } from 'react-icons/md';

import { menu, close } from '../data/assets';
import { AdminNavs} from '../data/contact';

const AdminNavBar = () => {
    
    const [toggle, setToggle] = useState(false);
    

  return (
    <div className='w-full bg-white sm:h-full p-6 sm:py-7 sm:px-20 flex justify-between items-start'>
        
        <div className='text-lg md:text-2xl font-extrabold text-[#5E7CE8] cursor-pointer'>
            <Link to={'/Admin-Home'}>Tech Noob</Link>
        </div>


        <div className='w-auto hidden h-full sm:flex flex-row justify-around gap-3 items-center float-right'>
            <div>
                <BsBell className='sm:text-2xl cursor-pointer'/>
            </div>
            <div>
                <TbSettings className='sm:text-2xl cursor-pointer'/>
            </div>
            <div className='rounded-full h-5 w-5 sm:w-8 sm:h-8 cursor-pointer'>
                <img src={people01} alt="profile"  className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='flex lg:hidden h-full items-center justify-center'>
                <img src={toggle ? close : menu} alt="menu" onClick={()=> setToggle((prev) => !prev)} className='h-4 w-4 cursor-pointer'/>

                <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-white rounded-md absolute top-16 right-0 mx-1 my-2 w-[375px] z-10 h-full sidebar flex-col transition`}>
                    <ul className='flex font-normal justify-center items-center gap-3 list-none flex-col text-white'>

                    <NavLink to={'/'} onClick={()=> setToggle((prev) => !prev)}>
                    <div className='mb-12 w-[260px] h-[54px] flex items-center rounded-md text-black'>
                        <MdOutlineDashboard className='mr-5 text-2xl'/>
                        <h2 className='text-base capitalize'>dashboard</h2>
                    </div>
                </NavLink>

                            {AdminNavs.map((nav, i) =>(
                            
                            <NavLink
                                to={nav.link} 
                                key={nav.id}
                                onClick={()=> setToggle((prev) => !prev)}
                                className={` w-[260px] h-[54px] text-black flex items-center rounded-md`}
                                >    
                                <div className='mr-5 text-2xl'>{nav.icon}</div>
                                <h2 className='text-base'>{nav.title}</h2>
                            </NavLink>

                        ))}

                     </ul>
                     
                     <div className='flex flex-col justify-center items-center mt-10 gap-5'>
                        
                        
                     </div>
                </div>
            </div>
    </div>
  )
}

export default AdminNavBar