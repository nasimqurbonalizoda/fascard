import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registration } from '../reducers/auth';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      userName: e.target.username.value.trim(),
      phoneNumber: e.target.phone.value.trim(),
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim(),
      confirmPassword: e.target.confirmps.value.trim(),
    };
    dispatch(registration(user));
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-medium text-center mb-2">
          Create an account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your details below
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            name="username"
            type="text"
            required
            placeholder="Name"
            className="w-full h-14 px-5 rounded border border-gray-300 focus:outline-none focus:border-[#DB4444] transition"
          />
          <input
            name="phone"
            type="text"
            required
            placeholder="Phone number"
            className="w-full h-14 px-5 rounded border border-gray-300 focus:outline-none focus:border-[#DB4444] transition"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full h-14 px-5 rounded border border-gray-300 focus:outline-none focus:border-[#DB4444] transition"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full h-14 px-5 rounded border border-gray-300 focus:outline-none focus:border-[#DB4444] transition"
          />
          <input
            name="confirmps"
            type="password"
            required
            placeholder="Confirm password"
            className="w-full h-14 px-5 rounded border border-gray-300 focus:outline-none focus:border-[#DB4444] transition"
          />

          <button
            type="submit"
            className="w-full h-14 bg-[#DB4444] text-white rounded font-medium hover:bg-[#c0392b] transition"
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full h-14 flex items-center justify-center gap-4 border border-gray-300 rounded hover:bg-gray-50 transition"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.7663 12.2765C23.7663 11.4608 23.7001 10.6406 23.559 9.83813H12.2402V14.4591H18.722C18.453 15.9495 17.5888 17.2679 16.3233 18.1056V21.104H20.1903C22.4611 19.014 23.7663 15.9274 23.7663 12.2765Z" fill="#4285F4"/>
              <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"/>
              <path d="M5.50277 14.3002C5.00011 12.8099 5.00011 11.196 5.50277 9.70569V6.61475H1.51674C-0.185266 10.0055 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3002Z" fill="#FBBC04"/>
              <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#DB4444] underline hover:text-[#c0392b]">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;