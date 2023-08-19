import React, {useState} from "react";
import LoaderIcon from "react-loader-icon";

import FileUploadSingle from "./Uploader";
import serverApi from "./server";

const UploadFile = ({ closeModal }) => {
  // const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [placeholderImage, setplaceholderImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [fileInfo, setFileInfo] = useState({});
    const [imageInfo, setImageInfo] = useState({});
  const [formInput, setFormInput] = useState(
      {
        name:"",
        version: "",
        stack:"" ,
        description:"",
        type:"",
          file: ""
      }
  );


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

    const handlePublish = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...formInput,
                image_placeholder: placeholderImage,
                url: uploadedFile
            }

            const abortController = new AbortController();
            setUploading(true);
            const response = await serverApi.post(
                "/resources/create",
                payload,
                {
                    signal: abortController.signal,
                    headers: {
                        'content-type': 'application/json',
                    }
                }
            )

            if (response.status === 200 || 201) {
                let message = response.data.message

                setFormInput({
                    name: "",
                    version: "",
                    stack: "",
                    description: "",
                    type: "",
                    file: ""
                });
                setUploadedFile(null);
                setplaceholderImage(null);
                setUploading(false);
                setUploadingImage(null);
                setFileInfo(null);
                setImageInfo(null);
                closeModal()
                alert(message)
            } else {
                alert("Resource upload failed")
            }
            return
        } catch (e) {
            alert(e.message)
        }
    }


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
                  Resource Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-2 w-full rounded-md"
                value={formInput.name}
                onChange={handleChange}
                placeholder="Enter Resource Name"
              />
            </div>

              <div className="w-full">
                  <label htmlFor="Name" className="">
                      Version
                  </label>{" "}
                  <br/>
                  <input
                      type="text"
                      name="version"
                      className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-2 w-full rounded-md"
                      value={formInput.version}
                      onChange={handleChange}
                      placeholder="Enter the version "
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
                  <option>Select a stack</option>
                  <option value="Software Development">Software Development</option>
                <option value="Product Design">Product Design</option>
                <option value="Product Management">Product Management</option>
                <option value="Data Science">Data Science</option>
                <option value="Cloud Engineering">Cloud Engineering</option>
                <option value="Data Engineering">Data Engineering</option>
                <option value="Project Management">Project Management</option>
              </select>
            </div>
              <div className="w-full">
                  <label htmlFor="Name">Type</label>
                  <select
                      id="type"
                      name="type"
                      className="placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC]  p-3 w-full rounded-md mt-2 "
                      placeholder="select"
                      value={formInput.type}
                      onChange={handleChange}
                  >
                      <option>Select a type</option>
                      <option value="api" defaultValue={"api"}>API</option>
                      <option value="design">Design</option>
                      <option value="props">Props</option>
                      <option value="database">Databases</option>
                      <option value="storage">Storage</option>
                      <option value="e-book">E-book/PDF</option>
                      <option value="video">Video</option>
                      <option value="documentation">Documentation</option>
                      <option value="audio">Audio</option>
                      <option value="projects">Projects</option>
                      <option value="other">Others</option>
                      <option value="blog">Blog</option>
                      <option value="repo">Repository</option>
              </select>
            </div>
          </div>
            <FileUploadSingle name={"Resource File"} setlink={setUploadedFile} type={"file"} setUploading={setUploading}
                              setFileInfo={setFileInfo}></FileUploadSingle>
            <FileUploadSingle name={"Resource Image"} setlink={setplaceholderImage} type={"image"}
                              setUploadingImage={setUploadingImage} setImageInfo={setImageInfo}></FileUploadSingle>
            <div className="w-full">
                <label htmlFor="Name" className="">
                    Description
                </label>{" "}
                <br/>
                <input
                    type="text"
                    name="description"
                    className=" placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 mt-2 w-full rounded-md"
                    value={formInput.description}
                    onChange={handleChange}
                    placeholder="Enter Resource Name"
                />
            </div>

            <div className="mt-5 min-h-[150px]">

                <div className="w-full border-t-2 border-gray-200 mb-3">
              <div className="text-center text-xs">
                  {uploading ? (
                      <LoaderIcon type={"spinningBubbles"}/>
                ) : (
                      <p></p>
                )}
              </div>
                    {placeholderImage && uploadedFile && (
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
                                            {fileInfo.name}
                                        </h1>
                                        {fileInfo.name && (
                                            <p className="text-sm text-green-500 flex flex-col-reverse md:flex-row ">
                                                Upload successful ✅{" "}
                                                <li className="text-[#7A90A7] ml-2">
                                                    {" "}
                                                    {fileInfo.size / 1000}kb
                                                </li>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
          </div>
          <div className="flex w-full justify-start items-start gap-3">
              {
                  placeholderImage && uploadedFile && (<button onClick={handlePublish}
                                                               className="flex justify-center items-center text-sm md:text-lg  md:font-semibold w-[310px] h-[54px] rounded-md bg-tblue text-white mb-4">
              Publish Document
                  </button>)
              }
            
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
