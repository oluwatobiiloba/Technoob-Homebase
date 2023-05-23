import React from 'react';
import { Link } from 'react-router-dom';
import {BsBell} from 'react-icons/bs'
import {TbSettings} from 'react-icons/tb'
import { people01 } from '../data/assets/asset';

const AdminNavBar = () => {
  return (
    <div className='w-full h-full py-7 px-20 flex flexx-col justify-between items-center bg-white'>
        
        <div className='text-lg md:text-2xl font-extrabold text-[#5E7CE8] cursor-pointer'>
            <Link to={'/Admin-Home'}>Tech Noob</Link>
        </div>

       


        <div className='w-[13%] h-full flex flex-row justify-around items-center float-right'>
            <div>
                <BsBell className='text-2xl cursor-pointer'/>
            </div>
            <div>
                <TbSettings className='text-2xl cursor-pointer'/>
            </div>
            <div className='rounded-full w-8 h-8 cursor-pointer'>
                <img src={people01} alt="profile"  className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default AdminNavBar