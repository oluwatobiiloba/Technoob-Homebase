import React from "react";
import Button from "./button";

const JobCard = ({
  title,
  company,
  data,
  location,
  contractType,
  workplaceType,
  link,
  exp,
  poster,
}) => {
  return (
    <div className="w-full h-auto p sm:h-[15rem] pr-6 flex flex-col sm:flex-row justify-between items-center rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-start h-full">

          {/* <img src={poster} alt={title} className=" rounded-lg sm:mt-0 w-[20px] h-[20px] sm:w-20 sm:h-20 " /> */}
          {/* w-20 h-20 sm:w-[15rem] sm:h-1/2  */}
          <div className='w-30 h-20 sm:w-[10rem] sm:h-1/2 mt-3 sm:mt-0  sm:rounded-l-md flex sm:items-center sm:justify-center p-5 mr-0'>
                    <img src={poster} alt={title} className='object-fit rounded-lg  w-20 h-20 sm:w-full sm:h-full ' />
                </div>

        <div className="flex flex-col pl-5 pt-6 gap-4 w-full">
          <h1 className="text-base sm:text-3xl font-bold">{title}</h1>
          <p className=" capitalize sm:text-base font-normal truncate w-[180px] sm:w-[250px]">
            {workplaceType} <span className="text-slate-400">. {location}</span>
          </p>
          <div className="flex gap-5">
            <h2 className="text-xs  text-green-500 bg-green-100 flex justify-center items-center p-2 rounded-md sm:text-sm font-normal">
              {company}
            </h2>
            <h2 className="text-xs  border-2 border-yellow-400 text-yellow-400 flex justify-center items-center p-2 rounded-md sm:text-sm font-normal">
              {contractType ? contractType : "contract"}
            </h2>
            <h2 className="text-xs border-2 border-blue-400 text-blue-400  flex justify-center items-center p-2 rounded-md sm:text-sm font-normal">
              {exp}
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-10  sm:mr-5">
        <button className="w-[80%] sm:w-[201px] h-[54px] text-base font-[400] bg-[#5E7CE8] rounded-md text-[#F2F2F2] py-4 px-3.5 ">
         <a href = {link}>Apply</a>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
