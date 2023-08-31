import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="http://localhost:3000" className="flex items-center">
          <img className="w-8 h-8 mr-2" src="/vaccine-6592893_1280.png" alt="logo" />
          <span className="text-xl font-semibold text-white dark:text-white">CovidPassport</span>
        </a>

         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
        <a href="/bookings" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Book now</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>  
      </li>
     
      
      
    </ul>
  </div>
      </div>
    </nav>
  );
};

export default Navbar;
