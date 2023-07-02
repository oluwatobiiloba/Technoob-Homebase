import {useState} from 'react';

import { storage } from '../data/assets';

const UploadFile = () => {

    // const [file, setFile] = useState(null);
    const [uploadedFile, setUploadedFile] = useState();
    const [image, setImage] = useState()

    const onFileDrop = (files) => {
        console.log(files[0])
        setUploadedFile(files[0])
        setImage(URL.createObjectURL(files[0]))
    }
  return (
    <div>
        <div className='w-[526px] h-[993px] bg-white rounded-md'>
            <div className='border-b-2 p-2 mx-2'>
            <h1>Upload File</h1>
            </div>
            
            <form className='mx-5 mt-7'>
                <label htmlFor="Name">File Name</label> <br />
                <input type="text" name='Name' 
                className='placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC] p-3 w-full rounded-md mt-2 mb-4' 
                placeholder='-- Enter --'/> <br />
                <label htmlFor="Name">Tech Stack</label>
                <select type="text" name='Name'
                className='placeholder:italic border border-[#DAE8F6] bg-[#F9FAFC]  p-3 w-full rounded-md mt-2 ' 
                placeholder='select'><option value="date">Select a date</option></select>

            <div className='border-2 border-dashed border-[#DAE8F6] w-[486px] h-[278px] flex flex-col justify-start items-center  mt-12 hover:bg-gray-200 hover:border-gray-300 rounded-lg'>
                
                <div className="flex flex-col items-center justify-start w-full h-full rounded-md cursor-pointer bg-gray-50  ">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-start w-full h-full rounded-lg cursor-pointer bg-gray-50  ">
                        <div className="flex flex-col w-full h-full items-center justify-start pt-5 pb-6">
                            <img src={storage} alt="upload" className='w-16 mb-3'/>
                            <p className="mb-1 text-base  ">Drag and Drop files here</p>
                            <p className="text-lg">OR</p>
                            <input type="file"  id='file' onChange={({target: {files}}) => onFileDrop(files) }className='hidden'/>
                            <label htmlFor="file"  className='flex justify-center items-center text-lg font-semibold w-[190px] h-[44px] rounded-md bg-[#EFF0F5] text-[#114ff5] mb-4'>Browse Files</label>

                            <div className='text-center text-[#7A90A7] text-sm'>
                                <p>*supported file type: pdf, doc, xlsx, csv, ppt and png or jpg. 
                                <br />
                                Please select a file smaller than 10MB.
                                </p>
                            </div>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>

                    
                    </div>
                </div> 

                    

                <div className='mt-5 min-h-[400px]'>
                    <div className='border-t-2 border-gray-200 mb-3'/>
                    <h1 className='text-[#7A90A7] text-xs '>Uploading</h1>

                    <div className='w-full'>
                        <div className='text-center text-xs'>
                            {uploadedFile ? 
                            (<p>Uploads in Progress...</p>) : 
                            
                            (<p>No Uploads in Progress</p>)}
                        </div>
                    {uploadedFile && 
                    
                        <div className='border-t-2 border-gray-200 mb-3 pt-3'>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    
                                    <img src={image} alt="uploaded_img" className='w-8 h-8 object-contain mr-2' />

                                    <div>
                                        <h1 className='truncate w-[190px]'>{uploadedFile.name}</h1>
                                        {uploadedFile.name &&
                                        (<p className='text-sm text-green-500 flex '>Upload successfull <li className='text-[#7A90A7] ml-2'> {uploadedFile.size}kb</li></p>)}
                                    </div>

                                </div>
                                
                                <div>
                                    
                                </div>

                                <div>

                                </div>
                            </div>
                        </div>}
                    </div>

                   


                </div>
                <div className='flex w-full justify-center items-center gap-2'>
                    <button className='flex justify-center items-center text-lg font-semibold w-[310px] h-[54px] rounded-md bg-tblue text-white mb-4'>Save</button>
                    <button className='flex justify-center items-center text-lg font-semibold w-[150px] h-[54px] rounded-md bg-[#EFF0F5] mb-4'>Cancel</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default UploadFile
