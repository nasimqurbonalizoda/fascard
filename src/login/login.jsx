import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../reducers/auth';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      userName: e.target.username.value.trim(),
      password: e.target.password.value.trim(),
    };
    dispatch(login(user));
    navigate('/homepage');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-medium text-center mb-2">
          Log in to Exclusive
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Enter your details below
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            name="username"
            type="text"
            required
            placeholder="Username"
            className="w-full h-14 px-5 rounded border border-gray-300 focus:outline-none focus:border-[#DB4444] transition"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full h-14 px-5 rounded border border-gray-300 focus:outline-none focus:border-[#DB4444] transition"
          />

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#DB4444] text-white h-14 px-12 rounded font-medium hover:bg-[#c0392b] transition"
            >
              Log In
            </button>
            <Link to="/" className="text-[#DB4444] hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Don't have an account?{' '}
          <Link to="/" className="font-medium text-black hover:text-[#DB4444] underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;