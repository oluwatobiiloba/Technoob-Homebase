import { useState } from 'react'
import People from './Peoplee'
import img1 from '../img/Frame 12302.png'
import img2 from '../img/Frame 12303.png'
import img3 from '../img/Frame 12304.png'


const SectionThree = () => {
    const [people] = useState([
        {
            id : 1,
            img : img1,
            personName : 'Ololade mrs money',
            role : 'Fullstack Developer, meta'
        },
        {
            id : 2,
            img : img2,
            personName : 'Amina Starr',
            role : 'Senior Product designer, Amazon'
        },
        {
            id : 3,
            img : img3,
            personName : 'Kelani wayy',
            role : 'Product lead, Paystack'
        }
    ])
  return (
    <section className="nun py-6 xl:px-20">
        <h1 className='font-bold text-center lg:text-6xl text-[38px] py-1 lg:h-[24px] lg:my-20 md:my-10'><span className=' text-tgreen'>Meet The </span> <span className=' text-tblue'>Team</span></h1>
        <h4 className=' text-center md:text-4xl text-lg px-5 text-[#3a3a3a] '>Meet Our Amazing Team of creators, stars and awesome problem solvers</h4>
        <div className="flex justify-between overflow-x-auto whitespace-nowrap py-10">
            <People people={people} />
        </div>
    </section>
  )
}

export default SectionThree