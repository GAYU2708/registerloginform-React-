import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUserData }) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored user data from localStorage
    const storedData = JSON.parse(localStorage.getItem('users'));

    if (storedData) {
      if (storedData.username === data.username && storedData.password === data.password) {
        console.log("Login Successfully");
        setUserData(data); 
        navigate('/dashboard');
      } else {
        console.log("Login Unsuccessful");
      }
    } else {
      console.log("Invalid credential, please register");
      navigate('/');
    }
  };

  return (
    <div className='d-flex flex-direction-column justify-content-center align-items-center vw-100 vh-100'>
      <div className='w-50 p-2'>
        <form onSubmit={handleSubmit} className='border p-4 rounded'>
          <div className='mb-3'>
            <label htmlFor='username' className='form-label'>
              Username:
              <input
                type='text' className='form-control w-90'
                name='username'
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                placeholder='Enter your username'
              />
            </label>
          </div>

          <div className='mb-3'>
            <label htmlFor='password'className='form-label' >
              Password:
              <input
                type='password'className='form-control w-90'
                name='password'
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                placeholder='Enter your password'
              />
            </label>
          </div>
          <button type='primary' className='btn btn-success'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
