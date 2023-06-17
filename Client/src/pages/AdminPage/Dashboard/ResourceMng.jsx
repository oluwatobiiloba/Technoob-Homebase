import React from 'react'
import { filtersearch, storage_icon, acheive_icon } from '../../../data/assets'
import UploadFile from '../../../utility/UploadFile'
import AdminCard from '../../../utility/AdminCard'

const ResourceMng = () => {

  // const [fileType, setfileType] = useState('')

  // const handleChange = (e) => {
  //   setfileType(e.target.value)
  //   console.log(e.target.value)
  // }

  return (
    
    <section className='relative w-full'>
      <div className='flex justify-between sm:pl-5 pl-1'>
        <div className='flex flex-col sm:flex-row py-1 sm:py-10 justify-start sm:justify-center items-start sm:items-center '>
          <h1 className='md:text-4xl text-2xl mr-2'>Hey, Esther -</h1>
          <p className='md:pt-2 pt-1 text-sm sm:text-xl text-[#3A3A3A66] sm:text-black'>Welcome your resource page.</p>
        </div>
        
      </div>
      <div className=' lg:mx-4 p-5 md:rounded-md bg-white xl:shadow-md w-full'>
        <div className='w-full'>
          <div className='flex flex-col sm:flex-row justify-start sm:justify-between w-full'>
            <div>
              <h1 className='text-xl font-bold sm:font-normal sm:ml-5 lg:py-4 sm:text-[#3A3A3A] sm:text-4xl'>Resource Management</h1>
            </div>
            <div className='flex items-center gap-3 mt-4 sm:m-4'>
              <input 
                type="text"
                placeholder='Search resources'
                className='placeholder:italic placeholder:text-slate-400 border rounded-md w-[423px] focus:outline-none text-base h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] ' 
                />
              <img src={filtersearch} alt="filter" className='w-[24px] h-[24px]'/>
            </div>
          </div>

          <div className='mt-10'>
            <p className='text-xl sm:text-2xl text-[#3a3a3a]'>Statistics</p>
            <p className='text-sm sm:text-base text-[#3a3a3a] opacity-50  '>See Metrics</p>

            <div className='flex w-[89%] justify-center flex-wrap mt-3 p-3 gap-7 bg-slate-50 rounded-sm'>
              <AdminCard name={'File Uploaded'} Amount={45} fileType={'Files'} icon={storage_icon}/>
              <AdminCard name={'File Downloaded'} Amount={120} fileType={'Downloads'} icon={acheive_icon}/>
            </div>

            <div className='mt-12 w-full flex'>
              <div className='flex flex-col sm:flex-row sm:justify-between w-full sm:mx-8'>
                <div>
                  <div className='sm:mb-3 gap-3 flex items-center'> 
                    <p>Add new file </p><div className='rounded-full cursor-pointer flex items-center text-xs justify-center h-4 w-4 border p-1 border-black'>i</div>
                  </div>
                  <div className='flex gap-2 mt-2' onChange={''}>
                    <input type="radio" value='Link' name='Link'/>Link
                    <input className='ml-16' type="radio" value='Document' name='Document'/>Document
                  </div>
                </div>

                <button
                  className='border border-tblue text-tblue py-2 sm:px-8 rounded-md mt-6 sm:m-1 w-[327px] h-[54px] sm:h-[54px] sm:w-[287px]'
                  >Add Document
                </button>
              </div>
            </div>

            <div className='hidden absolute'>
              <UploadFile/>
            </div>

            <div className='mt-16 flex flex-col'>
                <div className='flex items-end'>
                  <p className='text-xl mr-2'>File Description</p>
                  <p className='opacity-40 text-sm'>Optional</p>
                </div>
                <div>
                  <textarea 
                    type="text" 
                    placeholder='~~text here~~' 
                    className='w-[310px] sm:w-[695px] h-[235px] border p-3 rounded-md mr-16 overflow-auto max-h-[200px]' />
                  <button
                    className='bg-tblue text-white py-2 px-8 rounded-md w-[327px] h-[54px] sm:h-[54px] sm:w-[287px]'
                    >Publish Reasource</button>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ResourceMng;