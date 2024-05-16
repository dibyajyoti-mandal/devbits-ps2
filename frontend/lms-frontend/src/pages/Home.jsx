import React from 'react'
import { SiStudyverse } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="p-[50px] text-left bg-green">
                <div className='font-bold'>All the skills you need in one place</div>
                <div>
                    With courses for free, it's the right time for the right skills and you. Your learning made easy!
                </div>
                <div className="flex justify-center mt-[50px]">
                    <div className="home-card"><FaBookReader className='mt-1 mr-4' />
                        200K+ learners</div>
                    <div className="home-card"><FaChalkboardTeacher className='mt-1 mr-4' />
                        1000+ Instructors</div>
                    <div className="home-card"><SiStudyverse className='mt-1 mr-4' />5000+ courses</div>
                </div>
                <div className='justify-center flex gap-8 mt-[50px]'>
                    <button class="btn-primary">
                        Explore Courses
                    </button>
                    <button class="btn-primary">
                        Create Course
                    </button>
                </div>

            </div>
        </>

    )
}

export default Home