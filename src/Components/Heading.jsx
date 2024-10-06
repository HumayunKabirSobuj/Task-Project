"use client";
import React from "react";

import { BiSolidBank } from "react-icons/bi";

import { useState } from "react";
const Heading = () => {
  const [dateFilter, setDateFilter] = useState("12 months");

  const handleFilterClick = (filter) => {
    setDateFilter(filter);
  };
  return (
    <div>
     

     
    </div>
  );
};

export default Heading;
