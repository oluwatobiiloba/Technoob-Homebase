import React, { useContext } from 'react';
import './App.css';

import {useLayoutEffect} from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {NavBar,Footer} from './components/index.js';

import {SignUp } from './pages/Auth';

import { ContactUs, Resources, AboutUs,Home, UserLogin } from './pages/LandingPage';

import { AppContext } from './AppContext/AppContext';
import AdminNavBar from './components/AdminNavBar';
import AdminSideBar from './components/AdminSideBar';

import { AdminDashboard, JobManagement, ResourceManagement, EventManagement  } from './pages/AdminPage/Dashboard'




function App() {

  const [isAdmin] = useContext(AppContext)

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  return (
    <BrowserRouter>
      {isAdmin 
      
      ? 
      
      <div className="bg-primary w-full overflow-auto relative">
        <div className='flex flex-start w-full top-0 lg:fixed z-50'>
          <div className='w-full'>
            <NavBar/>
          </div>
      </div>
      <main className='lg:pt-16'>
        <Wrapper>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/Home" element={<Home/>}/>
          <Route path= "/About-Us" element={<AboutUs/>}/>
          <Route path= "/Contact-Us" element={<ContactUs/>}/>
          <Route path= "/Resources" element={<Resources/>}/>
          <Route path= "/Sign-Up" element={<SignUp/>}/>
          <Route path="/User-Login" element={<UserLogin/>}/>
      </Routes>
      </Wrapper>
  </main> 

      <div>
        <Footer/>
      </div>
      
    </div> 
    : 
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
    
}
</BrowserRouter>
)}

export default App;
