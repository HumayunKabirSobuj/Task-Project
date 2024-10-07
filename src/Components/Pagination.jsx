
export const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
 

  return (
    <div className="flex select-none lg:justify-end justify-center items-center gap-5 mt-5">
     

      <div className="flex justify-center items-center gap-2 ">
        
        {[...Array(totalPages).keys()].map((item) => (
          <div
            key={item}
            onClick={() => setPageNumber(item)}
            className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200 px-5 ${
              pageNumber === item ? "bg-zinc-500 text-white" : "bg-white"
            } border-zinc-300 font-semibold text-gray-700 py-3 rounded-full`}
          >
            {item + 1}
          </div>
        ))}
      </div>

   
    </div>
  );
};




