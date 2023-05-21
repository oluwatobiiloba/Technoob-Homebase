import {useState} from 'react'

const SideNav = () => {
  const [select, setSelect] = useState('Dashboard')
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
    <nav className=' w-[22%] shadow-md rounded-md h-[1000px]'>
        <div className='border-b-[0.5px] m-[auto] w-[85%] mt-6 border-[#C2C7D6] mb-7'>
            <h1 className=' text-lg bg-tblue rounded p-4 cursor-pointer text-twhite mb-6'>{select} </h1>
        </div>
        <ul>
            {
                options.map((option, i)=>(
                    <li className=' cursor-pointer text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md my-4' key={i} onClick={()=>{setSelect(option.name)}}>{option.name}</li>
                ))
            }
        </ul>
    </nav>
  )
}

export default SideNav