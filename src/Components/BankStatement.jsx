"use client";
import React, { useEffect, useState } from "react";

const BankStatement = () => {
  const [satements, setStatements] = useState([]);

  useEffect(() => {
    const storedStatements =
      JSON.parse(localStorage.getItem("statements")) || [];
    setStatements(storedStatements);
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Bank Statements</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4">
          {satements.length > 0 ? (
            satements.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-400 border-opacity-35 "
              >
                <p className="text-gray-500 ">
                  <span className="font-semibold text-md text-gray-500">
                    Date :{" "}
                  </span>{" "}
                  {card?.date}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-md text-gray-500 mr-1">
                    Amount : $
                  </span>
                  {card?.amount}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-md text-gray-500 ">
                    Category :
                  </span>{" "}
                  {card?.category}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-md text-gray-500 ">
                    Transaction Type : 
                  </span>{" "}
                  {card?.transactionType}
                </p>
              </div>
            ))
          ) : (
            <li>No cards available. Add a new statement..</li>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankStatement;
