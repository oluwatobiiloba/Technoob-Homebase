import img from '../img/Frame 182.png'

const SectionTwo = () => {
  return (
    <section className='nun xl:flex xl:flex-1 md:px-20 md:py-20 space-x-1 justify-center px-5 xl:text-left text-center'>
        <div>
            <img src={img} alt="" className=' w-[576.92px] h-[600] pl-[-10rem]'/>
        </div>
        <div className="xl:text-left text-center lg:w-[50%] lg:px-20 py-10 lg:mt-[-80px] ">
            <h1 className='font-bold lg:text-6xl text-[38px] py-5 lg:h-[24px] lg:my-20 md:my-10'><span className=' text-tgreen'>Our</span><span className=' text-tblue'> Commitment</span> </h1>
            <p className='text-sm md:text-xl md:pt-[30px]'>
            We are committed to offer tools and support to make the transition into the tech industry seamless for every tech newbie because we recognize that it can be daunting  to start out in this field. Our promise to you would be to provide thorough and simple-to-understand resources , offer individualized support, foster a warm and inclusive community, and consistently update content to guarantee that everyone has access to the most recent information.
            </p>
            <button className='my-6 bg-tblue text-twhite py-[14px] lg:w-[201px] md:w-[80vw] w-[90vw] rounded'>Join the community</button>
        </div>
    </section>
  )
}

export default SectionTwo