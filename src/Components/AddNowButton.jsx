import Link from 'next/link';
import React from 'react'

const AddNowButton = () => {
  return (
    <div>
      <button className="border-2 border-opacity-45  border-dotted border-gray-500 text-purple-500 text-xl font-semibold     py-2 rounded-xl md:w-1/3 w-full">
        <Link href="/Addnow"> + Add Now</Link>
      </button>
    </div>
  );
}

export default AddNowButton
