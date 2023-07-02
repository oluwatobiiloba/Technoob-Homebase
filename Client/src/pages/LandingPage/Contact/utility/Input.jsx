import React from 'react'

const Input = ({ name, value, onChange, placeholder }) => {
  return (
    <div className='mb-6'>
    <label htmlFor="fullname" className=' text-2xl pl-2 py-5' >{placeholder}</label><br/>
    <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} className=' w-[100%] rounded-xl m-1 border pl-5 py-4 outline-0 ring-1 bg-white' />
    </div>
  )
}

export default Input