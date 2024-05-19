import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap
`

const Courses = () => {
    return (
        <>  
        <div className="md:m-[100px] mx-[30px]">

        
            <div className='headings mb-8'>Get your Courses here...</div>
            <Wrapper>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

                

            </Wrapper>

            </div>
        </>

    )
}

export default Courses