import React, { useState } from 'react';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  const handleLogin =async (e)=>{
    e.preventDefault();
    dispatch(loginStart())
    try{
      const res = await axios.post("http://localhost:8000/api/auth/login", {email, password});
      console.log(res.data);
      dispatch(loginSuccess(res.data))
    }catch(err){
      console.log(err)
      dispatch(loginFailure())
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-violet-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl shadow-purple-950-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-violet-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-violet-600 text-white font-bold py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
              onClick={handleLogin}
            >
              Login
            </button>
            <a
              href="/signup"
              className="text-violet-600 hover:text-violet-700 font-medium"
            >
              New User?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;