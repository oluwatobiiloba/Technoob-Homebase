import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const Checks = ( { box1, box2, box3, box4, box5, handleBox1Change, handleBox2Change, handleBox3Change, handleBox4Change, handleBox5Change, boxx1, boxx2, boxx3, boxx4, boxx5, handleBoxx1Change, handleBoxx2Change, handleBoxx3Change, handleBoxx4Change, handleBoxx5Change, boxxx1, boxxx2, boxxx3, boxxx4, boxxx5, handleBoxxx1Change, handleBoxxx2Change, handleBoxxx3Change, handleBoxxx4Change, handleBoxxx5Change, boxxxx1, boxxxx2, boxxxx3, boxxxx4, boxxxx5, handleBoxxxx1Change, handleBoxxxx2Change, handleBoxxxx3Change, handleBoxxxx4Change, handleBoxxxx5Change } ) => {
  return (
    <div>
        <div className='p-2'>
          <div className='flex justify-between items-center p-2 cursor-pointer my-4'>
            <h1 className='text-xl font-bold'>Type of Employment</h1>
            <RiArrowDownSLine/>
          </div>
          <div className="shadow-md rounded-lg">
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={box1} onChange={handleBox1Change} id="" />
              <label className='px-2' htmlFor={'Full Time'}>Full Time</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={box2} onChange={handleBox2Change} id="" />
              <label className='px-2' htmlFor={'Part Time'}>Part Time</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={box3} onChange={handleBox3Change} id="" />
              <label className='px-2' htmlFor={'Remote'}>Remote</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={box4} onChange={handleBox4Change} id="" />
              <label className='px-2' htmlFor={'Internship'}>Internship</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={box5} onChange={handleBox5Change} id="" />
              <label className='px-2' htmlFor={'Contract'}>Contract</label>
            </div>
          </div>
        </div>
        <div className='p-2'>
          <div className='flex justify-between items-center p-2 cursor-pointer my-4'>
            <h1 className='text-xl font-bold'>Categories</h1>
            <RiArrowDownSLine/>
          </div>
          <div className="shadow-md rounded-lg">
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxx1} onChange={handleBoxx1Change} id="" />
              <label className='px-2' htmlFor={'Product Design'}>Product Design</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxx2} onChange={handleBoxx2Change} id="" />
              <label className='px-2' htmlFor={'Engineering'}>Engineering</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxx3} onChange={handleBoxx3Change} id="" />
              <label className='px-2' htmlFor={'UX Design'}>UX Design</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxx4} onChange={handleBoxx4Change} id="" />
              <label className='px-2' htmlFor={'Director (1)'}>Director (1)</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxx5} onChange={handleBoxx5Change} id="" />
              <label className='px-2' htmlFor={'Finance'}>Finance</label>
            </div>
          </div>
        </div>
        <div className='p-2'>
          <div className='flex justify-between items-center p-2 cursor-pointer my-4'>
            <h1 className='text-xl font-bold'>Job Level</h1>
            <RiArrowDownSLine/>
          </div>
          <div className="shadow-md rounded-lg">
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxx1} onChange={handleBoxxx1Change} id="" />
              <label className='px-2' htmlFor={'Entry Level (45)'}>Entry Level (45)</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxx2} onChange={handleBoxxx2Change} id="" />
              <label className='px-2' htmlFor={'Mid Level (12) '}>Mid Level (12) </label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxx3} onChange={handleBoxxx3Change} id="" />
              <label className='px-2' htmlFor={'Senior Level (5) '}>Senior Level (5) </label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxx4} onChange={handleBoxxx4Change} id="" />
              <label className='px-2' htmlFor={'Director (1)'}>Director (1)</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxx5} onChange={handleBoxxx5Change} id="" />
              <label className='px-2' htmlFor={'VP and Above (0)'}>VP and Above (0)</label>
            </div>
          </div>
        </div>
        <div className='p-2'>
          <div className='flex justify-between items-center p-2 cursor-pointer my-4'>
            <h1 className='text-xl font-bold'>Salary Range</h1>
            <RiArrowDownSLine/>
          </div>
          <div className="shadow-md rounded-lg">
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxxx1} onChange={handleBoxxxx1Change} id="" />
              <label className='px-2' htmlFor={'$500 - $800 (40)'}>$500 - $800 (40)</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxxx2} onChange={handleBoxxxx2Change} id="" />
              <label className='px-2' htmlFor={'$1000 - $2000 (31)'}>$1000 - $2000 (31)</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxxx3} onChange={handleBoxxxx3Change} id="" />
              <label className='px-2' htmlFor={'$2000 - $2500 (20)'}>$2000 - $2500 (20)</label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxxx4} onChange={handleBoxxxx4Change} id="" />
              <label className='px-2' htmlFor={'$1500 - $3000 (12) '}>$1500 - $3000 (12) </label>
            </div>
            <div className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
              <input type="checkbox" value={boxxxx5} onChange={handleBoxxxx5Change} id="" />
              <label className='px-2' htmlFor={'$4000 and Above (4)'}>$4000 and Above (4)</label>
            </div>
          </div>
        </div>
    </div>
      /*  head: 'Salary Range',
          type1: '$500 - $800 (40)',
          check1: false,
          type2: '$1000 - $2000 (31)',
          check2: false,
          type3: '$2000 - $2500 (20) ',
          check3: false,
          type4: '$1500 - $3000 (12) ',
          check4: false,
          type5: '$4000 and Above (4)',
          check5: false, */
  )
}

export default Checks