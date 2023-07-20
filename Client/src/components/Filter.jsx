import React, {useState} from 'react'
import {RiArrowDownSLine} from 'react-icons/ri'
import { filtersearch } from '../data/assets';

const Filter = ({ selected, setSelected }) => {

    
    const [active, setActive] = useState(true)
    

    const Options = [
        {
        id: 1,
        name:'Product Design'}, 
        {
            id:2,
            name:'Graphics Design'
        }, 
        {
            id:3,
            name:'UX Design', 
        }, 
        {
            id:4,
            name:'Interior Design',
        }, 
        {
            id:5,
            name:'Industrial Design'
        }];
  return (
    <div>    
        <div className='flex justify-start items-center p-4 '>
                    <img src={filtersearch} alt="icon" className='mr-2 w-6 h-6' />
                    <p className='text-sm font-normal'>Filter By</p>
                </div>

                <div className=' border-b-[0.5px] border-[#C2C7D6] mb-7'/>

                <div className='shadow-md rounded-lg p-2'>
                    
                    <div onClick={()=> setActive((prev) => !prev)} className='flex justify-between items-center p-2 cursor-pointer'>
                        <h1 className='text-2xl'>{selected}</h1>
                        <RiArrowDownSLine/>
                    </div>
                    

                    <ul className={`${active ? 'block' : 'hidden'}`}>
                        {Options.map((option, i) => (
                            <li key={i} onClick={()=>{
                                
                                    setActive(false);
                                    setSelected(option.name)
                                
                            }        
                            } 
                            className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                                {option.name}
                                </li>
                        ))}
                    </ul>
                </div>

    </div>
  )
}

export default Filter