import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NavBar,Footer} from './components/index.js';

import { Login,SignUp } from './pages/Auth';

import { ContactUs, Resources, AboutUs,Home, UserLogin } from './pages/LandingPage';



function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
      <div className='flex flex-start'>
        <div className='w-full  '>
          <NavBar/>
        </div>
      </div>
      <main>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/About-Us" element={<AboutUs/>}/>
          <Route path= "/Contact-Us" element={<ContactUs/>}/>
          <Route path= "/Resources" element={<Resources/>}/>
          <Route path= "/Sign-Up" element={<SignUp/>}/>
          <Route path="/User-Login" element={<UserLogin/>}/>
      </Routes>
  </main> 

      <div>
        <Footer/>
      </div>
      
     
     
    </div>
    </BrowserRouter>
  );
}

export default App;
