import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../reducers/auth';
import { useDispatch } from 'react-redux';



const Login = () => {
  const navigate = useNavigate();

const dispatch=useDispatch()

  const handleLogin =  (e) => {
    e.preventDefault()

    let user={
         userName: e.target["username"].value.trim(),
        password: e.target["password"].value.trim(),
    }
    dispatch(login(user))
      navigate("/homepage"); 
  };

  return (
    <div>
      <div className='mt-[100px]'>
        <div className="text-center flex justify-center flex-col m-auto max-w-md">
          <h1 className='text-[36px] font-medium'>Log in to Exclusive</h1>
          <p className='mt-[10px] text-gray-600'>Enter your details below</p>

          <form onSubmit={handleLogin} className="mt-[40px] flex flex-col gap-[20px]">

            <input name="username" type="text"  required  placeholder="Username"
              className='text-start text-[18px] border w-[300px] md:w-[400px] h-[56px] px-[20px] border-gray-400 rounded-[4px] m-auto focus:outline-none focus:border-[#DB4444] transition'/>

            <input name="password"  type="password" required placeholder="Password"
              className='text-start text-[18px] border w-[300px] md:w-[400px] h-[56px] px-[20px] border-gray-400 rounded-[4px] m-auto focus:outline-none focus:border-[#DB4444] transition'/>

            <div className="flex justify-between items-center w-[300px] md:w-[400px] m-auto gap-4">
              <button type="submit"
                className='bg-[#DB4444] text-white h-[56px] px-[40px] rounded-[4px] font-medium hover:bg-[#c0392b] transition' >
                Log In
              </button>
              <Link to="/" className='text-[#DB4444] text-[16px] hover:underline'>
                Forgot Password?
              </Link>
            </div>
          </form>

          <div className="mt-[30px] text-[16px] text-gray-600">
            <span>Do you Have Any Account? </span>
            <Link to="/" className='text-black font-medium underline hover:text-[#DB4444]'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




















// import axios from "axios";
// import React from "react";

// const Login = () => {
//   async function login(e) {
//     e.preventDefault();
//     console.log(e.target["username"].value);
//     try {
//       let { data } = await axios.post("http://37.27.29.18:8002/Account/login", {
//         userName: e.target["username"].value,
//         password: e.target["password"].value,
//       });
//       localStorage.setItem("token", data.data);
//       console.log(data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={login}>
//         <input name="username" placeholder="login" />
//         <input name="password" />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
