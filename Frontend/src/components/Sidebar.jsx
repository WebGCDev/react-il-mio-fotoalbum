import React from 'react';

export default function Sidebar() {
  return (
    <div className="p-4 w-40 border flex flex-col items-center bg-gray-100">
      <button className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">
        Photography
      </button>
      <button className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">
        Location
      </button>
      <button className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">
        Message
      </button>
    </div>
  );
}
