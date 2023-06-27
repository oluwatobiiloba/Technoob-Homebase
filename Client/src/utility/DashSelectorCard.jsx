import React from 'react'

const DashSelectorCard = ({photo, titleText, subTitleText, pText}) => {
  return (
    <div className='w-[115px] h-[150px] sm:w-[215px]  sm:h-[264px] p-3 flex flex-col justify-center items-center rounded-2xl shadow-md '> 
        <div className='flex flex-col w-full h-full justify-center items-center  m-5'>
            <div className='text-center justify-center items-center flex flex-col gap-2'>
                <h1 className='text-lg sm:text-4xl font-bold'>{titleText}</h1>
                <h2 className='text-sm sm:text-2xl font-normal'>{subTitleText}</h2>
                <p className='text-xs sm:text-xl font-normal truncate w-[180px] sm:w-[250px] '>{pText}</p>
            </div>

        </div>

    </div>
  )
}

export default DashSelectorCard