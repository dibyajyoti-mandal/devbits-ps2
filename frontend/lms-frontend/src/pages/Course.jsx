import React from 'react'
import { Link } from 'react-router-dom'
import Lecture from './Lecture.jsx'
import LectureCard from '../components/LectureCard.jsx'
import styled from 'styled-components'
import '../index.css'



const Image = styled.img`
    background-color: #f3f4ff;
    object-fit: cover;
`

const Course = () => {
  return (
    <>
      <div className='mx-10 mt-[80px]'>
        <div className="head-section md:flex pt-6">
          <Image src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1' className='rounded-md flex:1 mr-4 w-[300px] md:w-[400px] lg:w-[500px] 
          md:h-[250px] ' />
          <div className='text-violet-600 md:text-2xl h-[200px]'> <span className='font-bold'> Supervised Machine Learning with Andrew</span>
            <div className="desc text-[15px] text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consectetur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum saepe maiores tenetur recusandae reiciendis commodi enim illum tempora molestiae nobis?
            </div>
            <div className="bottom-section flex justify-between">
              <div className="text-gray-400 text-xl">Andrew Ng</div>
              <div className="text-gray-400 text-xl">12 May 2023</div>
            </div>
            <button class="btn-primary mt-4 text-[15px] p-2 px-8">
              Enroll
            </button>
          </div>
        </div>
        <div className="lecture-section mt-[60px]">
          <h1 className='text-2xl text-violet-800 font-semibold'>Lectures</h1>
          <LectureCard />
          <LectureCard />
          <LectureCard />
          <LectureCard />
          <LectureCard />
          <LectureCard />
          <LectureCard />
        </div>

      </div>
    </>

  )
}

export default Course