import React from 'react';

const Table = ({jobActivity}) => {

    const activityData = jobActivity || [];

    // const arrayOfObjects = data.activity

    // const activities = arrayOfObjects.reduce((acc, obj) => {
    //   acc[obj.key] = obj.value;
    //   return acc;
    // }, {});
    // console.log('activitieArry',activities)
    return (
        <table className=' border-t border-b w-full overflow-x-auto'>
            <thead>
            <tr>
                <td><h4 className='font-semibold text-xl mt-2'>Activity</h4></td>
                <td><h4 className='px-10 text-xl font-semibold'>Title</h4></td>
                <td><h4 className='px-10 text-xl font-semibold'>Company</h4></td>
                <td><h4 className='px-10 text-xl font-semibold'>Workplace Type</h4></td>
                <td className=''><h4 className=' px-10 text-xl font-semibold'>Status</h4></td>

                <td><span>...</span></td>
            </tr>
            </thead>


            <tbody>
            {activityData ? jobActivity.map((item) => (

                    <tr>
                        <td><p className=' text-sm my-4'>{item?.activity.activity}</p></td>
                        <td><p className=' px-10 text-sm'>{item?.activity.title}</p></td>
                        <td><p className=' px-10 text-sm'>{item?.activity.company}</p></td>
                        <td><p className=' px-10 text-sm'>{item?.activity.workplaceType}</p></td>
                        <td className='w-[20%] '><p
                            className={`${item?.activity.status === 'Successful' ? 'bg-green-500' : 'bg-red-500'}  text-base  text-white rounded-[30px] w-full lg:w-[80%]  pl-2  py-2 text-center flex justify-start items-center`}>
                            <span
                                className={`${item?.activity.status === 'Successful' ? 'bg-green-700' : 'bg-red-700'} rounded-full w-4 h-4 mr-2`}> </span>{item?.activity.status}
                        </p></td>
                        <td></td>
                    </tr>
                )) :

                ''
            }

            </tbody>

        </table>
    )
}

export default Table