import React from 'react'
import topD from '../assets/topdesign.png'
import admin_log from '../assets/Bg.png'//form-wave
import admin_img from '../assets/Image3.png'//form-image
import { FaUser } from "react-icons/fa"; //user-icon-id
import { MdEmail } from "react-icons/md";//user-icon-email
import { FaEye } from "react-icons/fa";//user-icon-eye

const AdminLogin = () => {
  return (
    <div className='flex flex-col items-center border-4 border-black w-full h-screen'>
      <div className='flex flex-col items-center mb-8'>
        <img src={topD} alt="topdesign" className='mb-4' />
        <h1 className='text-2xl ml-14 font-bold self-start'>
          <span>Equity&nbsp;</span>
          <span className='text-emerald-500'>Funds</span>
        </h1>
      </div>

      {/* Center Box */}
      <div className='flex justify-center items-center w-[60%] h-[70%] overflow-hidden border-2 border-black'>
        {/* Left Side */}
        <div className='flex flex-col justify-center items-center w-[37%] '>
          <img className='w-full ' alt='admin_log' src={admin_log} />
        </div>
        {/* Right Side */}
        <div className='mb-10 flex flex-col justify-center items-center w-[63%]  p-4 relative'>
          <img className='relative w-56 right-[22rem] bottom-10 mt-4' src={admin_img} alt='admin_img' />
        
          <form className='absolute w-full max-w-xs mt-16'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Admin Login</h2>
            <div className='mb-4'>
              <div className='relative w-full'>
              <FaUser className='absolute left-2 top-2.5 text-gray-400' />
              <input
                className='bg-gray-300 placeholder-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='userid'
                type='text'
                placeholder='    User ID'
              /></div>
            </div>
            <div className='mb-4'>
            <div className='relative w-full'>
            <MdEmail className='absolute left-2 top-3 text-gray-400' />
              <input
                className='bg-gray-300 placeholder-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='    Email'
              />
              </div>
            </div>
            <div className='mb-6'>
            <div className='relative w-full'>
            <FaEye className='absolute left-2 top-3 text-gray-400' />
              <input
                className='bg-gray-300 placeholder-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='    Password'
              /></div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <button
                className='w-[45%] bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin