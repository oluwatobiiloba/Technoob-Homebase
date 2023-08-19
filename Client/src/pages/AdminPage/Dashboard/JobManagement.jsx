import React, {Suspense, useContext, useEffect, useState} from 'react';
import {MdOutlineNoteAdd} from 'react-icons/md';
import {AppContext} from '../../../AppContext/AppContext';
import {AiOutlineEye} from 'react-icons/ai'
import serverApi from "../../../utility/server";
import {fetchFirstData} from "../../../utility/filterGather";
import Table from "../../../components/JobActivityTable";


const JobManagement = () => {
  const [ jobData,setJobData ] = useState([])
  const [jobMetrics, setJobMetrics] = useState({
    "total": 0,
    "views": 0
  });
  const [jobActivity, setJobActivity] = useState([]);
  const {UserProfile} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [formInput, setFormInput] = useState(
      {
        title:"",
        company: "",
        exp:"" ,
        location:"",
        workplaceType:"",
        expiryDate:"",
        link:"",
        poster:"",
        uploader_id:"",
        contractType:""
      }
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formInput);
    try {
      serverApi.requiresAuth(true)
      const response = await serverApi.post(
          "/jobs/create",
          formInput
      )

      if(response.status === 201 || 200){
        setFormInput({
          title:"",
          company: "",
          exp:"" ,
          location:"",
          workplaceType:"",
          expiryDate:"",
          link:"",
          poster:"",
          uploader_id:"",
          contractType:""
        });
        alert("Job added successfully")
      }
    }catch (e) {
        alert(e)
    }

  };

  const statistics = [
    {
      name : 'Jobs posted',
      amount : jobMetrics.total,
      amtlabel : 'Jobs',
      icon : <MdOutlineNoteAdd/>,
      style : 'bg-green-100 text-tgreen'
    },
    {
      name : 'Views',
      amount : jobMetrics.views,
      amtlabel : 'Views',
      icon : <AiOutlineEye/>,
      style : 'text-[#D4C433] bg-yellow-100'
    },
  ]
  const fetchJobMetrics = async () => {

    try{
      const response = await serverApi.get("/jobs/metrics",{
        withCredentials: true
      });
      if(response.status === 200){
        setJobMetrics(response.data.data)
      }
    }catch (e) {
      alert(e.message)
    }

  }

  useEffect(() => {
    fetchJobMetrics()
    fetchFirstData("/jobs/activity", setJobActivity, null, true, "activity").then(_r => setIsLoading(false))
    ;
  }, []);

  return ( 
    <section>
      <div className=' flex py-10 nun justify-start items-center'>
        <h1 className='  md:text-3xl text-xl font-semibold'>Hey,{UserProfile.firstname} -</h1>
        <p className='md:pt-2 pt-1 text-sm ml-3 sm:text-lg text-[#3A3A3A66] sm:text-black '>Welcome the  job management console.</p>
      </div>
      <div className=' lg:mx-4 p-5  rounded-md bg-white shadow-md w-full '>
        <h1 className='text-xl font-semibold sm:ml-4 lg:py-4 sm:text-[#3A3A3A] sm:text-2xl'>Job Management</h1>
        <div className="md:flex block w-full justify-start pb-3">
          {statistics.map((opt, i) => (
            <div key={i} className=' px-3 pt-5 pb-6 rounded-lg shadow-md lg:w-[40%] mr-6 '>
              <p className=' pt-3 pb-6 px-2 flex text-xl text-[#71717A] w-auto'>{opt.name} <span className={`${opt.style} p-2 rounded-full ml-3 mt-[-2px]`}>{opt.icon}</span> </p>
              <div className=' flex justify-start items-end'>
                <p className=' p-2 mr-6 text-xl'><span className=' font-bold text-3xl'>{opt.amount}</span> {opt.amtlabel} </p>
              </div>
            </div>
          ))}
        </div>
        <div className=' py-5'>
          <p className=' text-2xl font-semibold'>Add new job</p>
          <p className=' text-[#71717A] text-[16px]'>Add Job Details</p>
        </div>
        <form id='job' onSubmit={handleSubmit}>
          <div>
            <div className=' flex justify-between'>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Job title</label></div>
                <input type="text" placeholder='Product Design' className=' border px-2 py-[6px] my-2 w-[250px]' name="title" value={formInput.title} onChange={handleChange}/>
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="company" className=' text-base font-semibold p-1'>Company</label></div>
                <input type="text" placeholder='Meta' className=' border px-2 py-[6px] my-2 w-[250px]' name="company" value={formInput.company} onChange={handleChange}/>
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="experience" className=' text-base font-semibold p-1'>Your experience</label></div>
                <select  id="exp" className=' border px-2 py-[6px] my-2 w-[250px]' name="exp" value={formInput.exp} onChange={handleChange}>
                  <option value="0-1 year">0-1 year</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years +">3-5 years +</option>
                </select>
              </div>
            </div>
            <div className=' flex justify-between'>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Job Location</label></div>
                <input type="text" placeholder='New york, USA' className=' border px-2 py-[6px] my-2 w-[250px]' name="location" value={formInput.location} onChange={handleChange}/>
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Workplace type</label></div>
                <select  id="job" className=' border px-2 py-[6px] my-2 w-[250px]' name="workplaceType" value={formInput.workplaceType} onChange={handleChange}>
                  <option value="onsite">On-site</option>
                  <option value="remote">Hybrid</option>
                  <option value="hybrid">Remote</option>
                </select>
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1'>Expiry-Date / Deadline</label></div>
                <input type="text" placeholder='Jan 16' className=' border px-2 py-[6px] my-2 w-[250px]' name="expiryDate" value={formInput.expiryDate} onChange={handleChange}/>
              </div>
              <div className=' block py-2 my-4'>
                <div><label htmlFor="title" className=' text-base font-semibold p-1' >Job type</label></div>
                <select  id="job" className=' border px-2 py-[6px] my-2 w-[250px]' name="contractType" value={formInput.contractType} onChange={handleChange}>
                  <option value="full-time">Full time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className=' w-[70%]'>
              <label htmlFor="Joblink" className=' text-lg font-semibold py-2 px-4 ' >Job link</label><br/>
              <input type="text" placeholder={'--Link here--'} className=' w-full mx-1 border py-3 px-2 my-4 outline-0 bg-white' name="link" value={formInput.link} onChange={handleChange}/>
            </div>
            <div className=' w-[20%]'>
              <button type="submit" className=' mt-11 bg-tblue text-twhite py-[12px] lg:w-full w-[100%] rounded'>Publish Job</button>
            </div>
          </div>
        </form>
        <div className='mt-16'>
            <div className=' flex justify-between'>
              <div>
                <h2 className=" text-xl font-semibold pt-4">Recent Jobs</h2>
                <p className=" text-lg text-[#747272] mb-1">
                  See list of recently uploaded jobs.
                </p>
              </div>

              <button className='float-right border py-2 px-8 my-[20px] rounded flex justify-between shadow-sm'>See all</button>
            </div>

          <div className='flex overflow-x-auto'>
                <Suspense fallback={<p>loading</p>}>
                  {jobActivity.length ? (<Table jobActivity={jobActivity}/>) : ''}
                </Suspense>
            </div>
          </div>
      </div>
    </section>
  )
}


export default JobManagement