import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async(e) =>{
    e.preventDefault();
    console.log("logout")
    dispatch(logout())
  }
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <nav className="bg-gray-900 p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold  text-violet-500"><span className='text-3xl'>LearnIt</span><span className='text-1xl text-white'>.com</span></div>
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
          <div className='flex text-white'>
            
            <input placeholder="Search" className='p-1 rounded-lg bg-gray-600'></input>
            <button><FaSearch className='m-2 mr-4 nav-buttons'/></button>
            
          </div>
          <Link to="/" className="nav-buttons">
            Home
          </Link>
          <Link to="courses" className="nav-buttons">
            Courses
          </Link>
          <Link to="create" className="nav-buttons">
            Publish
          </Link>
          {
            currentUser?(
              <Link to="login" className="nav-buttons flex border-double border p-2 rounded-lg hover:border-violet-500 mr-4" onClick={handleLogout}>
            <span>Logout</span> <IoPerson className='mt-1 ml-2'/>
          </Link>
            ):(
              <Link to="login" className="nav-buttons flex border-double border p-2 rounded-lg hover:border-violet-500 mr-4">
            <span>Login</span> <IoPerson className='mt-1 ml-2'/>
          </Link>
            )
          }
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
