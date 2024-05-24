import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const LectureCard = () => {
  return (
    <>
      <Link to='/lecture'>
        <div className="flex bg-gray-300 rounded-lg my-2 hover:text-violet-700">
          <div className='px-6  py-[20px] md:py-[40px]'>
            <FaCirclePlay />
          </div>
          <img src='https://cdn.the-scientist.com/assets/articleNo/71687/iImg/52296/62dc0501-8dda-4bd7-9ba9-fa1a9b8c7cb4-l.webp' className='w-[100px] h-[65px] md:w-[150px] object-cover md:h-[100px] rounded-lg '></img>
          <div className='px-6  py-[20px] md:py-[40px] font-bold'>Lecture-1: Introduction to Machine Learning</div>
        </div>
      </Link>
    </>
  )
}

export default LectureCard