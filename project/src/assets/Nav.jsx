import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-400 h-24 flex items-center fixed w-full z-50 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
          HURRAIRA SHAFQAT TECHNICAL
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Navigation Menu */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-y-4 md:gap-x-8 lg:gap-x-16 text-white absolute md:static top-24 left-0 w-full md:w-auto bg-blue-400 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About Us</li>
          <li className="hover:text-gray-200 cursor-pointer">Image Gallery</li>
          <li className="hover:text-gray-200 cursor-pointer">Our Team</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact Us</li>
        </ul>
      </div>
      {/* <div className="flex gap-x-8 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About Us</Link>
          <Link to={"/service"}>Services</Link>
          <Link to={"/career"}>Careers</Link>
          <Link to={"/contact"}><button className="border-2 px-5 py-1 bg-[#45BFE3] rounded-md">Contact Us</button></Link>

        </div> */}
    </div>


 


  );
}

export default Nav;