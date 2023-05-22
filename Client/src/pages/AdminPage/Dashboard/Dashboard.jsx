import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import Section from './components/Section'
// import JobManagement from './components/JobManagement'

const Dashboard = () => {
  const [select, setSelect] = useState('Dashboard')
  const [toggle, setToggle] = useState(false)
  const options = [
    {
        id : 1,
        name : 'Dashboard'
    },
    {
        id : 2,
        name : 'Job Management'
    },
    {
        id : 3,
        name : 'Resource Management'
    },
    {
        id : 4,
        name : 'Event Management'
    },
    {
        id : 4,
        name : 'Quizzes and Competition'
    }
  ]
  return (
    <div className=' py-2 sm:flex block nun'>
      <nav className=' lg:w-[22%] lg:block hidden shadow-md rounded-md h-[1000px]'>
            <div className='border-b-[0.5px] m-[auto] w-[85%] mt-6 border-[#C2C7D6] mb-7'>
                <h1 className=' text-lg bg-tblue rounded p-4 cursor-pointer text-twhite mb-6'>{select} </h1>
            </div>
            <ul>
                {
                    options.map((option, i)=>(
                        <li className={`cursor-pointer text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md my-4`} key={i} onClick={()=>{setSelect(option.name)}}>{option.name}</li>
                    ))
                }
            </ul>
        </nav>
        <div className=' lg:hidden'>
            <div onClick={(()=>{setToggle(!toggle)})}>
            {toggle ? <AiOutlineClose/> : <RxHamburgerMenu/> }
            </div>
            <div  className={`${toggle ? 'block' : 'hidden'} bg-twhitee w-[250px] shadow-md rounded-md `}>
                <div className='border-b-[0.5px] m-[auto] w-[85%] mt-6 border-[#C2C7D6] mb-7'>
                    <h1 className=' text-sm bg-tblue rounded p-4 cursor-pointer text-twhite mb-6'>{select} </h1>
                </div>
                <ul>
                    {
                        options.map((option, i)=>(
                            <li className={`cursor-pointer text-xs p-1 hover:bg-[#F0F4FE] rounded-md my-1`} key={i} onClick={()=>{setSelect(option.name)}}>{option.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
      <Section/>
      {/* <JobManagement/> */}
    </div>
  )
}

export default Dashboard