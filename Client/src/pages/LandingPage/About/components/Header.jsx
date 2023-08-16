import React from 'react'

const Header = () => {
  return (
    <header  className='px-5 pb-5 flex flex-col justify-center mb-0 sm:mb-4 items-center'>
      <div className='uni text-center md:text-6xl text-3xl py-5 md:pb-10 mb-4 font-bold'>
        <span className=' text-tblue'>About </span> <span className=' text-tgreen'>Us</span>
      </div> 
      <div className="nun w-[291px] text-center md:text-2xl nun text-tblackk text-[10px] lg:w-[825px]">
        <p>Our philosophy is based on believe thst technology has the power to change the world for the better.</p>
        <p>We believe that by sharing our passion for technology with our members, we can inspire them to make a positive impact on the world around them.</p>
      </div>
    </header>
  )
};

export default Header;