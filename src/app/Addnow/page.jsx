import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <button className="border rounded-2xl font-semibold text-gray-500 text-accent w-[200px] hover:bg-blue-500 hover:text-white  px-4 py-2 transition">
        <Link href="/Addnow/Addbanks">Add Bank Accounts</Link>
      </button>
      <button className="border rounded-2xl font-semibold text-gray-500 text-accent w-[200px] hover:bg-blue-500 hover:text-white  px-4 py-2 transition">
        <Link href="/Addnow/Addcards">Add Bank Cards</Link>
      </button>
      <button className="border rounded-2xl font-semibold text-gray-500 text-accent w-[200px] hover:bg-blue-500 hover:text-white  px-4 py-2 transition">
        <Link href="/Addnow/Addstatements">Add Bank Statements</Link>
      </button>
    </div>
  );
};

export default page;
