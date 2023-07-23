import React, { useState, useEffect } from 'react';
import { SearchIcon, filtersearch } from '../../../../data/assets';
import Button from '../../../../utility/button';
import Loader from '../../../../utility/Loader';
import Card from '../../../../utility/Card';

import Filter from '../../../../components/Filter';


const AllReasources = () => {


    const [togggle, setTogggle] = useState(false);
    const [selected, setSelected] = useState('Design');
    const [searchTearm, setSearchTearm] = useState('');
    const [resources, setResources] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const URL = `https://technoob-staging.azurewebsites.net/api/v1/resources/all?name=${searchTearm}`;



  

    const handleClick= async (e) => {
        e.preventDefault();
     const response = await fetch(URL);
     const data = await response.json()
     setResources(data.data);
     

      }

      useEffect( () => {
        async function fetchData() {
            const URL = `https://technoob-staging.azurewebsites.net/api/v1/resources/all?name=`;
          // You can await here

              try {
                setLoading(true)
                const response = await fetch(URL);
                const data = await response.json()

                    setResources(data.data)
                    
                 

            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
          
        }
        fetchData();
      }, []); 

 
      
    
   

  return (
    <div className='flex flex-col w-full justify-start items-center sm:justify-center sm:items-center px-5 sm:px-0 pt-6 md:pt-16 relative'>

        
        <div className='mb-5 sm:mb-[3rem] w-[360px] h-[77px]'>
            <header className='uni text-center md:text-6xl text-3xl font-bold md:py-3 py-10'>
            <span className=' text-tblue'>RESOURCES</span>
            </header>
        </div>
                 <div className={`absolute shadow-sm right-0 left-4 mt-20 h-auto z-10 bg-white w-[85%] flex flex-col justify-start items-start ${togggle ? 'block' : 'hidden'} sm:hidden`}>
                        
                      <Filter selected={selected} setSelected={setSelected}/>
                </div>  

        <div className=' w-full flex justify-center items-start md:justify-center md:items-center mb-[3rem]'>
            

            <form onSubmit={handleClick} className=' w-[95%] flex flex-col sm:flex-row justify-start md:justify-center items-center gap-6 '>
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

        <div className=' flex md:gap-[1rem] h-auto md:justify-between w-[95%] md:ml-12 '>
            <div className='hidden xl:block sm:flex-[0.4]  h-[25rem] p-4  shadow-md'>
               <Filter selected={selected} setSelected={setSelected}/>
            </div>

            


            <div className=' w-full min-h-[600px] md:flex-[1.5] md:pl-4'>
                {searchTearm ? <h1 className='text-2xl text-[#3A3A3A] font-semibold mb-3 '><span className='text-[#5E7CE8]'>{resources.length}</span> RESULTS</h1> : <h1 className='text-2xl text-[#3A3A3A] font-semibold'><span className='text-[#5E7CE8]'>ALL</span> RESULTS</h1>}

                
                <div className='border-b-[0.5px] border-[#C2C7D6] mb-[2rem] w-[95%] '/>


                <div className='flex-col flex flex-wrap items-start mb-[7rem] w-full h-auto gap-5'>
                    
                        

                    <div className='flex flex-wrap items-center justify-center gap-4 mb-16 w-full h-full'>
                        {/* <div className=' border-l-[0.5px] border-[#C2C7D6] h-[20rem] pl-3 md:pl-5 pt-12'/> */}
                        {resources ? resources?.map((feeds, i) => (

                        <div key={i} className='flex flex-wrap items-center justify-center md:justify-start md:items-start  sm:mr-5 w-[250px]  min-h-auto sm:w-[330px] '>
                            
                            <Card titleText={feeds.name} photo={feeds.image_placeholder} pText={feeds.description} subTitleText={feeds.type}/>

                        </div> 

                        )) : (

                            <div className='flex w-full justify-center items-start  '>
                                
                                {loading ? <Loader/> : (
                                <div className='flex flex-col justify-center items-center gap-4'>
                                    <h1 className='text-base text-center md:text-3xl text-black font-semibold'>Something went wrong, <br className='block md:hidden'/> Please try again...</h1>
                                    {/* <span onClick={handleClick} className='underline text-cyan-600 text-[14px] cursor-pointer'>Retry...</span> */}

                                </div>
                                
                                )} 
                            
                            </div>
    
                            )}
                   </div>
               
                </div>

            </div>
        </div>

        <div>

        </div>

    </div>
  )
}

export default AllReasources