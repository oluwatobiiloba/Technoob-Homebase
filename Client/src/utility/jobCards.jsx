import React from 'react';

const JobCard = ({ title, company, contractType, workplaceType, link, exp, poster }) => {
    return (
        <div className='w-full p-3 flex justify-start items-center rounded-2xl shadow-md'>
            <div className='flex items-center'>
                <div className='w-[100px] h-[100px] mr-3'>
                    <img src={poster} alt={title} className='w-full h-full object-contain rounded' />
                </div>

                <div className='flex flex-col gap-2 w-[800px]'>
                    <h1 className='text-base sm:text-3xl font-bold'>{title}</h1>
                    <h2 className='text-sm sm:text-xl font-normal'>{company}</h2>
                    <p className='text-xs sm:text-base font-normal truncate w-[180px] sm:w-[250px]'>
                        {workplaceType}
                    </p>
                </div>
            </div>

            <div className='ml-auto'>
                <button type={"button"} datasrc={link}>Apply</button>
            </div>
        </div>
    );
};

export default JobCard;
