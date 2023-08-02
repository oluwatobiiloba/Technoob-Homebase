
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../AppContext/AppContext';

import { filtersearch } from "../../../data/assets";
import { AiOutlineCloudServer } from "react-icons/ai";
import {BiArchive} from 'react-icons/bi'
import Button from "../../../utility/button";
import Table from "../../../components/Table";
import Modal from "../../../Modals/Modal";
import AddFile from "../../../components/AddFile";

const ResourceMng = () => {
  //const [fileType, setfileType] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    console.log("open modal");
  };

  // const handleChange = (e) => {
  //   setfileType(e.target.value)
  //   console.log(e.target.value)
  // }
  const statistics = [
    {
      name: "Files Uploaded",
      amount: 45,
      amtlabel: "Files Uploaded",
      // tracks: "20 files",
      icon: <AiOutlineCloudServer />,
      // icon2: <AiOutlineEye />,
      style: "bg-green-100 text-tgreen",
    },
    {
      name: "Files Downloaded",
      amount: 120,
      amtlabel: "Files Downloaded",
      // tracks: "203 Downloads",
      icon: <BiArchive/>,
      style: "text-[#D4C433] bg-yellow-100",
    },
  ];


  
  //importing custom funtion and content from appContext
  const { data, loading, error, fetchData } = useContext(AppContext);

  useEffect(() => {
    var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MzQ5MmJiODYzNjBlMDU0NzY1NzZmOSIsImVtYWlsIjoib29sdXdhdG9iaWlsb2JhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoib2x1d2F0b2JpaWxvYmEifSwiaWF0IjoxNjkwNTgwNjc1fQ.oruKVUiZxadyOC_qOkVpdM89QYwNcYk0Wf19iv1BikE");
      myHeaders.append("Cookie", "connect.sid=s%3AMlp-rTrJ_70PsB3C3KvEwnz07lKjjy2x.SD8ltsLv%2Fr3Y6JjzYt9ibH%2BT2DrfetUid9EAxM57b%2BQ");

      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
    // Make an API call when the component mounts
    fetchData('https://technoob-staging.azurewebsites.net/api/v1/resources/activity', requestOptions);

  }, []);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error)
  }

  return (
    <section
      className={`w-full overflow-hidden ${
        isModalOpen ? "overflow-hidden" : ""
      }`}
    >
      <div className="flex justify-between ">
        <div className="flex  sm:flex-row mb-5 md:mb-0 py-1 sm:py-10 justify-start sm:justify-center items-start sm:items-center ">
          <h1 className=" md:text-3xl text-xl font-semibold">Hey, Esther -</h1>
          <p className="md:pt-2 pt-1 text-sm ml-3 sm:text-lg text-[#3A3A3A66] sm:text-black">
            Welcome your resource page.
          </p>
        </div>
      </div>
      <div className="lg:mx-4 lg:p-5 md:rounded-md bg-white xl:shadow-md w-full">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-start sm:justify-between w-full">
            <div>
              <h1 className="text-xl font-semibold sm:ml-4 lg:py-4 sm:text-[#3A3A3A] sm:text-2xl">
                Resource Management
              </h1>
            </div>
            <div className="flex items-center gap-3 mt-4 sm:m-4">
              <input
                type="text"
                placeholder="Search resources"
                className="placeholder:italic placeholder:text-slate-400 border rounded-md w-[423px] focus:outline-none text-base h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] "
              />
              <img
                src={filtersearch}
                alt="filter"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>

          <div className="mt-4 lg:mt-2">
            <p className="text-xl mb-1">Statistics</p>
            <p className=" text-[#71717A] lg:mb-8 text-[12px] md:text-sm">
              See Metrics
            </p>

            <div className="flex w-[100%] justify-start flex-wrap gap-4 rounded-sm">
              {statistics.map((opt, i) => (
                <div
                  key={i}
                  className=" px-3 pt-5 pb-6 rounded-lg w-[25rem] shadow-md lg:w-[40%] lg:mr-3 "
                >
                  <p className=" pt-3 pb-6 px-2 flex items-center justify-start text-xl text-[#71717A] w-auto">
                    {opt.name}{" "}
                    <span
                      className={`${opt.style} text-2xl p-2 rounded-full ml-3 mt-[-2px]`}
                    >
                      {opt.icon}
                    </span>{" "}
                  </p>
                  <div className="flex justify-start items-end w-full">
                    <p className="p-2 mr-6 text-xl">
                      <span className="font-bold text-3xl">{data ? data.length : 0}</span>{" "}
                      {opt.amtlabel}{" "}
                    </p>
                    <p className=" p-2 text-[#35BA83] flex gap-4 items-center">
                      <span className="text-xl ">{opt.icon2}</span> {opt.tracks}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 ml-4 mb-26">
            <Button name={"Add new file"} handleClick={(e) => openModal(e)} />
          </div>
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            setIsModalOpen={setIsModalOpen}
          >
            <AddFile closeModal={closeModal} />
          </Modal>

          <div className="mt-16">
            <div className=" flex justify-between">
              <div>
                <h2 className=" text-xl font-semibold pt-4">Recent Jobs</h2>
                <p className=" text-lg text-[#747272] mb-1">
                  See list of resent jobs posted
                </p>
              </div>
              <button className="float-right border py-2 px-8 my-[20px] rounded flex justify-between shadow-sm">
                See all
              </button>
            </div>
            <div className="flex overflow-x-auto">
              {data ? (<Table data={data} />) : ''}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceMng;
