import React from 'react';
import JobCard from '../../../../utility/jobCards';

const MainSection = (data) => {
    const jobs = data.data;
    return (
        <div>
            <div className='nun mt-16'>
                <p className='text-lg font-bold'>All Jobs</p>
                <p className='text-[#71717A] text-[10px]'>Showing {jobs.length} Results</p>
                <div className='border-b-[0.5px] border-[#C2C7D6] mb-7 py-1' />
                <div className='grid gap-4 justify-center'>
                    {jobs.map((job) => (
                        <div key={job._id} className='w-full max-w-[1300px]'>
                            <JobCard
                                title={job.title}
                                company={job.company}
                                contractType={job.contractType}
                                link={job.link}
                                exp={job.exp}
                                workplaceType={job.workplaceType}
                                poster={job.poster}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection;
