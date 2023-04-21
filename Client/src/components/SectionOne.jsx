import React from 'react'
import img1 from '../img/Annotation 2023-04-15 211703.jpg'

const SectionOne = () => {
  return (
    <section className=' flex xl:flex-row flex-col-reverse flex-1 md:px-20 md:py-20 space-x-1 justify-center px-5 xl:text-left text-center'>
        <div className=' md:mt-28 md:w-[50%]'>
            <h2 className=' md:font-bold md:text-6xl font-bold text-[42px] lg:h-[24px] md:my-10'><span className=' text-tblue'>Our </span> <span className=' text-tgreen'>Culture</span> </h2>
            <p className=' md:text-xl text-sm'>Our culture is built around our love of technology. We are a group <br /> of passionate tech enthusiasts who are committed to sharing our knowledge <br /> and expertise with ourselves and the general public. <br /><br /> We value accuracy, integrity, and passion, and we believe that these values are reflected in the content that we produce.</p>
            <button className='my-6 bg-tblue text-twhite py-[14px] lg:w-[201px] w-[90vw] rounded'>Join the community</button>
        </div>
        <div className=' md:mt-10'>
          <img src={img1} alt={"img1"} className=' w-[636px] h-[650] pr-[-10rem]'/>
        </div>
    </section>
  )
}

export default SectionOne