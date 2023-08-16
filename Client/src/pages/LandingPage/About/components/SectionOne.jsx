import React from 'react'
import img1 from '../img/Annotation 2023-04-15 211703.jpg'

const SectionOne = () => {
  return (
    <section className='nun  flex xl:flex-row my-20 flex-col-reverse flex-1 mt-5 md:px-20 md:py-20  space-x-1 justify-center mb-4 px-5 xl:text-left sm:gap-4 text-center'>
        <div className='md:mt-10 w-full mr-4 lg:w-[50%] flex flex-col justify-center items-center md:justify-center md:items-start'>
            <h2 className=' font-bold md:font-extrabold  lg:text-[58px] text-[38px]'><span className=' text-tblue'>Our </span> <span className=' text-tgreen'>Culture</span> </h2>
            <p className=' md:text-xl w-[316px] lg:w-[691px] md:mb-4 text-xs text-tblackk'>Our culture is built around our love of technology. We are a group of passionate tech enthusiasts who are committed to sharing our knowledge <br  className='hidden md:block'/> and expertise with ourselves and the general public. <br  className='hidden md:block' /><br  className='hidden md:block'/> We value accuracy, integrity, and passion, and we believe that these values are reflected in the content that we produce.</p>
            <button className='my-2 md:my-6 mb-12 md:mb-0 bg-tblue text-twhite py-[14px] lg:w-[201px] md:w-[80vw] w-[90vw] rounded'>Join the community</button>
        </div>
        <div className=' md:mt-10'>
          <img src={img1} alt={"img1"} className=' w-[636px] h-[650] pr-[-10rem]'/>
        </div>
    </section>
  )
}

export default SectionOne