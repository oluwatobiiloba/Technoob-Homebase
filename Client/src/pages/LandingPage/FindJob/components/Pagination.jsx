import React from "react";


function Pagination({ data, totalUsers, usersPerPage, paginated, }) {

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumber.push(i);
  }
    

  return (
    

    <div>
      {pageNumber.map((number) => (
        <button
          onClick={() => paginated(number)}
          key={number}
          className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
