import { useEffect, useState } from 'react'
import People from './Peoplee'
import serverApi from '../../../../utility/server'


const SectionThree = () => {
    const [people, setPeople] =useState(null)
    

    useEffect(() => {

        //fetch data from first endpoint
        async function fetchFirstData(){
         await serverApi.get("/admin/contributors")
         .then(res => {setPeople(res.data)})
         .catch(err => {console.error('error fetching data from endpoint 1', err)})
        }
        console.log(people);
       
          fetchFirstData()
        }, []);

  return (
    <section className="nun py-6 xl:px-20">
        <h1 className='font-bold md:font-extrabold text-center lg:text-6xl text-[38px] py-1 lg:h-[24px] lg:my-20 md:my-10'><span className=' text-tgreen'>Meet The </span> <span className=' text-tblue'>Team</span></h1>
        <h4 className=' text-center md:text-4xl text-lg px-5 text-[#3a3a3a] '>Meet Our Amazing Team of creators, stars and awesome problem solvers</h4>
        <div className="flex justify-between overflow-x-auto whitespace-nowrap py-10">
            <People people={people} />
        </div>
    </section>
  )
}

export default SectionThree