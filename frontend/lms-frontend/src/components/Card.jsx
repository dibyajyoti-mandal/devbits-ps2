import React from 'react'
import styled from 'styled-components'


const Image = styled.img`
    background-color: #f3f4ff;
    width: 100%;
    height: 150px;
    object-fit: cover;
`


const Card = () => {
  return (
    <>  
        <div className='w-[250px] mb-[30px] cursor-pointer bg-gray-200 p-1 rounded-xl shadow-lg hover:shadow-purple-300'>
        <Image src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=1' className='rounded-md'/>
        <div className='px-2'>
        <p className='title font-bold'>
            Supervised Machine Learning
            with Andrew 
        </p>
        <div className='flex justify-between '>
        <p className='owner text-[12px] text-purple-800'>Andrew Ng</p>
        <p className='owner text-[12px] text-purple-800'>23 May 2023</p>
        </div>
        </div>
        </div>
        
    </>
    
  )
}

export default Card