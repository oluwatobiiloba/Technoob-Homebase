import React from 'react'

const EventInput = ({label,placeholder,type}) => {
  return (
    <div className='flex flex-col w-full sm:w-auto'>
        <label htmlFor="input" className='mb-3 ml-1 capitalize text-xl'>{label}</label>
        <input id='input' type={type} placeholder={placeholder} 
        className='placeholder:text-[#3a3a3a] placeholder:opacity-50 placeholder:pl-1 focus:outline-none focus-within:bg-slate-100 focus:border-tblue  focus:border-none focus:ring-[0] border-2 px-3 w-full sm:w-[287px] h-[40px] rounded-sm ' />
    </div>
  )
}

export default EventInput;