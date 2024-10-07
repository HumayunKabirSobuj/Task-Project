"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Pagination } from "./Pagination";
const Table = ({ dateFilter }) => {
  const [allData, setAllData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setCurrentPageData(data.slice(0, itemsPerPage));
      });
  }, []);
  console.log(allData);

  useEffect(() => {
    const start = pageNumber * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPageData(allData.slice(start, end));
  }, [pageNumber, allData]);

  useEffect(() => {
    const filteredData = applyDateFilter(allData);
    const start = pageNumber * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPageData(filteredData.slice(start, end));
  }, [pageNumber, allData, dateFilter]);

  const applyDateFilter = (data) => {
    const today = new Date();
    let filteredData = [];

    switch (dateFilter) {
      case "12 months":
        const twelveMonthsAgo = new Date();
        twelveMonthsAgo.setMonth(today.getMonth() - 12);
        filteredData = data.filter(
          (item) => new Date(item.date) >= twelveMonthsAgo
        );
        break;
      case "30 days":
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);
        filteredData = data.filter(
          (item) => new Date(item.date) >= thirtyDaysAgo
        );
        break;
      case "7 days":
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);
        filteredData = data.filter(
          (item) => new Date(item.date) >= sevenDaysAgo
        );
        break;
      case "24 hours":
        const twentyFourHoursAgo = new Date();
        twentyFourHoursAgo.setHours(today.getHours() - 24);
        filteredData = data.filter(
          (item) => new Date(item.date) >= twentyFourHoursAgo
        );
        break;
      case "Select dates":
        // এখানে আপনি নির্দিষ্ট তারিখ নির্বাচন করতে পারেন
        // যেমন: 2024-10-07 এ ডেটা ফিল্টার করতে
        const selectedDate = new Date("2024-10-07");
        filteredData = data.filter(
          (item) =>
            new Date(item.date).toDateString() === selectedDate.toDateString()
        );
        break;
      default:
        filteredData = data; // কোন ফিল্টার না থাকলে, সব ডেটা দেখান
    }

    return filteredData;
  };

  const handlePageChange = (num) => {
    if (num < 0 || num >= Math.ceil(allData.length / itemsPerPage)) return;
    setPageNumber(num);
  };

  return (
    <div className="md:mb-10 mb-6">
      {/* Table Here */}
      <div className="overflow-x-auto rounded-t-2xl border border-gray-200 mt-6">
        <table className="min-w-full bg-white border border-gray-200  rounded-t-2xl  rounded-b-2xl">
          <thead className="border border-gray-400  border-opacity-35   rounded-t-2xl ">
            <tr className="lg:h-[50px] bg-gray-400 bg-opacity-20">
              <th className="px-4 py-2 text-left rounded-tl-2xl ">
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <h1 className="text-sm text-gray-500 font-semibold">
                      Date
                    </h1>
                    <FaArrowDown className="text-sm text-gray-500 font-semibold" />
                  </label>{" "}
                </div>
              </th>
              <th className="px-4 py-2 text-sm text-gray-500 font-semibold text-left">
                Merchant Name
              </th>
              <th className="px-4 text-sm text-gray-500 font-semibold py-2 text-left">
                Description
              </th>
              <th className="px-4 text-sm text-gray-500 font-semibold py-2 text-left">
                Txn ID
              </th>
              <th className="px-4 text-sm text-gray-500 font-semibold py-2 text-left">
                Transaction Type
              </th>
              <th className="px-4 text-sm text-gray-500 font-semibold py-2 text-left">
                Amount
              </th>
              <th className="px-4 text-sm text-gray-500 font-semibold py-2 text-left">
                Account
              </th>
              <th className="px-4 text-sm text-gray-500 font-semibold py-2 text-left">
                Status
              </th>
              <th className="px-4 text-sm text-gray-500 font-semibold py-2 text-left">
                Categories
              </th>
              <th className="px-4 text-sm text-gray-500 font-semibold py-2 text-left rounded-tr-2xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="border border-gray-400  border-opacity-35 ">
            {currentPageData.map((data, idx) => (
              <tr
                className="border border-gray-400  border-opacity-35 "
                key={idx}
              >
                <td className="px-4 py-2 ">
                  <span className="text-md font-semibold">
                    <input type="checkbox" className="h-4 w-4 mr-2" />
                    {data?.date}
                  </span>{" "}
                  <br />{" "}
                  <span className="text-sm text-gray-500 font-semibold">
                    {data?.time}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500 font-semibold">
                  {data?.merchantName}
                </td>
                <td className="px-4 py-2">
                  <span className="text-sm font-semibold">
                    {data?.merchantName}
                  </span>{" "}
                  <br />
                  <span className="text-sm text-purple-600 font-medium">
                    {data?.txnID}
                  </span>
                </td>
                <td className="px-4 py-2 text-md font-semibold">
                  {data?.transactionIdNumber}
                </td>
                <div className="mt-8">
                  {data?.transactionType === "Income" && (
                    <td className="px-4 py-2 text-green-500 font-semibold w-28 text-md h-8 border rounded-xl bg-green-200 bg-opacity-30 border-green-500  flex items-center mt-2">
                      {" "}
                      <TiTick className="text-md" />
                      {data?.transactionType}
                    </td>
                  )}
                  {data?.transactionType === "Expense" && (
                    <td className="px-4 py-2 text-yellow-500 font-semibold w-28 text-md h-8 border rounded-xl bg-green-200 bg-opacity-30 border-yellow-500  flex items-center mb-1">
                      {" "}
                      <TiTick className="text-md" />
                      {data?.transactionType}
                    </td>
                  )}
                </div>
                <td className="px-4 py-2 text-md font-bold">{data?.amount}</td>
                <td className="px-4 py-2 text-md font-bold">{data?.account}</td>

                <div className="mt-8">
                  {data?.status === "Pending" && (
                    <td className=" justify-center py-2 text-yellow-500 font-semibold w-28 text-md h-8 border rounded-xl bg-green-200 bg-opacity-30 border-yellow-500 mb-6 flex items-center ">
                      {data?.status}
                    </td>
                  )}
                  {data?.status === "Reconciled" && (
                    <td className=" justify-center py-2 text-green-500 font-semibold w-28 text-md h-8 border rounded-xl bg-green-200 bg-opacity-30 border-green-500 mb-6 flex items-center ">
                      {data?.status}
                    </td>
                  )}
                  {data?.status === "Unreconciled" && (
                    <td className=" justify-center py-2 text-red-500 font-semibold w-28 text-md h-8 border rounded-xl bg-green-200 bg-opacity-30 border-red-500 mb-4 flex items-cente">
                      {data?.status}
                    </td>
                  )}
                  {data?.status === "In Progress" && (
                    <td className="  py-2 text-blue-500 font-semibold w-28 text-md h-8 border rounded-xl bg-green-200 bg-opacity-30 border-blue-500 mb-4 flex items-center  justify-center">
                      {data?.status}
                    </td>
                  )}
                </div>

                {/* <td className="px-4 py-2">{data?.status}</td> */}
                <td className="px-4 py-2">
                  {data?.category.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-sm   text-gray-500 font-semibold border rounded-xl mr-2"
                    >
                      {item}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-2">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {/* Pagination component call */}
      <div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={handlePageChange}
          totalPages={Math.ceil(allData.length / itemsPerPage)}
        ></Pagination>
      </div>
    </div>
  );
};

export default Table;
