import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const [data, setData] = useState({
        username: "",
        password: "",
        matchpwd: "",
    });
    const [error, setError] = useState({});
    const nav = useNavigate();

    const validate = () => {
        const newErrors = {};
        const userRegex = /^[A-Z].{4,23}$/;
        const pwdRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#!%@&(){}]).{8,24}$/;

        if (!data.username) {
            newErrors.username = "Username is required";
        } else if (!userRegex.test(data.username)) {
            newErrors.username = "Username should start with a capital letter and have a minimum length of 4 characters";
        }

        if (!data.password) {
            newErrors.password = "Password is required";
        } else if (!pwdRegex.test(data.password)) {
            newErrors.password = "Password should contain at least one uppercase letter, one lowercase letter, one symbol, and be 8-24 characters long";
        }

        if (!data.matchpwd) {
            newErrors.matchpwd = "Please confirm your password";
        } else if (data.password !== data.matchpwd) {
            newErrors.matchpwd = "Passwords should match";
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            localStorage.setItem('users', JSON.stringify(data));
            setData({
                username: "",
                password: "",
                matchpwd: "",
            });
            console.log("Registration is successful");
            console.log(data);
            nav('/login');
        } else {
            console.log("Registration is unsuccessful");
        }
    };

    return (
        <div className='d-flex align-items-center justify-content-center vw-100 vh-100'>
            <div className='w-50 p-2'>
                <form onSubmit={handleSubmit} className='border p-4 rounded'>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>Username:</label>
                        <input type='text'className='form-control' name='username' value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
                        {error.username && <h5 className="text-danger">{error.username}</h5>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'  className='form-label'>Password:</label>
                        <input type='password'className='form-control' name='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                        {error.password && <h5 className="text-danger">{error.password}</h5>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='matchpwd' className='form-label'>Confirm Password:</label>
                        <input type='password' className='form-control'name='matchpwd' value={data.matchpwd} onChange={(e) => setData({ ...data, matchpwd: e.target.value })} />
                        {error.matchpwd && <h5 className="text-danger">{error.matchpwd}</h5>}
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>Register</button>
                        <p>Already registered? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
