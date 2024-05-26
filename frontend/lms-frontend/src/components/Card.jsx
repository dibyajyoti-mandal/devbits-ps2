import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {format} from 'timeago.js'
import axios from "axios"

const Image = styled.img`
    background-color: #f3f4ff;
    width: 100%;
    height: 150px;
    object-fit: cover;
`


const Card = ({course}) => {

  const [owner, setOwner]  = useState({})
  useEffect(()=>{
    const fetchOwner = async ()=>{
      const res = await axios.get(`http://localhost:8000/api/user/find/${course.owner}`);
      setOwner(res.data);
    };
    fetchOwner();
  }, [course.owner])
  return (
    <>
    <Link to="/course" >
      <div className='w-[250px] mb-[30px] cursor-pointer bg-gray-200 p-1 rounded-xl shadow-lg hover:shadow-purple-300 mx-2'>
        <Image src={course.thumbnail} className='rounded-md' />
        <div className='px-2'>
          <p className='title font-bold'>
            {course.title}
          </p>
          <div className='flex justify-between '>
            <p className='owner text-[12px] text-purple-800'>{owner.name}</p>
            <p className='owner text-[12px] text-purple-800'>{format(course.createdAt)}</p>
          </div>
        </div>
      </div>
    {/* </Link> */}
    </Link>
    </>

  )
}

export default Card