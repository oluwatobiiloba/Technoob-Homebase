import React from 'react';
import './App.css';
import {NavBar, Home,
  Footer} from './components/index.js'
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className='flex flex-start'>
        <div className='w-full'>
          <NavBar/>
        </div>
      </div>
      
      <div className='flex flex-start mb-20'>
        <div className='w-full'>
          <Home/>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='w-full'>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
        </div>
          <Footer/>
      </div>
     
    </div>
  );
}

export default App;
