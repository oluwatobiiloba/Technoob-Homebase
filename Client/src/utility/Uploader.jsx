import React, {  useState } from 'react';
import {storage} from "../data/assets";
import uploadFile from "./serverUploadFile";

function FileUploadSingle({name,setlink,type}) {
    const [file, setFile] = useState();

    const handleFileChange = async (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }

        try{
            const response = await uploadFile(file,type)
            if (response.status === 201) {
                setlink(response)
            }
        }catch(err){
            console.log(err)
        }


    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }
    };

    return (
        <div>
            <label htmlFor="Name" className="text-black text-base">
                {name}{" "}
                {/*<span className="ml-5 text-sm text-slate-300">Optional</span>*/}
            </label>
            <div class="border-2 border-dashed border-[#DAE8F6] w-full h-[278px] flex flex-col justify-center items-center hover:bg-gray-200 hover:border-gray-300 rounded-lg mb-10 mt-0 ">
                <div className="flex flex-col w-full h-full items-center justify-center  pt-5 pb-6">
                    <img src={storage} alt="upload" className="w-16 mb-3" />
                    <p className="mb-1 text-base  ">Drag and Drop files here</p>
                    <p className="text-lg">OR</p>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <label
                        htmlFor="file"
                        className="flex justify-center items-center text-lg font-semibold w-[190px] h-[44px] rounded-md bg-[#EFF0F5] text-[#114ff5] mb-4"
                    >
                        Browse Files
                    </label>
                    <div className="text-center text-[#7A90A7] text-sm">
                        <p>*supported file type: pdf, doc, xlsx, csv, ppt and png or jpg.
                            <br />
                            Please select a file smaller than 10MB.
                        </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />

                    {/*<div>{file && `${file.name} - ${file.type}`}</div>*/}

                    <button onClick={handleUploadClick}>Upload</button>
                </div>
            </div>
        </div>
    );
}

export default FileUploadSingle;