import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap
`

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get("http://localhost:8000/api/course/random")
            // console.log(res);
            // console.log("success in fetch");
            setCourses(res.data)
        }
        fetchCourses()
    }, [])

    return (
        <>

            <div className="md:m-[100px] mx-[30px]">

                <div className='flex p-4 justify-between'>
                    <div className='headings mt-1'>Get your Courses here...</div>
                    <Link to="/create">
                        <button class="btn-primary mt-1">
                            Create Course
                        </button>
                    </Link>
                </div>
                <Wrapper>
                    {courses.map(course => (
                        <Card key={course._id} course={course} />
                    ))}

                </Wrapper>

            </div>
        </>

    )
}

export default Courses