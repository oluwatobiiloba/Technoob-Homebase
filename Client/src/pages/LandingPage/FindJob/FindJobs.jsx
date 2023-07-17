import {useState} from 'react'
import Header from './components/Header'
import { main, container } from '../style/style'
import { RiArrowDownSLine } from 'react-icons/ri'
import { filtersearch, close } from '../../../data/assets'

const FindJobs = () => {
    const [selected, setSelected] = useState('Design');
    const [active, setActive] = useState(false);
    const [togggle, setTogggle] = useState(false);
    const handleActive = () =>{
      setActive(!active)
    }

    const Options = [
      {
        id: 1,
        name:'Product Design'
      }, 
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
    <div className={`${main.wraper}`}>
      <Header />
      <div className={`absolute shadow-sm right-0 left-4 mt-20 h-[470px] z-10 bg-white w-[85%] flex flex-col justify-start items-start ${togggle ? 'block' : 'hidden'} sm:hidden`}>
        <div className='flex justify-between items-center p-4 w-full'>
          <div className='flex p-2'>
            <img src={filtersearch} alt="icon" className='mr-3 w-6 h-6' />
            <p className='text-sm font-normal'>Filter By</p>
          </div>
          <img src={close} alt="close" onClick={()=> setTogggle(!togggle)} />
        </div>
        <div className=' border-b-[0.5px] m-auto w-[95%] mt-6 border-[#C2C7D6] mb-7'/>
        <div className='shadow-md rounded-lg  w-full p-2'>
          <div onClick={()=> setActive((prev) => !prev)} className='flex justify-between items-center p-2 cursor-pointer'>
            <h1 className='text-2xl'>{selected}</h1>
            <RiArrowDownSLine/>
          </div>
          <ul className={`${active ? 'block' : 'hidden'}`}>
            {Options.map((option, i) => (
              <li key={i} onClick={()=>{       
                setActive(false);
                setSelected(option.name)
                setTogggle(false)
              }} 
              className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${container.containerGrid}`}>
        <div className={`${container.leftGrid}`}>
          <div className='flex justify-start items-center p-4 '>
            <img src={filtersearch} alt="icon" className='mr-2 w-6 h-6' />
            <p className='text-sm font-normal'>Filter By</p>
          </div>
          <div className=' border-b-[0.5px] border-[#C2C7D6] mb-7'/>
          <div className='shadow-md rounded-lg p-2'>                 
            <div onClick={()=> setActive(handleActive)} className='flex justify-between items-center p-2 cursor-pointer'>
              <h1 className='text-2xl'>{selected}</h1>
              <RiArrowDownSLine/>
            </div>
            <ul className={`${active ? 'block' : 'hidden'}`}>
              {Options.map((option, i) => (
              <li key={i} onClick={()=>{setActive(false); setSelected(option.name)}} className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                {option.name}
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${container.rightGrid}`}></div>
      </div>
    </div>
  )
}

export default FindJobs