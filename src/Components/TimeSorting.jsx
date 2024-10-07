"use client";
import React from 'react'
import { BsCalendar2Date } from "react-icons/bs";
import Table from './Table';
import { useState } from 'react';

const TimeSorting = () => {
    const [dateFilter, setDateFilter] = useState("12 months");
    const handleFilterClick = (filter) => {
      setDateFilter(filter);
    };

  return (
    <div>
      {/* Recent Transaction */}
      <div className="mt-6 ">
        <div className="flex items-center lg:flex-row flex-col justify-between">
          <div className="flex items-center lg:flex-row flex-col gap-2">
            <h2 className="text-lg font-semibold">Recent Transaction</h2>
            <p className="text-sm text-gray-500">
              12 Months (10 Dec 2023 - 9 Dec 2024)
            </p>
          </div>
          <div className="flex items-center lg:flex-row flex-col mt-5 gap-2">
            <div className="flex  rounded-lg ">
              <button
                className={`px-4 py-2 rounded ${
                  dateFilter === "12 months"
                    ? "bg-gray-200 border-gray-400"
                    : " text-gray-500"
                }`}
                onClick={() => handleFilterClick("12 months")}
              >
                12 months
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  dateFilter === "30 days"
                    ? "bg-gray-200 border-gray-400"
                    : " text-gray-500"
                }`}
                onClick={() => handleFilterClick("30 days")}
              >
                30 days
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  dateFilter === "7 days"
                    ? "bg-gray-200 border-gray-400"
                    : " text-gray-500"
                }`}
                onClick={() => handleFilterClick("7 days")}
              >
                7 days
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  dateFilter === "24 hours"
                    ? "bg-gray-200 border-gray-400"
                    : " text-gray-500"
                }`}
                onClick={() => handleFilterClick("24 hours")}
              >
                24 hours
              </button>
            </div>
            <button
              className="px-4 py-2 rounded   text-gray-500 flex items-center  space-x-2 ml-3"
              onClick={() => handleFilterClick("Select dates")}
            >
              <span>Select dates</span>
              <BsCalendar2Date className="text-md" />
            </button>
          </div>
        </div>
      </div>

      {/* Table Components Here */}
      <div>
        <Table dateFilter={dateFilter}></Table>
      </div>
    </div>
  );
}

export default TimeSorting
