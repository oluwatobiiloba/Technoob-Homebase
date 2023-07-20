import React from 'react'


import { AdminDashboard, JobManagement, ResourceManagement, EventManagement  } from '../pages/AdminPage/Dashboard';


import { Routes, Route,} from 'react-router-dom';

import AdminNavBar from '../components/AdminNavBar';
import AdminSideBar from '../components/AdminSideBar';

const AdminPageLayout = () => {
  return (
    <div className='h-full bg-[#f9f9f9] w-full pb-20 '>

    <div className='flex flex-start w-full top-0 z-50'>
      <div className='w-full bg-white'>
         <AdminNavBar/>
      </div>
    </div>

    <div className='flex justify-between'>
        <div className='hidden bg-white sm:block rounded-md mt-10 shadow-md h-[1700px]  lg:h-auto w-[350px] '>
            <AdminSideBar/> 
        </div>

        <div className='bg-[#f9f9f9] w-full grow lg:h-auto h-[1600px] pb-10 lg:pr-10 p-5'>
          
          <Routes>
            <Route path='/' element={<AdminDashboard/>}/>
            <Route path='/Job-Management' element={<JobManagement/>}/>
            <Route path='/Resources-Management' element={<ResourceManagement/>}/>
            <Route path='/Event-Management' element={<EventManagement/>}/>
          </Routes>
         
        </div>

    </div>

</div>
  )
}

export default AdminPageLayout