import React from 'react'

const InputField = ({ name, value, onChange, placeholder, type }) => {
    return (
        <div className='mb-8'>
        <label htmlFor="fullname" className=' text-2xl font-semibold py-10 px-4 ' >{name}</label><br/>
        <input type={type} value={value} onChange={onChange} name={name} required  placeholder={placeholder} className='w-[100%] text-lg rounded-xl m-1 border placeholder:pl-2 px-2 py-4 outline-0 ring-1 bg-white' />
        </div>
      )
    } 

export default InputField