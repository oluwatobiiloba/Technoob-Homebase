const People = ({ people }) => {
  return (
    <>
        {people.map((person) => (
            <div id={person.id} key={person.id} className=' md:w-[480px] w-40 px-2 md:h-[530px] h-50 shadow-md rounded-2xl lg:px-10 mx-4 lg:py-10 py-4 mt-2 justify-between'>
                <img src={person.img} alt=" Member img" className=' min-h-[100px] min-w-[140px] ' />
                <div className="md:pt-20">
                    <h3 className=' md:text-3xl text-sm font-semibold'>{person.personName}</h3>
                    <p className=' md:text-xl text-[7px] '>{person.role} </p>
                </div>
            </div>
        )) }
    </>
  )
}

export default People