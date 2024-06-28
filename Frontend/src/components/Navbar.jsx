import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  function handleLogout() {
    logout();
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-lg font-semibold" to="/">
          Home
        </Link>
        <div className="flex space-x-4">
          <Link className="text-white text-lg font-semibold" to="/dashboard">
            Dashboard
          </Link>
          {loggedIn && (
            <button
              onClick={handleLogout}
              className="text-white text-lg font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
