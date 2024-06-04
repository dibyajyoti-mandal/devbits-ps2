import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import styled from "styled-components";
import Home from './pages/Home';
import Courses from './pages/Courses';
import Course from './pages/Course';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lecture from './pages/Lecture';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import CreateCourse from './pages/CreateCourse.jsx';
import NewLecture from './pages/NewLecture.jsx'

const Container = styled.div`
  background-color:#ffffff;
  height: 100vh;
`

function App() {
  return (
    <>
      <React.Fragment>
        <div className="App bg-white">
          <Navbar />
          
            <Container className='mt-[70px]'>
              {/* routing */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses">
                  <Route index element={<Courses />} />
                  
                </Route>
                <Route path="course">
                    <Route path=":id" element={<Course />} />
                  </Route>
                {/* <Route path="course" element={<Course />} /> */}
                <Route path="lecture">
                    <Route path=":id" element={<Lecture />} />
                  </Route>
                {/* <Route path="/lecture" element={<Lecture />} /> */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/create" element={<CreateCourse />} />
                {/* <Route path="/newlec" element={<NewLecture/>}/> */}
                <Route path="newlec">
                    <Route path=":id" element={<NewLecture />} />
                  </Route>
              </Routes>
              {/* routing end */}
            </Container>
        </div>
      </React.Fragment>

    </>
  );
}

export default App;

