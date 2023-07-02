import React, { useState, useEffect } from 'react';
import { SearchIcon, close, filtersearch } from '../../../../data/assets';
import Button from '../../../../utility/button';
import Loader from '../../../../utility/Loader';
import Card from '../../../../utility/Card';
import { feedback } from '../../../../data/contact';

import {RiArrowDownSLine} from 'react-icons/ri'


const Page1 = () => {

    const [active, setActive] = useState(true)
    const [togggle, setTogggle] = useState(false);
    const [selected, setSelected] = useState('Design');
    const [searchTearm, setSearchTearm] = useState('');
    const [resources, setResources] = useState();

    const URL = `https://technoob-staging.azurewebsites.net/api/v1/resources/all?name=${searchTearm}`;



    const handleClick= async (e) => {
        e.preventDefault();
     const response = await fetch(URL);
     const data = await response.json()
     setResources(data.data)
     

      }

      useEffect( () => {
        async function fetchData() {
            const URL = `https://technoob-staging.azurewebsites.net/api/v1/resources/all?name=`;
          // You can await here
          const response = await fetch(URL);
          const data = await response.json()
            setResources(data.data);
          
        }
        fetchData();
      }, []); 
      
    
   

    const Options = [
        {
        id: 1,
        name:'Product Design'}, 
        {
            id:2,
            name:'Graphics Design'
        }, 
        {
            id:3,
            name:'UX Design', 
        }, 
        {
            id:4,
            name:'Interior Design',
        }, 
        {
            id:5,
            name:'Industrial Design'
        }];

  return (
    <div className='flex flex-col w-full justify-start items-start sm:justify-center sm:items-center px-5 sm:px-0 pt-6 md:pt-16 relative'>

        
        <div className='mb-5 sm:mb-[3rem] w-[360px] h-[77px]'>
            <header className='uni text-center md:text-6xl text-3xl font-bold md:py-3 py-10'>
            <span className=' text-tblue'>RESOURCES</span>
            </header>
        </div>
                 <div className={`absolute shadow-sm right-0 left-4 mt-20 h-[470px] z-10 bg-white w-[85%] flex flex-col justify-start items-start ${togggle ? 'block' : 'hidden'} sm:hidden`}>
                        
                        <div className='flex justify-between items-center p-4 w-full'>
                            <div className='flex p-2'>
                            <img src={filtersearch} alt="icon" className='mr-3 w-6 h-6' />
                            <p className='text-sm font-normal'>Filter By</p>
                            </div>
                            <img src={close} alt="close" onClick={()=> setTogggle(false)} />
                        </div>
                        
                            <div className=' border-b-[0.5px] m-auto w-[95%] mt-6 border-[#C2C7D6] mb-7'/>

                            <div className='shadow-md rounded-lg  w-full p-2'>
                    
                    <div onClick={()=> setActive((prev) => !prev)} className='flex justify-between items-center p-2 cursor-pointer'>
                        <h1 className='text-2xl'>{selected}</h1>
                        <RiArrowDownSLine/>
                    </div>
                    

                        <ul className={`${active ? 'block' : 'hidden'}`}>
                            {Options.map((option, i) => (
                                <li key={i} onClick={()=>{
                                    
                                        setActive(false);
                                        setSelected(option.name)
                                        setTogggle(false)
                                    
                                }        
                                } 
                                className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                                    {option.name}
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>  

        <div className=' w-full flex justify-start items-start md:justify-center md:items-center mb-[3rem]'>
            

            <form onSubmit={handleClick} className=' w-[95%] flex flex-col sm:flex-row justify-start md:justify-center items-centers gap-6 '>
                <div className='flex justify-start items-center border border-[#BDBDBD] sm:w-[80%] h-[54px] rounded-lg bg-transparent pl-7 '>

                <img src={SearchIcon} alt="icon" className='h-5 w-5' />
                
                <input 
                type="text" 
                placeholder='Books on Design'
                onChange={(e)=> setSearchTearm(e.target.value)} 
                className='placeholder:italic placeholder:text-slate-400 focus:outline-none text-base w-full h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] ' />

                
                <img 
                    src={filtersearch} 
                    alt="icon" 
                    onClick={(e)=> {setTogggle((prev) => !prev)
                    }} 
                    className='sm:hidden block mr-2 w-6 h-6' />
                      
                </div>

                <div>
                    <Button name={'Search'} handleClick={handleClick}/>
                </div>
                    

            </form>
        </div>

        <div className='flex md:gap-[1rem] md:justify-between w-[90%] '>
            <div className='hidden xl:block sm:flex-[0.4]  h-[1470px] p-4  shadow-md'>
                <div className='flex justify-start items-center p-4 '>
                    <img src={filtersearch} alt="icon" className='mr-2 w-6 h-6' />
                    <p className='text-sm font-normal'>Filter By</p>
                </div>

                <div className=' border-b-[0.5px] border-[#C2C7D6] mb-7'/>

                <div className='shadow-md rounded-lg p-2'>
                    
                    <div onClick={()=> setActive((prev) => !prev)} className='flex justify-between items-center p-2 cursor-pointer'>
                        <h1 className='text-2xl'>{selected}</h1>
                        <RiArrowDownSLine/>
                    </div>
                    

                    <ul className={`${active ? 'block' : 'hidden'}`}>
                        {Options.map((option, i) => (
                            <li key={i} onClick={()=>{
                                
                                    setActive(false);
                                    setSelected(option.name)
                                
                            }        
                            } 
                            className='text-sm p-3 pl-4 hover:bg-[#F0F4FE] rounded-md cursor-pointer'>
                                {option.name}
                                </li>
                        ))}
                    </ul>
                </div>


            </div>

            


            <div className='flex-[1.5] pl-4 overflow-auto relative'>
                {searchTearm ? <h1 className='text-2xl text-[#3A3A3A] font-semibold mb-3 '><span className='text-[#5E7CE8]'>{resources.length}</span> RESULTS</h1> : ''}

                
                <div className=' border-b-[0.5px] border-[#C2C7D6] mb-[4rem] w-[80%] '/>


                <div className='flex-col border-l-[0.5px] border-[#C2C7D6] pl-3 md:pl-5 flex mb-[7rem] overflow-auto relative '>
                    

                    <div className='flex mb-16'>
                            {resources ? resources?.map((feeds, i) => (

                        <div key={i} className='flex flex-row items-center mr-8 w-[230px] h-[300px] sm:w-[490px]  sm:h-[538px] '>
                            
                            <Card titleText={feeds.name} photo={feeds.image_placeholder} pText={feeds.description} subTitleText={feeds.type}/>

                        </div>

                        )) : (

                            <div className='flex  items-start justify-center  '>
                                
                                <Loader/> 
                            
                            </div>
    
                            )}
                   </div>
    
               
                </div>


                <div className='flex flex-col  w-full'>

                     <div className='flex'>
                        
                        <h1 className='text-5xl font-extrabold mb-[3rem]'>BLOG NEWS</h1>
                    </div>   

                    <div className='flex flex-col w-full md:flex-row md:overflow-auto justify-center items-center sm:justify-start'  >

                        {feedback.map((feeds, i) => (

                            <div key={i} className='flex flex-col mb-10 mr-8 h-[340px] sm:min-w-[512px] sm:h-[538px] '>
                                
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