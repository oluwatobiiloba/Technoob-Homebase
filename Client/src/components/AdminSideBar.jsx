import React, {useContext, useState} from "react";
import {AdminNavs} from "../data/contact";
import {NavLink, useNavigate} from "react-router-dom";
import {MdOutlineDashboard} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import {BiLogOut} from "react-icons/bi";
import serverApi from "../utility/server";
import {AppContext} from "../AppContext/AppContext";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AdminSideBar = () => {
  const isActive = false;

  return (
    <div className="hidden bg-[#fff] lg:flex flex-col h-full border-r-[0.5px] w-full  justify-start items-center">
      <div className=" w-full flex justify-center items-center mb-[10rem] item-between">
        <div className="flex flex-col justify-center items-center w-full ">
          <NavLink to={"/"} className=" hover:text-[#fff]">
            <div className="mb-4 w-[230px] h-[54px] flex items-center p-3 m-2 rounded-md hover:bg-tblue ">
              <MdOutlineDashboard className="mr-5 text-3xl" />
              <h2 className="font-bold capitalize text-lg">dashboard</h2>
            </div>
          </NavLink>

          <div className="w-[260px] h-[2.3px] opacity-20 bg-gray-400 mb-20" />
          {AdminNavs.map((Nav, i) => (
            <NavLink
              to={Nav.link}
              key={Nav.id}
              className={`${
                isActive ? "bg-tblue" : ""
              } w-[260px] h-[54px] flex items-center p-3 m-2 mb-4 rounded-md hover:bg-tblue hover:text-white`}
            >
              <div className={`mr-5 text-3xl`}>{Nav.icon}</div>
              <h2 className="text-base font-semibold">{Nav.title}</h2>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mb-10 mx-5 w-[80%] border-t-2 border-slate-300">
        <div className="flex flex-col mt-6 gap-10">
          <span className="flex justify-start items-center gap-4 text-lg cursor-pointer font-semibold">
            <FiSettings className=" font-normal" /> Profile
          </span>
          <span className="flex  justify-start items-center gap-4 text-lg cursor-pointer font-semibold">
            <FiSettings className="" /> Settings
          </span>
          <SignOut></SignOut>
        </div>
      </div>
    </div>
  );
};

function SignOut(){
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {  setIsLoggedIn, setUserProfile,setDashboardToggle } =
      useContext(AppContext);

  const signOut = async () => {
    setLoading(true)
     const response = await serverApi.post("/authenticate/logout")
    setLoading(false)
    if(response.status === 200){
      navigate("/Home");
      setIsLoggedIn(false);
      setUserProfile(null);
      cookies.remove("user");
      setDashboardToggle({
        displayToggle: false,
        toggleValue: "User Dashboard",
      });
    }

  }

  const submit = async (e) => {
    e.preventDefault();
    await signOut();
  };

  return (
      <button onClick={submit}>
      <span className="flex justify-start items-center gap-4 text-red-400 text-lg cursor-pointer font-semibold">
           <BiLogOut className=""  /> { loading ? 'Logging out' : 'Log Out'}
          </span>
        </button>
  );
}
export default AdminSideBar;
