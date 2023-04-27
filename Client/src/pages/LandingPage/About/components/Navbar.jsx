import {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'

let Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <nav className="nun lg:text-[24px] md:text-[18] flex justify-between bg-white lg:shadow-md w-[100%]  h-28 pt-5 px-5">
                <h2 className="font-bold text-[24px] m-2 text-[#7c87e2] px-6 cursor-pointer">
                    Tech Noob
                </h2>
            <ul className="md:flex flex-1 justify-center hidden">
                <li className=" p-2 cursor-pointer hover:text-tgreen text-tblack">Home</li>
                <li className=" p-2 cursor-pointer hover:text-tgreen text-tblack">Resources</li>
                <li className=" p-2 cursor-pointer hover:text-tgreen text-tgreen">About Us</li>
                <li className=" p-2 cursor-pointer hover:text-tgreen text-tblack">Contact Us</li>
            </ul>
            <div className=" mx-6 p-2 hidden md:flex">
                <button className=" w-[130px] h-[56px] bg-gray-200 hover:bg-gray-100 mx-1 rounded text-tblack">Login</button>
                <button className=" w-[200px] h-[56px] bg-tblue hover:bg-blue-400 text-twhite mx-1 rounded">Get Started</button>
            </div>
            <div className='md:hidden flex flex-1 justify-end items-center pr-6 pb-10 text-tblue' onClick={handleClick}>
                {toggle ? <AiOutlineClose/> : <RxHamburgerMenu/> }
                <div className={`${toggle ? "flex" : "hidden"} p-6 bg-white absolute top-20 right-0 mx-6 my-2 min-w-[140px] rounded-xl`}>
                <ul className="flex flex-col items-center">
                <li className=" p-2 cursor-pointer hover:text-tgreen text-tblack">Home</li>
                <li className=" p-2 cursor-pointer hover:text-tgreen text-tblack">Resources</li>
                <li className=" p-2 cursor-pointer hover:text-tgreen text-tgreen">About Us</li>
                <li className=" p-2 cursor-pointer hover:text-tgreen text-tblack">Contact Us</li>
                </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;