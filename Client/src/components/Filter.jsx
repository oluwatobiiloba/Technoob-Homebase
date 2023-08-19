import React, {useState} from 'react'
import {RiArrowDownSLine} from 'react-icons/ri'
import { filtersearch } from '../data/assets';
import Checks from "../pages/LandingPage/FindJob/components/Checks";

const Filter = ({ selected, setSelected,options,passedOptions, setpassedOptions,handleBox1Change, box1 }) => {

    
    const [active, setActive] = useState(true);

    const Options = options.map((option, index) => {

        let alias;
        let key = option.key

        if(key === "averageRating") alias = "Ratings";
        if(key === "stack") alias = "Stack";
        if(key === "type") alias = "Type";

        return {
            "id": index,
            "alias": alias,
            "name": option.key,
            "values": option.value
        };
    });

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
                                setSelected(option.alias);
                                setpassedOptions(option);
                            }        
                            } 
                            className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                                {option.alias}
                                </li>
                        ))}
                    </ul>
                </div>
        <Checks passOptions={passedOptions} handleBox1Change={handleBox1Change} box1={box1} />
    </div>
  )
}


export default Filter