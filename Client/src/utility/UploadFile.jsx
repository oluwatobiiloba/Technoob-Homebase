import React, { useState } from "react";

import { storage } from "../data/assets";
import FileUploadSingle from "./Uploader";

const UploadFile = ({ closeModal }) => {
  // const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [placeholderImage, setplaceholderImage] = useState(null);
  const [formInput, setFormInput] = useState(
      {
        name:"",
        version: "",
        stack:"" ,
        description:"",
        type:"",
        file:"",
        image_placeholder:"",
        url:"",
      }
  );

  const onFileDrop = (files) => {
    console.log(files)
    setUploadedFile(files.name);
    console.log(files)
    //setImage(URL.createObjectURL(files));
    console.log(uploadedFile);
  };

  console.log(uploadedFile);

  const onPlaceHolderDrop = (images) => {
    setplaceholderImage(images.name)
    //setImage(URL.createObjectURL(files));
    console.log(placeholderImage);
  };

  console.log(placeholderImage);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePublish = () => {

  }

  console.log(uploadedFile)
    // async function handleChange(e) {
    //   e.preventDefault();
    //   setImgLoader(true);
    //   const file = e.target.files[0];
    //   console.log("line0", e.target);
    //   console.log("line1", file);
    //   const formData = new FormData();
    //   formData.append("avatar", file);
  
    //   await axios
    //     .post(`https://caroapp-2sc7.onrender.com/api/product/upload/`, formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((result) => {
    //       console.log("Post request, results", result);
    //       setImgUrl(result.data);
    //       setImgLoader(false);
    //     })
    //     .catch((error) => {
    //       console.log("Errors", error);
    //       setImgLoader(false);
    //     });
    // }

  return (
    <div className="flex justify-center items-center w-full pt-10">
      <div className="w-[80%] h-[653px] bg-white rounded-md">
        <div className="border-b-2 p-2 lg:mx-2">
          <h1 className="text-xl font-bold">Upload Document</h1>
        </div>

        <form className="lg:mx-5 mt-7 w-full">
          <div className="flex gap-3 w-full mb-5">
            <div className="w-full">
              <label htmlFor="Name" className="">
                File Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-2 w-full rounded-md"
                value={formInput.company}
                onChange={handleChange}
                placeholder="Enter Resource Name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="Name">Tech Stack</label>
              <select
                  id="stack"
                  name="stack"
                  className="placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC]  p-3 w-full rounded-md mt-2 "
                  placeholder="select"
                  value={formInput.stack}
                  onChange={handleChange}
                >
                <option value="Software Development ">Software Development</option>
                <option value="Product Design">Product Design</option>
                <option value="Product Management">Product Management</option>
                <option value="Data Science">Data Science</option>
                <option value="Cloud Engineering">Cloud Engineering</option>
                <option value="Data Engineering">Data Engineering</option>
                <option value="Project Management">Project Management</option>
              </select>
            </div>
          </div>
         <FileUploadSingle name={"Resource File"} setlink={setUploadedFile} type={"image"}></FileUploadSingle>
          <FileUploadSingle name={"Resource Image"} setlink={setplaceholderImage} type={"file"}></FileUploadSingle>
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
                        src={placeholderImage}
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
            <button onClick={handlePublish} className="flex justify-center items-center text-sm md:text-lg  md:font-semibold w-[310px] h-[54px] rounded-md bg-tblue text-white mb-4">
              Publish Document
            </button>
            <button
              onClick={closeModal}
              className="flex justify-center items-center text-sm md:text-lg font-semibold w-[150px] h-[54px] rounded-md bg-[#EFF0F5] mb-4"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadFile;
