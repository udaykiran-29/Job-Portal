import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold dark:text-white">
          Job Board
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="dark:text-white">
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;