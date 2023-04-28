import React from 'react'

const Button = ({name}) => {
  return (
    <button className='w-[335px] sm:w-[201px] h-[50px] bg-[#5E7CE8] rounded-md text-white py-4 px-3.5'>
        {name}
    </button>
  )
}

export default Button