import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import LectureCard from '../components/LectureCard.jsx'
import styled from 'styled-components'
import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { fetchSuccess, fetchStart } from '../redux/courseSlice.js'
import { enroll } from '../redux/userSlice.js'

const Image = styled.img`
    background-color: #f3f4ff;
    object-fit: cover;
`

const Course = () => {

  const dispatch = useDispatch()
  let path = useLocation().pathname.split("/")[2]
  const [course, setCourse] = useState({});
  const [courseowner, setCourseowner] = useState({})
  useEffect(() => {
    const data = async () => {
      const courseRes = await axios.get(`http://localhost:8000/api/course/find/${path}`)
      setCourse(courseRes.data)
      dispatch(fetchSuccess(courseRes.data));
      const res = await axios.get(`http://localhost:8000/api/user/find/${currentCourse.owner}`)
      setCourseowner(res.data)
    }
    data()
  }, [path, dispatch])
  const { currentUser } = useSelector((state) => state.user);
  const { currentCourse } = useSelector((state) => state.course)
  

  useEffect(() => {
    const fetchOwner = async () => {
      const res = await axios.get(`http://localhost:8000/api/user/find/${currentCourse.owner}`)
      setCourseowner(res.data)
    }
    fetchOwner()
  }, [])


  const [lectures, setLectures] = useState([])
  useEffect(() => {
    const fetchLec = async () => {
      const resLec = await axios.get(`http://localhost:8000/api/lecture/${path}`)
      setLectures(resLec.data)
    }
    fetchLec()
  }, [])

  const [tok, setTok] = useState("");
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    // console.log(userInfo.data.token)
    setTok(userInfo.data.token);
  }, []);

  const handleEnroll = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${tok}`
      }
    }
    currentUser.others.enrolled.includes(currentCourse._id) ?
      await axios.put(`http://localhost:8000/api/user/unenroll/${path}`, {},
        config
      )
      :
      await axios.put(`http://localhost:8000/api/user/enroll/${path}`, {},
        config
      )
      dispatch(enroll(currentCourse._id))
}



return (
  <>
    <div className='mx-10 mt-[80px]'>
      <div className="head-section md:flex pt-6">
        <Image src={`${currentCourse.thumbnail}`} className='rounded-md flex:1 mr-4 w-[300px] md:w-[400px] lg:w-[500px] 
          md:h-[250px] ' />
        <div className='text-violet-600 md:text-2xl h-[200px]'> <span className='font-bold'> {`${currentCourse.title}`}</span>
          <div className="desc text-[15px] text-black">
            {`${currentCourse.description}`}
          </div>
          <div className="bottom-section flex justify-between">
            <div className="text-gray-400 text-xl">{`${courseowner.name}`}</div>
            <div className="text-gray-400 text-xl">{`${currentCourse.createdAt}`.slice(0,10)}</div>
          </div>
          <button class="btn-primary mt-4 text-[15px] p-2 px-8" onClick={handleEnroll}>
            {currentUser.others.enrolled?.includes(`${path}`) ? "Enrolled" : "Enroll here"}
          </button>
        </div>
      </div>
      <div className="lecture-section mt-[60px]">
        <h1 className='text-2xl text-violet-800 font-semibold'>Lectures</h1>
        {lectures.map(lec =>
          <LectureCard lecture={lec} />
        )}
      </div>

    </div>

  </>

)
}

export default Course


