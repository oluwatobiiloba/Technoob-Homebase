import React from 'react'

const Card = ({photo, titleText, subTitleText, pText}) => {
  return (
    <div className='w-[230px] h-[330px] sm:w-[430px]  sm:h-[480px] p-3 flex flex-col justify-center items-center rounded-2xl shadow-md '> 
        <div className='flex flex-col w-full h-full justify-center items-center  m-5'>

            <div className='flex justify-center items-center w-[230px] h-[280px] mb-2'>
                <img src={photo} alt={titleText} className='w-[210px] h-[150px] md:w-[250px] md:h-[300px] object-contain ' />
            </div>

            <div className='text-center justify-center items-center flex flex-col gap-2'>
                <h1 className='text-base sm:text-3xl font-bold'>{titleText}</h1>
                <h2 className='text-sm sm:text-xl font-normal'>{subTitleText}</h2>
                <p className='text-xs sm:text-base font-normal truncate w-[180px] sm:w-[250px] '>{pText}</p>
            </div>

        </div>

    </div>
  )
}

export default Card