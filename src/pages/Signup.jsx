import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='w-screen flex flex-col'>
      <div className='bg-white '>
        <div className='flex flex-col  items-center justify-center'>
        <div className='text-blue-700 mt-8 mb-6 flex-1 '>
         <img className='w-40 h-12' src="./p6.png" alt="" />
        </div>
        <div className='text-3xl '>Make the most of your professional life</div>
        <form className='shadow-xl w-96  mt-5 p-5'>
          <div className='flex flex-col'>
            <label className='text-gray-500' htmlFor="">Email</label>
            <input className='border border-gray-400 h-10 rounded mt-2' type="text" />
          </div>
          <div className='flex flex-col mt-4'>
            <label className='text-gray-500' htmlFor="">Password (6 or more characters)</label>
            <input className='border border-gray-400 h-10 rounded mt-2' type="text" />
          </div>
          <p className='text-xs font-light py-5 px-6 text-center'>By clicking Agree  Join, you agree to the LinkedIn <span className='text-blue-600 cursor-pointer hover:text-blue-900'>User Agreement</span>, <span className='text-blue-600 cursor-pointer hover:text-blue-900'>Privacy Policy</span>, and <span className='text-blue-600 cursor-pointer hover:text-blue-900'>Cookie Policy</span> .</p>
          <button  className='bg-blue-800 text-white w-80 ml-4 h-12 text-xl rounded-3xl transition ease-in duration-200 hover:bg-blue-600' type='submit'>Agree and Join</button>
          <div className='flex items-center my-5'>
            <div className='w-full h-0.5 bg-gray-200'></div>
            <p className='mx-4'>or</p>
            <div className='w-full h-0.5 bg-gray-200'></div>
          </div>
          <button  className='border border-blue-600  text-blue-600 w-80 ml-4 h-12 text-lg font-semibold rounded-3xl transition ease-in duration-200 hover:bg-blue-100' type='submit'>Join with Google</button>
          <div className='flex items-center justify-center mt-5'>
            <p>Already on LinkedIn?</p>
            <Link className='ml-2 text-blue-500 cursor-pointer font-semibold hover:text-indigo-700' to='/'>Sign in</Link>
          </div>
        </form>
        <div className='flex items-center justify-center mt-5'>
          <p>Looking to create a page for a business?</p>
          <p className='ml-2 text-blue-500 cursor-pointer font-semibold hover:text-indigo-700'>Get Help</p>
        </div>
        </div>
        
      </div>
      <div className=' mt-16 p-3 flex justify-center items-center bg-stone-100  w-full'>

        <div className='flex mr-5'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 14" data-supported-dps="56x14" fill="currentColor" class="mercado-match" width="56" height="14" focusable="false">
  <g>
    <path class="background-mercado" d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"></path>
  </g>
</svg> 
<p className='text-xs text-gray-500 ml-2'>© 2021</p>
        </div>
        <div className='flex  text-xs text-gray-600 justify-between items-center'>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>About</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>Accessibility</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>User Agreement</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>Privacy Policy</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>Cookie Policy</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>Copyright Policy</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>Brand Policy</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>Guest Controls</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>Community Guidelines</div>
        <div className='mx-3 cursor-pointer hover:text-gray-900'>Language</div>
        </div>
      </div>
      
    </div>
  )
}
