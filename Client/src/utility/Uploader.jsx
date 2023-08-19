import React, {useRef, useState} from 'react';
import {storage} from "../data/assets";
import uploadFile from "./serverUploadFile";

function FileUploadSingle({name, setlink, type, setUploading, setFileInfo, setImageInfo, setUploadingImage}) {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);

    const handleFileChange = async (e) => {
        if (e.target.files) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setFileName(selectedFile.name);

            // Upload the file here
            try {


                if (type === 'file') setUploading(true);
                if (type === 'image') setUploadingImage(true);
                if (type === 'image' && type !== selectedFile.type.split("/")[0]) throw new Error(`Invalid file type, placeholder should be an image`)
                if (type === 'file' && selectedFile.type.split("/")[0] === "image") throw new Error(`Invalid file type, resource cannot be an image`)
                const response = await uploadFile(selectedFile, type);
                if (response.status === "success") {
                    const bloblink = response.data.url;
                    setlink(bloblink);
                    if (type === 'file') {
                        setUploading(false)
                        setFileInfo({
                            name: selectedFile.name,
                            size: selectedFile.size,
                            type: selectedFile.type
                        })
                    }
                    ;
                    if (type === 'image') {
                        setUploadingImage(false)
                        setImageInfo({
                            name: selectedFile.name,
                            size: selectedFile.size,
                            type: selectedFile.type
                        })
                    }
                    ;

                }
            } catch (err) {
                if (type === 'file') setUploading(false);
                if (type === 'image') setUploadingImage(false);
                alert(err.message)
            }
        }
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleDivClick = () => {
        setFile(null);
        setFileName("");
    };

    return (
        <div>
            {name && (
                <label className="text-black text-base mb-2">
                    {name}
                </label>
            )}
            <div
                className={`w-full ${file ? 'h-[100px]' : 'h-[278px]'} flex items-center justify-center border-2 border-dashed border-[#DAE8F6] rounded-lg mb-10 mt-0 cursor-pointer`}
                onClick={handleDivClick}>

                {!file && (
                    <div className="flex flex-col items-center justify-center">
                    <img src={storage} alt="upload" className="w-16 mb-3" />
                        <p className="mb-1 text-base">Drag and Drop files here</p>
                    <p className="text-lg">OR</p>
                        <label htmlFor="file"
                               className="flex justify-center items-center text-lg font-semibold w-[190px] h-[44px] rounded-md bg-[#EFF0F5] text-[#114ff5] cursor-pointer"
                               onClick={handleUploadClick}>
                            Browse Files
                        </label>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf, .doc, .docx, .xlsx, .csv, .ppt, .png, .jpg, .jpeg"
                        className="hidden"
                    />
                    </div>
                )}
                {file && (
                    <div className="text-center text-[#7A90A7] text-sm">
                        <p>Selected File: {fileName}</p>
                </div>
                )}
            </div>
        </div>

    );
}

export default FileUploadSingle;
