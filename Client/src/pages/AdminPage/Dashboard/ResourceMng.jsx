import React, { useState } from "react";
import { filtersearch } from "../../../data/assets";
import { MdOutlineNoteAdd, MdPermIdentity } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
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
      name: "Jobs posted",
      amount: 45,
      amtlabel: "Jobs",
      tracks: "360 views",
      icon: <MdOutlineNoteAdd />,
      icon2: <AiOutlineEye />,
      style: "bg-green-100 text-tgreen",
    },
    {
      name: "Applicants",
      amount: 120,
      amtlabel: "Applicants",
      tracks: "80 Qualifies",
      icon: <MdPermIdentity />,
      style: "text-[#D4C433] bg-yellow-100",
    },
  ];

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
                  <p className=" pt-3 pb-6 px-2 flex text-xl text-[#71717A] w-auto">
                    {opt.name}{" "}
                    <span
                      className={`${opt.style} p-2 rounded-full ml-3 mt-[-2px]`}
                    >
                      {opt.icon}
                    </span>{" "}
                  </p>
                  <div className="flex justify-start items-end w-full">
                    <p className="p-2 mr-6 text-xl">
                      <span className="font-bold text-3xl">{opt.amount}</span>{" "}
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
            onClose={closeModal}
            setIsModalOpen={setIsModalOpen}
          >
            <AddFile onClose={onclose} />
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
              <Table />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceMng;
