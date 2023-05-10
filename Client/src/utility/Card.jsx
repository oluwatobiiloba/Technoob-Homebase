import React from 'react'

const Card = ({photo, titleText, subTitleText, pText}) => {
  return (
    <div className='w-[230px] h-[300px] sm:w-[430px]  sm:h-[538px] p-3 flex flex-col justify-center items-center rounded-2xl shadow-md '> 
        <div className='flex flex-col w-full h-full justify-center items-center  m-5'>

            <div className='flex justify-center items-center w-[230px] h-[330px] mb-2'>
                <img src={photo} alt={titleText} className='w-[210px] h-[169px] md:w-[250px] md:h-[340px] object-contain ' />
            </div>

            <div className='text-center justify-center items-center flex flex-col gap-2'>
                <h1 className='text-lg sm:text-4xl font-bold'>{titleText}</h1>
                <h2 className='text-sm sm:text-2xl font-normal'>{subTitleText}</h2>
                <p className='text-xs sm:text-xl font-normal truncate w-[180px] sm:w-[250px] '>{pText}</p>
            </div>

        </div>

    </div>
  )
}

export default Card