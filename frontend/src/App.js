import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed import

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Changed variable name to camelCase

    return (
        <>
            <Router>
                <div className="App  bg-richblack-900  w-[100vw] h-[100vh] "> {/* Changed class name */}
                <Navbar />
                    <Routes>
                    <Route path="/login" element={<LoginPage setisLoggedin={setIsLoggedIn} />} />
                    <Route path="/signup" element={<Signup  setisLoggedin={setIsLoggedIn} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
