"use client";
import React from "react";
import { BiSolidBank } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";

const BankAccounts2 = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const storedBanks = JSON.parse(localStorage.getItem("banks")) || [];
    setBanks(storedBanks);
  }, []);
  return (
    <div>
      <div className="mb-6">
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4">
          {banks.length > 0 &&
            banks.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-400 border-opacity-35 relative"
              >
                <p className="text-gray-500 font-semibold">{card?.name}</p>
                <p className="text-gray-400">A/C {card?.number}</p>
                <p className="text-2xl font-bold mt-2">$ {card?.balance}</p>
                <p className="absolute top-8 right-5 bg-purple-300 p-2 rounded-full bg-opacity-30">
                  <BiSolidBank className="text-2xl text-purple-600  " />
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BankAccounts2;
