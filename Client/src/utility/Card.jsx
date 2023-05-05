import React from 'react'

const Card = ({photo, titleText, subTitleText, pText}) => {
  return (
    <div className='sm:w-[450px] sm:h-[538px] flex flex-col justify-center items-center rounded-2xl shadow-md '> 
        <div className='flex flex-col w-full h-full justify-center items-center  pb-5'>

            <div className='flex justify-center items-center w-[230px] h-[330px] mb-2'>
                <img src={photo} alt={titleText} className='w-[220px] h-[330px] object-contain ' />
            </div>

            <div className='text-center flex flex-col gap-2'>
                <h1 className='text-4xl font-semibold'>{titleText}</h1>
                <h2 className='text-2xl font-normal'>{subTitleText}</h2>
                <p className='text-xl font-normal truncate w-[250px]'>{pText}</p>
            </div>

        </div>

    </div>
  )
}

export default Card