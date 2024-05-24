import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    gap:24px;
    
`
const Content = styled.div`
    flex:5;
`

const Lecture = () => {
    return (
        <Container className='mx-10 pt-[20px]'>
            <Content className='font-bold text-2xl md:text-3xl'>Lecture-1: Introduction to Machine Learning</Content>
            <Content className='mt-4'>
                <iframe
                    width="80%"
                    height="500"
                    src='https://www.youtube.com/embed/yIaXoop8gl4'
                    title='Video player'
                    allow='accelerometer, autoplay, gyroscope, picture-in-picture'             
                    allowFullScreen       
                >
                </iframe>
            </Content>
            <div className="text-md md:text-1xl font-semibold justify-between">
                <div>
                    <Link to="/course">
                        <Content className='shadow-md p-4'><span className='text-gray-500 mr-2'>Go to Course:</span>  Supervised Machine Learning with Andrew</Content>
                    </Link>
                </div>
                <Content className='text-violet-600 p-3'>23 May 2023</Content>

            </div>


        </Container>
    )
}

export default Lecture