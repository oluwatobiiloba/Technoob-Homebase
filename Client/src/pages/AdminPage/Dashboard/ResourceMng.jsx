import React,{useState} from 'react'
import { filtersearch } from '../../../data/assets'
import UploadFile from '../../../utility/UploadFile'

const ResourceMng = () => {

  const [fileType, setfileType] = useState('')

  const handleChange = (e) => {
    setfileType(e.target.value)
    console.log(e.target.value)
  }

  return (
    
    <section className='relative w-full'>
      <div className='flex justify-between pl-5'>
        <div className='flex flex-col sm:flex-row py-1 sm:py-10 justify-start sm:justify-center items-start'>
          <h1 className='md:text-4xl text-2xl mr-2'>Hey, Esther -</h1>
          <p className='md:pt-2 pt-1 text-xs text-[#3A3A3A66] sm:text-black'>Welcome your resource page.</p>
        </div>
        

      </div>
      <div className=' lg:mx-4 p-5 rounded-md bg-white shadow-md w-full '>
        <div className='w-full '>
          <div className='flex flex-col sm:flex-row justify-between w-full'>
            <div>
              <h1 className='text-2xl lg:py-4  font-bold text-[#3A3A3A80] sm:normal'>Resource Management</h1>
            </div>
            <div className='flex items-center gap-3 m-4'>
              <input 
                type="text"
                placeholder='Search resources'
                className='placeholder:italic placeholder:text-slate-400 border rounded-md w-[423px] focus:outline-none text-base h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] ' 
                />
              <img src={filtersearch} alt="filter" className='w-[24px] h-[24px]'/>
            </div>
          </div>

          <div className='mt-16'>
            <p className='text-2xl text-[#3a3a3a] '>Statistics</p>
            <p className='text-base text-[#3a3a3a] opacity-50 '>See Metrics</p>

            <div className='flex mt-3 p-3 gap-3 bg-slate-50 rounded-sm'>
              <div className='bg-white w-[444px] h-[209px] p-8 rounded-md'>
                <div className='pb-10'>
                  <p className='text-2xl mr-5 text-[#71717a]'>Files Uploaded</p>
                </div>

                <p className='text-4xl text-[#3a3a3a]'>45<span className='text-xl opacity-50 ml-2'>Files</span></p>
              </div>
            </div>

            <div className='mt-10 w-full flex'>
              <div className='flex flex-col sm:flex-row sm:justify-between w-full mx-8'>
                <div>
                  <div className='mb-3'> 
                    <p>Add new file</p>
                  </div>
                  <div className='flex gap-2' onChange={handleChange}>
                    <input type="radio" value='Link' name='Link' />Link
                    <input className='ml-16' type="radio" value='Document' name='Document' />Document
                  </div>


                </div>

                <button
                  className='border border-tblue text-tblue py-2 px-8 rounded-md sm:h-[54px] sm:w-[287px]'
                  >Add Document
                </button>
              </div>
            </div>

            <div className='hidden absolute'>

            <UploadFile/>
            </div>

            <div className='mt-16'>
                <div className='flex items-end'>
                  <p className='text-xl mr-2'>File Description</p>
                  <p className='opacity-40 text-sm'>Optional</p>
                </div>
                <div>
                  <textarea type="text" placeholder='~~text here~~' className='w-[310px] sm:w-[695px] h-[235px] border p-3 rounded-md mr-16 overflow-auto max-h-[200px]' />
                  <button
                    className='bg-tblue text-white py-2 px-8 rounded-md sm:h-[54px] sm:w-[287px]'
                    >Publish Reasource</button>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ResourceMng