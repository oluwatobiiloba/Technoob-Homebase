import React from 'react'

import { Routes, Route, } from 'react-router-dom';


import {SignUp } from '../pages/Auth';

import { ContactUs, Resources, AboutUs,Home, UserLogin } from '../pages/LandingPage/index';
import {NavBar, Footer} from '../components/index'

const LandingPageLayout = ({Wrapper}) => {
  return (
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
  )
}

export default LandingPageLayout