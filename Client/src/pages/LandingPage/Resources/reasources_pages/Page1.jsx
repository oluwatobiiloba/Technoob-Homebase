import React, { useState, useEffect } from 'react';
import { SearchIcon, filtersearch } from '../../../../data/assets';
import Button from '../../../../utility/button';
import Loader from '../../../../utility/Loader';
import Card from '../../../../utility/Card';
import { useNavigate } from 'react-router-dom';

import Filter from '../../../../components/Filter';
import serverApi from "../../../../utility/server";
import {fetchFilteredData, fetchFirstData} from "../../../../utility/filterGather";


const Page1 = () => {

    const navigate = useNavigate()

    const [selected, setSelected] = useState('Design');
    const [resources, setResources] = useState(null);
    const [filtered, setFiltered] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [options , setOptions] = useState([]);
    const [passedOptions, setpassedOptions] = useState({})
    const [box1, setBox1] = useState([]);
    const [reset, setReset] = useState(false);

    const handleBox1Change = (e) => {
        e.preventDefault();
        const newValue= e.currentTarget.value.trim();
        const updatedSelectedValues = box1.includes(newValue)
            ? box1.filter((val) => val !== newValue)
            : [...box1, newValue];
        setBox1(updatedSelectedValues)
        console.log(updatedSelectedValues)
        if(updatedSelectedValues.length === 0){
            setReset(true)
        }
    }


    const handleClick= async (e) => {
        e.preventDefault();
        try{
            let params = {}
            if(searchTerm) {
                params.name = searchTerm
            }
            const response = await serverApi.get(`resources/all`,
                {
                    params
                });
            if(response.status === 200){
                let responseData = response.data.data
                setResources(responseData)
            } else {
                alert("No result found")
            }
        }catch (e) {
            console.log(e)
        }
    }

    useEffect( () => {
        setLoading(true);
        fetchFirstData("/resources/all",setResources,setOptions)
            .then(_r => {
                setLoading(false);
                setFiltered(false);
            });
    }, []);

    useEffect( () => {
        let params = {};
        if (box1.length > 0 && !loading){
            params[passedOptions.name] = box1.join(',');
            fetchFilteredData(params, "/resources/all", setResources).then(_r  => {})
        }

        if(reset){
            fetchFirstData("/resources/all",setResources,setOptions)
                .then(_r => {
                    setLoading(false);
                    setFiltered(false);
                });
        }


    }, [passedOptions.name, loading, box1, reset]);


    return (
    <div className='flex flex-col w-full justify-start items-center sm:justify-center sm:items-center px-5 sm:px-0 pt-6 md:pt-16 relative'>

        
        <div className='mb-5 sm:mb-[3rem] w-[360px] h-[77px]'>
            <header className='uni text-center md:text-6xl text-3xl font-bold md:py-3 py-10'>
            <span className=' text-tblue'>RESOURCES</span>
            </header>
        </div>
        <div className=' w-full flex justify-center items-start md:justify-center md:items-center mb-[3rem]'>
            

            <form onSubmit={handleClick} className=' w-[95%] flex flex-col sm:flex-row justify-start md:justify-center items-center gap-6 '>
                <div className='flex justify-start items-center border border-[#BDBDBD] sm:w-[80%] h-[54px] rounded-lg bg-transparent pl-7 '>

                    <img src={SearchIcon} alt="icon" className='h-5 w-5' />

                    <input
                    type="text"
                    placeholder='Books on Design'
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    className='placeholder:italic placeholder:text-slate-400 focus:outline-none text-base w-[280px] h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] ' />


                    <img
                        src={filtersearch}
                        alt="icon"
                        // onClick={(_e)=> {setToggle((prev) => !prev)
                        // }}
                        className='sm:hidden block mr-2 w-6 h-6' />

                </div>

                <div>
                    <Button name={'Search'} handleClick={handleClick}/>
                </div>
                    

            </form>
        </div>

        <div className=' flex md:gap-[1rem] h-[30rem] md:h-[35rem] md:justify-between w-[95%] md:ml-12 '>
            <div className='hidden xl:block sm:flex-[0.4] h-[35rem] p-4  shadow-md'>
               <Filter passedOptions={passedOptions} setpassedOptions={setpassedOptions} options={options} selected={selected} setSelected={setSelected} handleBox1Change={handleBox1Change} box1={box1}/>
            </div>


            <div className=' w-full sm:min-h-[600px] md:flex-[1.5] md:pl-4 relative overflow-hidden'>
                {searchTerm || filtered ? <h1 className='text-2xl text-[#3A3A3A] font-semibold mb-3 '><span className='text-[#5E7CE8]'>{resources.length}</span> RESULTS</h1> : <h1 className='text-2xl text-[#3A3A3A] font-semibold'><span className='text-[#5E7CE8]'>ALL</span> RESULTS</h1>}

                
                <div className='border-b-[0.5px] border-[#C2C7D6] mb-[2rem] w-[95%] '/>


                <div className='flex-col flex items-start mb-[7rem] relative overflow-x-auto w-full h-screen gap-5'>
                    
                        

                    <div className='flex mb-16 w-full h-full'>
                        <div className=' border-l-[0.5px] border-[#C2C7D6] h-[20rem] pl-3 md:pl-5 pt-12'/>
                        {resources ? resources?.map((feeds, i) => (

                        <div key={i} className='flex flex-row justify-start items-start mr-12 sm:mr-5 w-[200px] h-full sm:w-[380px] '>
                            
                            <Card titleText={feeds.name} photo={feeds.image_placeholder} pText={feeds.description} subTitleText={feeds.type} link={feeds.file || feeds.url}/>

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

               {resources ? (<div onClick={()=> navigate('/all-resources')} className='cursor-pointer absolute bottom-0 right-2 bg-slate-200 rounded-md sm:mb-1 w-[30%] md:w-[6rem] h-10 flex justify-center items-center'>
                        <h1 className='text-tblue'>See More</h1>
                </div>) : ''}

            </div>
        </div>

        <div>

        </div>

    </div>
  )
}

export default Page1