import React from 'react'
import { BiSolidBank } from "react-icons/bi";

const Cards = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 mb-6 ">
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-400 border-opacity-35 relative">
          <p className="text-gray-500 font-semibold">CITI Bank</p>
          <p className="text-gray-400">A/C ************6839</p>
          <p className="text-2xl font-bold mt-2">$ 541204</p>
          <p className="absolute top-8 right-5 bg-purple-300 p-2 rounded-full bg-opacity-30">
            <BiSolidBank className="text-2xl text-purple-600  " />
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-400 border-opacity-35 relative">
          <p className="text-gray-500 font-semibold">CITI Bank</p>
          <p className="text-gray-400">A/C ************6839</p>
          <p className="text-2xl font-bold mt-2">$ 541204</p>
          <p className="absolute top-8 right-5 bg-purple-300 p-2 rounded-full bg-opacity-30">
            <BiSolidBank className="text-2xl text-purple-600  " />
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-400 border-opacity-35 relative">
          <p className="text-gray-500 font-semibold">Yes Bank</p>
          <p className="text-gray-400">A/C ************6839</p>
          <p className="text-2xl font-bold mt-2">$ 541204</p>
          <p className="absolute top-8 right-5 bg-purple-300 p-2 rounded-full bg-opacity-30">
            <BiSolidBank className="text-2xl text-purple-600  " />
          </p>
        </div>
      </div>

      <button className="border-2 border-opacity-45  border-dotted border-gray-500 text-purple-500 text-xl font-semibold     py-2 rounded-xl md:w-1/3 w-full">
        + Add Now
      </button>
    </div>
  );
}

export default Cards
