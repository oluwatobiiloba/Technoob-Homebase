import React from "react";

const LinkUpload = ({ onClose }) => {
  return (
    <div className="w-[80%] flex  justify-start my-10 p-4 items-center gap-6 flex-col h-[435px] rounded-md">
      <div className="w-full flex flex-col gap-5  lg:mx-2">
        <h1 className="text-xl font-bold">Add Document Link</h1>
        <span className="text-sm text-gray-300">Add link details</span>
      </div>

      <form className="flex flex-col gap-4 w-full">
        <div className="">
          <label htmlFor="Name" className="text-black text-base">
            File Description{" "}
            <span className="ml-5 text-sm text-slate-300">Optional</span>
          </label>{" "}
          <br />
          <textarea
            name="Desc"
            rows={4}
            className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-1 w-full rounded-md"
            placeholder="-- text here --"
          />
        </div>
        <div className="w-full">
          <label htmlFor="Name" className="">
            File Name
          </label>{" "}
          <br />
          <input
            type="text"
            name="Name"
            className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-2 w-full rounded-md"
            placeholder="-- Enter --"
          />
        </div>
        <div className="flex w-full justify-start items-start gap-3">
          <button className="flex justify-center items-center text-sm md:text-lg  md:font-semibold w-[310px] h-[54px] rounded-md bg-tblue text-white mb-4">
            Publish Document
          </button>
          <button
            onClick={onClose}
            className="flex justify-center items-center text-sm md:text-lg font-semibold w-[150px] h-[54px] rounded-md bg-[#EFF0F5] mb-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkUpload;
