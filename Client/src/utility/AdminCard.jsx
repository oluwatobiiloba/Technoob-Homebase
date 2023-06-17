import React from 'react'

const AdminCard = ({name, icon, fileType, Amount}) => {
  return (
    <div className='bg-white w-[255px] h-[154px] sm:w-[444px] sm:h-[209px]  p-8 rounded-md'>
        <div className='pb-10 flex items-center justify-start'>
            <p className='text-base sm:text-2xl mr-9 text-[#71717a]'>{name}</p>
            <img src={icon} alt="icon" />
        </div>

        <p className='text-2xl sm:text-4xl text-[#3a3a3a]'>{Amount}<span className='text-base sm:text-xl opacity-50 ml-2'>{fileType}</span></p>
    </div>
  )
}

export default AdminCard