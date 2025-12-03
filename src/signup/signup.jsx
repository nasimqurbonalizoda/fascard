import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registration } from '../reducers/auth';

const Api = "http://37.27.29.18:8002/Account/register";

const Signup = () => {
  const navigate = useNavigate();
const dispatch=useDispatch()

  const registrUser = async (e) => {
    e.preventDefault();
   
   let user={
          userName: e.target["username"].value,
          phoneNumber: e.target["phone"].value,
          email: e.target["email"].value,
          password: e.target["password"].value,
          confirmPassword: e.target["confirmps"].value,
        }
    
      dispatch(registration(user))
      navigate("../login");
  };

  return (
    <div>
      <div className='mt-[100px]'>
        <div className="text-center flex justify-center flex-col m-auto">
          <h1 className='text-[36px]'>Create an account</h1>
          <p className='mt-[10px]'>Enter your details below</p>
          <form onSubmit={registrUser} className="mt-[30px] flex flex-col gap-[16px]">
            <input required name="username" type="text" placeholder="Name" className='text-start text-[18px] border w-[300px] md:w-[400px] h-[46px] px-[20px] border-gray-400 rounded-[4px] m-auto focus:outline-none focus:border-[#DB4444]' />
            <input required name="phone" type="text" placeholder="Phone number" className='text-start text-[18px] border w-[300px] md:w-[400px] h-[46px] px-[20px] border-gray-400 rounded-[4px] m-auto focus:outline-none focus:border-[#DB4444]' />
            <input required name="email" type="email" placeholder="Email" className='text-start text-[18px] border w-[300px] md:w-[400px] h-[46px] px-[20px] border-gray-400 rounded-[4px] m-auto focus:outline-none focus:border-[#DB4444]' />
            <input required name="password" type="password" placeholder="Password" className='text-start text-[18px] border w-[300px] md:w-[400px] h-[46px] px-[20px] border-gray-400 rounded-[4px] m-auto focus:outline-none focus:border-[#DB4444]' />
            <input required name="confirmps" type="password" placeholder="Confirm password" className='text-start text-[18px] border w-[300px] md:w-[400px] h-[46px] px-[20px] border-gray-400 rounded-[4px] m-auto focus:outline-none focus:border-[#DB4444]' />
            <button type="submit" className='bg-[#DB4444] text-white h-[46px] m-auto mt-[10px] rounded-[4px] w-[300px] md:w-[400px] hover:bg-[#c0392b] transition'>
              Create Account
            </button>
            <button type="button" className='h-[46px] flex items-center justify-center gap-[16px] m-auto border border-gray-400 rounded-[4px] w-[300px] md:w-[400px] hover:bg-gray-50 transition'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.7663 12.2765C23.7663 11.4608 23.7001 10.6406 23.559 9.83813H12.2402V14.4591H18.722C18.453 15.9495 17.5888 17.2679 16.3233 18.1056V21.104H20.1903C22.4611 19.014 23.7663 15.9274 23.7663 12.2765Z" fill="#4285F4" />
                <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                <path d="M5.50277 14.3002C5.00011 12.8099 5.00011 11.196 5.50277 9.70569V6.61475H1.51674C-0.185266 10.0055 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3002Z" fill="#FBBC04" />
                <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
              </svg>
              Sign up with Google
            </button>
          </form>

          <div className="flex mt-[20px] text-[17px] items-center justify-center gap-[10px]">
            <span>Already have account? /</span>
            <Link to="../login" className='underline text-[#DB4444]'>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;





// import axios from "axios";
// import React from "react";

// const Registration = () => {
//   async function registrUser(e) {
//     e.preventDefault();
//     console.log(e.target["username"].value);
//     try {
//       let { data } = await axios.post(
//         "http://37.27.29.18:8002/Account/register",
//         {
//           userName: e.target["username"].value,
//           phoneNumber: e.target["phone"].value,
//           email: e.target["email"].value,
//           password: e.target["password"].value,
//           confirmPassword: e.target["confirsmP"].value,
//         }
//       );
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={registrUser}>
//         <input name="username" placeholder="registr" />
//         <input name="phone" />
//         <input name="email" />
//         <input name="password" />
//         <input name="confirsmP" />
//         <button type="submit">Registration</button>
//       </form>
//     </div>
//   );
// };

// export default Registration;


