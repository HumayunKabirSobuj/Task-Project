
export const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
 

  return (
    

    <div className="flex select-none lg:justify-between lg:flex-row flex-col justify-center items-center gap-5 border border-gray-400  border-opacity-35 border-t-0 lg:px-5 py-3 rounded-b-2xl">
      <div>
        <h1 className="text-md font-bold text-gray-500">
          Page {pageNumber+1} Of {totalPages}
        </h1>
      </div>

      <div className="flex justify-center items-center gap-2 ">
        {[...Array(totalPages).keys()].map((item) => (
          <div
            key={item}
            onClick={() => setPageNumber(item)}
            className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200 lg:px-4 px-3 lg:py-3 lg:text-md text-xs ${
              pageNumber === item ? "bg-zinc-500 text-white" : "bg-white"
            } border-zinc-300 font-semibold text-gray-700 py-2 rounded-full`}
          >
            {item + 1}
          </div>
        ))}
      </div>
    </div>
  );
};




