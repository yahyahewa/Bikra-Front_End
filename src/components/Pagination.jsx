import React from "react";

function Pagination({ pagination, lenght, pageIndex }) {
  const handlChangePage = (pageNumber) => {
    window.scrollTo({ top: 0 });
    return pagination(
      pageNumber > Number(lenght / 12).toFixed(0)
        ? 1
        : pageNumber === 0
        ? Number(lenght / 12).toFixed(0)
        : pageNumber
    );
  };
  return (
    <div className="block  m-auto mt-3 md:ml-[250px]">
      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-x-2 items-center">
          <button
            onClick={() => {
              handlChangePage(pageIndex - 1);
            }}
            name="page"
            className="w-8 h-8 rounded-full bg-slate-700 text-white flex justify-center items-center"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.707 5.293a1 1 0 010 1.414L7.414 10l3.293 3.293a1 1 0
                        01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0
                        011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="text-slate-700 font-semibold">
            {pageIndex} of {Number(lenght / 12).toFixed(0)}
          </span>
          <button
            onClick={() => {
              handlChangePage(pageIndex + 1);
            }}
            name="page"
            className="w-8 h-8 rounded-full bg-slate-700 text-white flex justify-center items-center"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9.293 14.707a1 1 0 010-1.414L12.586 10 9.293
                        6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4
                        4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
