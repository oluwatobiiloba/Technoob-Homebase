import React, { useState } from "react";
import UploadFile from "../utility/UploadFile";
import LinkUpload from "../utility/LinkUpload";

const AddFile = ({ closeModal }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <div className="flex justify-center items-center pt-10">
        <div className="w-full overflow-y-auto flex flex-col justify-start items-center h-auto max-h-[40rem] bg-white rounded-md ">
          <div className="flex flex-col justify-center items-center w-[70%] h-[10rem]">
            <h1 className="text-lg md:text-2xl mb-12 font-bold">
              What type of file do you want to add?
            </h1>
            <div className="flex justify-center items-center gap-6">
              <span
                onClick={() => setToggle("Document")}
                className="bg-tblue px-10 py-3 text-lg cursor-pointer rounded-md text-[#fff]"
              >
                Document
              </span>
              <span
                onClick={() => setToggle("Link")}
                className="bg-[#EFF0F5]  px-16 cursor-pointer py-3 text-lg rounded-md text-[#000]"
              >
                Link
              </span>
            </div>
          </div>
          <div
            className={`w-full items-center flex justify-center ${
              !toggle && "hidden"
            }`}
          >
            {toggle === "Document" ? (
              <UploadFile closeModal={closeModal}/>
            ) : (
              <LinkUpload closeModal={closeModal} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFile;
