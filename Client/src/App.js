import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NavBar,Footer} from './components/index.js';
import { ContactUs, Resources, AboutUs,Home } from './pages/LandingPage';


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
