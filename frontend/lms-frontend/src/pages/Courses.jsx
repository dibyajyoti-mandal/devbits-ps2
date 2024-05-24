import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap
`

const Courses = () => {
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />



                </Wrapper>

            </div>
        </>

    )
}

export default Courses