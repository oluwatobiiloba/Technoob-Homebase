import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const Checks = ( { checkList } ) => {
  return (
    <div>
        {checkList.map((check)=> (
          <div className={` p-2`}>                 
            <div className='flex justify-between items-center p-2 cursor-pointer my-4'>
              <h1 className='text-xl font-bold'>{check.head}</h1>
              <RiArrowDownSLine/>
            </div>
            <div className=' shadow-md rounded-lg'>
                <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                    <input type="checkbox" value={check.check1} name={check.type1} id="" />
                    <label className='px-2' htmlFor={check.type1}>{check.type1}</label>
                </div>
                <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                    <input type="checkbox" value={check.check2} name={check.type2} id="" />
                    <label className='px-2' htmlFor={check.type2}>{check.type2}</label>
                </div>
                <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                    <input type="checkbox" value={check.check3} name={check.type3} id="" />
                    <label className='px-2' htmlFor={check.type3}>{check.type3}</label>
                </div>
                <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                    <input type="checkbox" value={check.check4} name={check.type4} id="" />
                    <label className='px-2' htmlFor={check.type5}>{check.type4}</label>
                </div>
                <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                    <input type="checkbox" value={check.check5} name={check.type5} id="" />
                    <label className='px-2' htmlFor={check.type5}>{check.type5}</label>
                </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Checks