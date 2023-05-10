import React from 'react'

const Button = ({name, handleClick, type}) => {

  return (
    <button onClick={handleClick} type={type}  className={  ` w-[335px] sm:w-[201px] h-[54px] text-base font-[400] bg-[#5E7CE8] rounded-md text-[#F2F2F2] py-4 px-3.5`}>
        
        {name}
    </button>
  )
}

export default Button