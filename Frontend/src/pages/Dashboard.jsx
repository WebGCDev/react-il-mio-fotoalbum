import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="grid place-items-center">
      <nav>
        <Link to="/new-photo" className="text-blue-500 hover:text-blue-700">
          New Photo
        </Link>
      </nav>
    </div>
  );
}
