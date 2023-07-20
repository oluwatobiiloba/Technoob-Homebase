import React from 'react'

const ResourceModal = ({toggle, setToggle}) => {
  return (
    <div className=' w-full h-full relative overflow-hidden'>
        <div onClick={()=>setToggle(prev => !prev)} className=' overlay w-screen h-screen bg-slate-200 opacity-80'/>
        <div className='modal-content absolute top-[25%] left-[25%] flex flex-col justify-center items-center z-50 gap-20 rounded-md bg-white w-[60%] h-[20rem]'>
            <h1 >What type of file do you want to add?</h1>
           <div className='flex gap-20'>
                <div className='w-[12rem] h-[1rem] rounded-md bg-slate-200 py-6 flex justify-center items-center'>Link</div>
                <div className='w-[12rem] h-[1rem] rounded-md text-white bg-tblue py-6 flex justify-center items-center'>Document</div>
           </div>
        </div>
    </div>
  )
}

export default ResourceModal