import React from 'react'

const Table = () => {
  return (
    <table className=' border-t border-b w-full overflow-x-auto'>
    <thead>
      <tr>
      <td><h4 className=' font-semibold text-xl mt-2'>Activity</h4></td>
      <td><h4 className=' px-10 text-xl font-semibold'>Tech Stack</h4></td>
      <td><h4 className=' px-10 text-xl font-semibold'>File Name</h4></td>
      <td><h4 className=' px-10 text-xl font-semibold'>File Type</h4></td>
      <td className=''><h4 className=' px-10 text-xl font-semibold'>Status</h4></td>
      <td> <span>...</span></td>
    </tr>
    </thead>
    <tbody>
      <tr>
      <td><p className=' text-sm my-4'>Product Design</p></td>
      <td><p className=' px-10 text-sm'>Meta</p></td>
      <td><p className=' px-10 text-sm'>On-site</p></td>
      <td><p className=' px-10 text-sm'>NY, USA</p></td>
      <td className='w-[20%] '><p className='bg-red-400 text-base  text-white rounded-[30px] w-full lg:w-[80%]  pl-2  py-2 text-center flex justify-start items-center'> <span className='rounded-full bg-red-700 w-4 h-4 mr-2'> </span>Unsuccessful</p></td>
      <td></td>
    </tr>
    <tr className=' border-t'>
      <td><p className=' text-sm my-6'>Front-end Developer</p></td>
      <td><p className=' px-10 text-sm'>Twitter</p></td>
      <td><p className=' px-10 text-sm'>Remote</p></td>
      <td><p className=' px-10 text-sm'>Lagos, NG</p></td>
      <td className='w-[20%] '><p className='text-base text-white bg-green-500 rounded-[30px]  w-full lg:w-[80%]  pl-2  py-2 text-center flex justify-start items-center'> <span className='rounded-full bg-green-700 w-4 h-4 mr-2'> </span>Successful</p></td>
      <td><span>...</span></td>
    </tr>
    <tr className=' border-t'>
      <td><p className=' text-sm my-6'>Product Manager</p></td>
      <td><p className=' px-10 text-sm'>Whatsapp</p></td>
      <td><p className=' px-10 text-sm'>Remote</p></td>
      <td><p className=' px-10 text-sm'>NY, USA</p></td>
      <td className='w-[20%] '><p className=' text-base text-white bg-green-500 rounded-[30px]  w-full lg:w-[80%]  pl-2  py-2 text-center flex justify-start items-center'> <span className='rounded-full bg-green-700 w-4 h-4 mr-2'> </span>Successful</p></td>
      <td><span>...</span></td>
    </tr>
   
    </tbody>
    
  </table>
  )
}

export default Table