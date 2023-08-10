import { React, useState }  from "react";
import JobCard from "../../../../utility/jobCards";
import Pagination from "./Pagination";

const MainSection = (data) => {

//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(4);
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUser = data.slice(indexOfFirstUser, indexOfLastUser); //error here (ca't slice because of data type )

//   const paginated = (data) => {
//     setCurrentPage(data);
//   };
//   const nextPage = () => {
//     return setCurrentPage((prev) => prev + 1);
//   };
//   const prevPage = () => {
//     setCurrentPage((prev) => prev - 1);
//   };





  const jobs = data.data;
  {
    console.log(data);
  }
  return (
    <div>
      <div className="nun mt-16 mb-10 w-full">
        <p className="text-lg font-bold">All Jobs</p>
        <p className="text-[#71717A] text-[10px]">
          Showing {jobs.length} Results
        </p>
        <div className="border-b-[0.5px] border-[#C2C7D6] mb-7 py-1" />
        <div className="flex flex-col gap-4 justify-start w-full mb-4">
          {jobs.map((job) => (
            <div key={job._id} className="w-full">
              <JobCard
                data={data}
                title={job.title}
                company={job.company}
                contractType={job.contractType}
                link={job.link}
                exp={job.exp}
                workplaceType={job.workplaceType}
                poster={job.poster}
                location={job.location}
              />
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center items-center sm:p-7 sm:border-solid sm:border sm:border-gray-300">
          <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div class="flex flex-1 justify-between sm:hidden ">
              <button
                onClick={() => nextPage()}
                class="relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={() => nextPage()}
                class="relative ml-3 inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <nav
                  class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() => nextPage()}
                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Previous</span>

                    <svg
                      width="17"
                      height="30"
                      viewBox="0 0 17 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.585035 16.413C-0.195598 15.6315 -0.194925 14.3652 0.586538 13.5845L13.3212 0.86339C14.1027 0.082756 15.369 0.0834293 16.1496 0.864893C16.9303 1.64636 16.9296 2.91269 16.1481 3.69332L4.82843 15.001L16.1361 26.3207C16.9168 27.1022 16.9161 28.3685 16.1346 29.1492C15.3532 29.9298 14.0868 29.9291 13.3062 29.1477L0.585035 16.413ZM4.29624 17.0007L1.99894 16.9995L2.00106 12.9995L4.29836 13.0007L4.29624 17.0007Z"
                        fill="#3A3A3A"
                      />
                    </svg>
                  </button>

                  <Pagination
                  usersPerPage={usersPerPage}
                  pageNumber={paginated}
                  paginated={paginated}
                  data={currentUser}
                  totalUsers={data.length}
                   />

                  <button
                    onClick={() => nextPage()}
                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Next</span>

                    <svg
                      width="18"
                      height="30"
                      viewBox="0 0 18 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.0096 16.413C17.7902 15.6315 17.7895 14.3652 17.0081 13.5845L4.27338 0.86339C3.49192 0.082756 2.22559 0.0834293 1.44496 0.864893C0.664323 1.64636 0.664995 2.91269 1.44646 3.69332L12.7662 15.001L1.45848 26.3207C0.677849 27.1022 0.678522 28.3685 1.45999 29.1492C2.24145 29.9298 3.50778 29.9291 4.28841 29.1477L17.0096 16.413ZM13.2984 17.0007L15.5957 16.9995L15.5935 12.9995L13.2962 13.0007L13.2984 17.0007Z"
                        fill="#3A3A3A"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainSection;
