import React from 'react'

const Checks = ( { passOptions,  handleBox1Change, box1 } ) => {

  return ( passOptions.name && (
        <div className='p-2'>
          <div className='flex justify-between items-center p-2 cursor-pointer my-4'>
          </div>
          <div className="shadow-md rounded-lg">{
              passOptions.values[0] !== null  && passOptions.values.map((value,i)=> {
             return(
                 <div key={i} className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                     <input
                        type="checkbox"
                        value={value}
                        onChange={handleBox1Change}
                        checked={box1.includes(value)}
                        id={value} />
                    <label className='px-2' htmlFor={value}>{value}</label>
                 </div>
             )
            })
          }
          </div>
        </div>
  )
  )
}


export default Checks