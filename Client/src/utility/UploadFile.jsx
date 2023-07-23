import { useState } from "react";

import { storage } from "../data/assets";

const UploadFile = ({onClose}) => {
  // const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState();
  const [image, setImage] = useState();

  const onFileDrop = (files) => {
    console.log(files[0]);
    setUploadedFile(files[0]);
    setImage(URL.createObjectURL(files[0]));
  };


  return (
    <div className="flex justify-center items-center w-full pt-10">
      <div className="w-[80%] h-[653px] bg-white rounded-md">
        <div className="border-b-2 p-2 lg:mx-2">
          <h1 className="text-xl font-bold">Upload Document</h1>
        </div>

        <form className="lg:mx-5 mt-7 w-full">
            <div className="flex gap-3 w-full mb-5">
                <div className="w-full">
                    <label htmlFor="Name" className="">File Name</label> <br />
                    <input
                        type="text"
                        name="Name"
                        className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-2 w-full rounded-md"
                        placeholder="-- Enter --"
                    />

                </div>
                <div className="w-full">
                    <label htmlFor="Name">Tech Stack</label>
                    <select
                        type="text"
                        name="Name"
                        className="placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC]  p-3 w-full rounded-md mt-2 "
                        placeholder="select"
                    >
                    <option value="date">Select a date</option>
                    </select>

                </div>
                

            </div>
            <div className="">
                 <label htmlFor="Name" className="text-black text-base">File Description <span className="ml-5 text-sm text-slate-300">Optional</span></label> <br />
                    <textarea
                        name="Desc"
                        rows={4}
                        
                        className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-1 w-full rounded-md"
                        placeholder="-- text here --"
                    />
            </div>
          <div className="border-2 border-dashed border-[#DAE8F6] w-full h-[278px] flex flex-col justify-center items-center mt-6 lg:mt-12 hover:bg-gray-200 hover:border-gray-300 rounded-lg">
            <div className="flex flex-col items-center justify-center w-full h-full rounded-md cursor-pointer bg-gray-50  ">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-start w-full h-full rounded-lg cursor-pointer bg-gray-50  "
              >
                <div className="flex flex-col w-full h-full items-center justify-center  pt-5 pb-6">
                  <img src={storage} alt="upload" className="w-16 mb-3" />
                  <p className="mb-1 text-base  ">Drag and Drop files here</p>
                  <p className="text-lg">OR</p>
                  <input
                    type="file"
                    id="file"
                    onChange={({ target: { files } }) => onFileDrop(files)}
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="flex justify-center items-center text-lg font-semibold w-[190px] h-[44px] rounded-md bg-[#EFF0F5] text-[#114ff5] mb-4"
                  >
                    Browse Files
                  </label>

                  <div className="text-center text-[#7A90A7] text-sm">
                    <p>
                      *supported file type: pdf, doc, xlsx, csv, ppt and png or
                      jpg.
                      <br />
                      Please select a file smaller than 10MB.
                    </p>
                  </div>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="mt-5 min-h-[150px]">
            <div className="border-t-2 border-gray-200 mb-3" />
            <h1 className="text-[#7A90A7] text-xs ">Uploading</h1>

            <div className="w-full">
              <div className="text-center text-xs">
                {uploadedFile ? (
                  <p>Uploads in Progress...</p>
                ) : (
                  <p>No Uploads in Progress</p>
                )}
              </div>
              {uploadedFile && (
                <div className="border-t-2 border-gray-200 mb-3 pt-3">
                  <div className="flex h-16">
                    <div className="flex items-start">

                        <img
                            src={image}
                            alt="_img"
                            className="w-13 h-full object-contain mr-3 p-1"
                        />
                      <div>
                        <h1 className="truncate text-xs md:text-base w-[190px]">
                          {uploadedFile.name}
                        </h1>
                        {uploadedFile.name && (
                          <p className="text-sm text-green-500 flex flex-col-reverse md:flex-row ">
                            Upload successfull{" "}
                            <li className="text-[#7A90A7] ml-2">
                              {" "}
                              {uploadedFile.size}kb
                            </li>
                          </p>
                        )}
                      </div>
                    </div>

                    <div></div>

                    <div></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full justify-start items-start gap-3">
            <button className="flex justify-center items-center text-sm md:text-lg  md:font-semibold w-[310px] h-[54px] rounded-md bg-tblue text-white mb-4">
              Publish Document
            </button>
            <button onClick={onClose} className="flex justify-center items-center text-sm md:text-lg font-semibold w-[150px] h-[54px] rounded-md bg-[#EFF0F5] mb-4">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadFile;
