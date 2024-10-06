"use client";
import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Bank Accounts");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:justify-between justify-center gap-3 items-center mb-6">
        
        <div>
          <h1 className="text-2xl font-bold lg:text-left md:text-left text-center">Banking</h1>
          <div className="flex space-x-2 bg-gray-100  rounded-xl border border-gray-400 mt-2 border-opacity-30">
            <button
              className={`px-4 py-1 rounded ${
                activeTab === "Bank Accounts"
                  ? "bg-white shadow border border-gray-400 border-opacity-30 rounded-xl"
                  : "bg-transparent text-gray-500"
              }`}
              onClick={() => handleTabClick("Bank Accounts")}
            >
              Bank Accounts
            </button>
            <button
              className={`px-4 py-1 rounded ${
                activeTab === "Cards"
                  ? "bg-white shadow border border-gray-400 border-opacity-30 rounded-xl"
                  : "bg-transparent text-gray-500"
              }`}
              onClick={() => handleTabClick("Cards")}
            >
              Cards
            </button>
            <button
              className={`px-4 py-1 rounded ${
                activeTab === "Statements"
                  ? "bg-white shadow border border-gray-400 border-opacity-30 rounded-xl"
                  : "bg-transparent text-gray-500"
              }`}
              onClick={() => handleTabClick("Statements")}
            >
              Statements
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <label className="mr-2 flex items-center border-2 border-gray-300 rounded-lg py-1 px-2">
            <div className="flex items-center">
              <SiGooglegemini className="text-2xl mr-2" />{" "}
              <span className="font-medium">AI Categorisation</span>
            </div>
            <div className="ml-3 flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer "></div>
                <div className="absolute w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>
          </label>
          <IoMdNotificationsOutline className="text-2xl ml-3" />
          <div className="w-8 h-8 ml-3 rounded-full bg-gray-300">
            <Image
              src="/profile.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
