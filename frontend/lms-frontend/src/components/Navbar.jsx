import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold  text-violet-500"><span className='text-3xl'>LearnIt.</span><span className='text-1xl'>com</span></div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="nav-buttons">
            Home
          </a>
          <a href="#courses" className="nav-buttons">
            Courses
          </a>
          <a href="#create" className="nav-buttons">
            Publish
          </a>
          
          <a href="#profile" className="nav-buttons">
            My Profile
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
