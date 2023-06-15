import React from 'react';
import { AdminNavs } from '../data/contact';
import {  NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';

const AdminSideBar = () => {
   console.log(AdminNavs)
   const isActive = false;



  return (
    <div className='hidden lg:flex flex-col h-full border-r-[0.5px] w-full px-6 justify-between items-center'>
        <div className='mt-5 w-full mx-5 flex item-start'>
           
            <div className='flex flex-col items-end w-full '>
                <NavLink to={'/'}>
                    <div className='mb-4 w-[260px] h-[54px] flex items-center p-3 m-2 rounded-md hover:bg-tblue hover:text-white'>
                        <MdOutlineDashboard className='mr-5 text-2xl'/>
                        <h2 className='text-base capitalize'>dashboard</h2>
                    </div>
                </NavLink>
                
                <div className='w-[260px] h-[0.3px] opacity-20 bg-gray-400 mb-20'/>
            {AdminNavs.map((Nav, i) => (
                    <NavLink
                        to={Nav.link} 
                        key={Nav.id}
                        className={`${isActive ? 'bg-tblue' : ''} w-[260px] h-[54px] flex items-center p-3 m-2 mb-4 rounded-md hover:bg-tblue hover:text-white`}
                        >    
                        <div className='mr-5 text-2xl'>{Nav.icon}</div>
                        <h2 className='text-base'>{Nav.title}</h2>
                    </NavLink>
                
            ))}
            </div>

        </div>
        <div className='mb-10'>bottom</div>
    </div>
  )
}

export default AdminSideBar