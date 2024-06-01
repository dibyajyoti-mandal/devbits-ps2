import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Container = styled.div`
    gap:24px;
    
`
const Content = styled.div`
    flex:5;
`

const Lecture = () => {

    let path = useLocation().pathname.split("/")[2]
    console.log("path", path)

    const [lec, setLec] = useState({})
    useEffect(() => {
        const fetchLec = async () => {
            const res = await axios.get(`http://localhost:8000/api/lecture/find/${path}`)
            setLec(res.data)
            console.log(res.data)
        }
        fetchLec()
    }, [path])

    console.log("2nd", lec.courseId)

    return (
        <Container className='mx-10 pt-[20px]'>
            <Content className='font-bold text-2xl md:text-3xl'>{`${lec.title}`}</Content>
            <Content className='mt-4'>
                <iframe
                    width="80%"
                    height="500"
                    src={`${lec.videoUrl}`}
                    title='Video player'
                    allow='accelerometer, autoplay, gyroscope, picture-in-picture'
                    allowFullScreen
                >
                </iframe>
            </Content>
            <div className="text-md md:text-1xl font-semibold justify-between">
                <div>
                    <Link to={`/course/${lec.courseId}`}>
                        <Content className='shadow-md p-4'><span className='text-gray-500 mr-2'>Go back to Course page</span>  </Content>
                    </Link>
                </div>
                <Content className='p-3 font-bold'>Posted on: <span className='text-violet-600 '>{`${lec.createdAt}}`.slice(0,10)}</span></Content>

            </div>


        </Container>
    )
}

export default Lecture


// https://www.youtube.com/embed/uGrBHohIgQY