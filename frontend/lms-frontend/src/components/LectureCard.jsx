import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const LectureCard = ({lecture}) => {
  return (
    <>
      <Link to={`/lecture/${lecture._id}`}>
        <div className="flex bg-gray-300 rounded-lg my-2 hover:text-violet-700">
          <div className='px-6  py-[20px] md:py-[40px]'>
            <FaCirclePlay />
          </div>
          <img src={`${lecture.thumbnail}`} className='w-[100px] h-[65px] md:w-[150px] object-cover md:h-[100px] rounded-lg '></img>
          <div className='px-6  py-[20px] md:py-[40px] font-bold'>{lecture.title}</div>
        </div>
      </Link>
    </>
  )
}

export default LectureCard