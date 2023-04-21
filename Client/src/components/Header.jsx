import React from 'react'

const Header = () => {
  return (
    <header  className=' px-5 pb-5'>
      <div className='uni text-center md:text-6xl text-3xl py-8 font-bold'>
        <span className=' text-tblue'>About </span> <span className=' text-tgreen'>Us</span>
      </div>
      <div className="text-center md:text-2xl nun text-tblack text-sm lg:px-96">
        <p>Our philosophy is based on believe thst technology has the power to change the world for the better</p>
        <p>We believe that by sharing our passion for technology with our members, we can inspire them to make a positive impact on the world around them.</p>
      </div>
    </header>
  )
};

export default Header;