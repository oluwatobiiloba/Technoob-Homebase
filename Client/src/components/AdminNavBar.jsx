import React from 'react';
import { Link } from 'react-router-dom';
import {BsBell} from 'react-icons/bs'
import {TbSettings} from 'react-icons/tb'
import { people01 } from '../data/assets/asset';

const AdminNavBar = () => {
  return (
    <div className='w-full h-full bg-red-400 p-6 sm:py-7 sm:px-20 flex justify-between items-center'>
        
        <div className='text-lg md:text-2xl font-extrabold text-[#5E7CE8] cursor-pointer'>
            <Link to={'/Admin-Home'}>Tech Noob</Link>
        </div>

       


        <div className='w-auto h-full flex flex-row justify-around gap-3 items-center float-right'>
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
    </div>
  )
}

export default AdminNavBar