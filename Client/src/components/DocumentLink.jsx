import React from 'react'
import Button from '../utility/button'

const DocumentLink = () => {
  return (
    <div>
        <div className='flex flex-col h-[80%] w-[80%] bg-white'>
            <div className='flex flex-col gap-8 '>
                <h1>Add Document Link</h1>

                <span>Add link details</span>
            </div>
            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="textarea" className='text-xl'>File Description  <span className='text-sm ml-6 text-slate-400'>Optional</span></label> 
                    <textarea name="text" id="text" cols="30" rows="10" placeholder='~~text here~~' className='text-xl placeholder:text-gray-400 text-slate-500 '></textarea>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="documentLink">Add Document link</label>
                    <input type="text" id='documentLink' className='text-xl placeholder:text-gray-400 text-slate-500 px-2 py-3' />
                </div>

                <div>
                    <Button name={'Publish Link'}/>
                    <Button name={'Cancel'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DocumentLink