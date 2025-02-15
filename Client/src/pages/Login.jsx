
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5002/login', formData);

      // Assuming the token is returned in the response
      const authToken = response.data.authToken;
      const role = response.data.role; 

      // Save the token and user_id to cookies or localStorage
      Cookies.set('Token', authToken);
      // Cookies.set('user_id', userId);
      sessionStorage.setItem('role',role);
      localStorage.setItem("Token",response.data.authToken);
      setIsLoggedIn(true)
      navigate('/');
    } catch (error) {
      console.error('Error logging in', error);
      alert('Password or Email wrong');
    }
  };

  return (
    <div>
      <section className="relative py-4 lg:py-11 font-poppins h-screen flex bg-gray-100">
        <div className="max-w-6xl px-1 mx-auto lg:px-6 flex ">
          <div className="flex flex-wrap items-center ">
            <div className="w-full lg:w-2/5">
              <div className="bg-[#6c6e8e] shadow-lg dark:bg-gray-900 p-11 ">
                <form action="" className="">
                  <div className="text-center mb-7">
                    {/* <span className="inline-block mb-3 font-semibold text-base text-white">
                      Login
                    </span> */}
                     <h2 className="text-3xl font-bold text-white dark:text-white">
                      Login
                    </h2>
                    <h2 className="text-3xl font-bold text-white dark:text-white">
                      GEAR UP SHOP
                    </h2>
                  </div>
                  <div className="relative flex flex-wrap mb-5">
                    <input
                      type="email"
                      className="relative w-full py-4 pl-4 mb-2 text-sm border rounded dark:text-black dark:border-gray-700 dark:bg-gray-700 md:mb-0"
                      placeholder="e.g:info@gmail.com"
                      required=""
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-black bg-[#a7a9c9] dark:text-gray-300 dark:bg-gray-800">
                      Email address
                    </span>
                  </div>
                  <div className="relative flex flex-wrap items-center mb-5">
                    <input
                      type="password"
                      className="relative w-full py-4 pl-4 mb-2 text-sm border rounded dark:text-gray-300 dark:border-gray-800 md:mb-0 dark:bg-gray-700"
                      placeholder="your password..."
                      required=""
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      className="absolute right-0 mr-3 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      {/* ... your eye icon path ... */}
                    </svg>
                    <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-black bg-[#a7a9c9] dark:text-gray-300 dark:bg-gray-800">
                      Password
                    </span>
                  </div>
                  <button
                    className="w-full px-6 py-4 mb-4 font-semibold text-base text-gray-200 bg-[#B31312] rounded dark:bg-blue-500 hover:text-blue-200 "
                    type="button"
                    onClick={handleLogin}
                  >
                    LOGIN
                  </button>
                  
  <button className=" w-full px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 bg-white">
    <img
      className="w-6 h-6"
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      loading="lazy"
      alt="google logo"
    />
    <span>Login with Google</span>
  </button>

                  <div className="mb-4 text-center">
                    <a
                      href="#"
                      className="text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300 dark:hover:text-blue-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  {/* ... social login buttons ... */}
                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                    Need an account?{' '}
                    <a
                      href="#"
                      className="font-bold text-base text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400"
                    >
                      Create an account
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="hidden w-full px-10 mb-16 lg:w-1/2 lg:mb-0 lg:block">
              <div className="text-center">
                <span className="text-4xl font-medium text-blue-600 dark:text-blue-400">
                Welcome to our store
                </span>
                <h2 className="mt-3 mb-6 text-4xl font-bold text-gray-800 dark:text-gray-400">
                Explore various car accessories on our  website  to get the best products for your car
                </h2>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;









