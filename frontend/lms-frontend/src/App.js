import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import styled from "styled-components";
import Home from './pages/Home';
import Courses from './pages/Courses';
import Course from './pages/Course';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Route, Link, Routes} from 'react-router-dom';

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
              <Route path="/" element={<Home/>}/>
              <Route path="/courses">
                <Route index element={<Courses/>} />
                <Route path="course">
                  <Route path=":id" element={<Course/>}/>
                </Route>
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

