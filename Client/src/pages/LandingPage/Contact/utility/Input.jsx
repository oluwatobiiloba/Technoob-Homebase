import React from 'react'

const Input = ({ name }) => {
  return (
    <>
    <label htmlFor="fullname" className=' text-2xl font-semibold py-10 px-4 ' >{name}</label><br/>
    <input type="text" placeholder={name} className=' w-[100%] rounded-xl m-1 border px-10 py-4 my-10 outline-0 ring-1 bg-white' />
    </>
  )
}

export default Input