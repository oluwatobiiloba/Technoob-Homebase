import React from 'react';
import { Resources, SearchIcon, filtersearch } from '../../../../data/assets';
import Button from '../../../../utility/button';
import Card from '../../../../utility/Card';
import { feedback } from '../../../../data/contact';

const Page1 = () => {
  return (
    <div className='flex flex-col w-full justify-start items-start sm:justify-center sm:items-center'>

        
        <div className='mb-[6rem] w-[360px] h-[77px]'>
            <img src={Resources} alt="HeaderImage" className='object-contain' />
        </div>

        <div className=' w-full flex justify-center items-center mb-[3rem]'>

            <div className='w-[95%] flex flex-col sm:flex-row justify-center items-center h-[56px] gap-6 '>
                <div className='flex justify-start items-center border border-[#BDBDBD] sm:w-[80%] h-[54px] rounded-lg bg-transparent pl-7 '>

                <img src={SearchIcon} alt="icon" className='h-5 w-5' />
                
                <input type="text" placeholder='Books on Design' className='placeholder:italic placeholder:text-slate-400 focus:outline-none text-base w-full h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] ' />
                </div>

                <div>
                    <Button name={'Search'}/>
                </div>
                    

            </div>
        </div>

        <div className='flex gap-[3rem] justify-between w-full ml-[9rem] '>
            <div className='hidden xl:block sm:flex-[0.4]  h-[1513px] p-4  shadow-md'>
                <div className='flex justify-start items-center p-4 '>
                    <img src={filtersearch} alt="icon" className='mr-2 w-6 h-6' />
                    <p className='text-sm font-normal'>Filter By</p>
                </div>

                <div className=' border-b-[0.5px] border-[#C2C7D6] mb-7'/>

                <div>
                    Design
                </div>


            </div>


            <div className='flex-[1.5] pl-4 overflow-auto'>
                <h1 className='text-2xl text-[#3A3A3A] font-semibold mb-3'><span className='text-[#5E7CE8]'>80</span> RESULTS </h1>

                
                <div className=' border-b-[0.5px] border-[#C2C7D6] mb-[4rem] w-[80%]'/>


                <div className='border-l-[0.5px] border-[#C2C7D6] pl-5 flex mb-[7rem]'>

                    {feedback.map((feeds, i) => (

                        <div className='flex items-center mr-8 w-[460px] h-[590px]  '>
                            
                            <Card titleText={feeds.name} photo={feeds.img} pText={feeds.content} subTitleText={feeds.title}/>

                        </div>
                    ))}
                    
                </div>


                <div className='flex flex-col '>

                     <div className='flex'>
                        
                        <h1 className='text-5xl font-extrabold mb-[3rem]'>BLOG NEWS</h1>
                    </div>   

                    <div className='flex'  >

                        {feedback.map((feeds, i) => (

                            <div className='flex flex-col mr-8 w-[460px] h-[590px] '>
                                
                                <Card titleText={feeds.name} photo={feeds.img} pText={feeds.content} subTitleText={feeds.title}/>

                            </div>
                        ))}
                    </div>

                    
                </div>

                


            </div>
        </div>

        <div>

        </div>

    </div>
  )
}

export default Page1