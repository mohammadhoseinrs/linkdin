import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginNavbar() {
  return (
    <div className='w-4/5 mx-auto flex py-5'>
      <div className='text-blue-700 flex-1 '>
         <img className='w-32 h-10' src="./p6.png" alt="" />
      </div>
      <div className='flex justify-between'>
          <div className='flex items-center  justify-between '>
              <div className='flex flex-col items-center justify-center text-gray-500 pr-8 cursor-pointer hover:text-black transition ease-in'>
                  <div >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
</svg>
                  </div>
                  <p>Discover</p>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 pr-8 cursor-pointer hover:text-black transition ease-in'>
                  <div >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
</svg>
                  </div>
                  <p>People</p>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 pr-8 cursor-pointer hover:text-black transition ease-in'>
                  <div >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
                  </div>
                  <p>Learning</p>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 pr-4  cursor-pointer hover:text-black transition ease-in'>
                  <div >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
</svg>
                  </div>
                  <p>Jobs</p>
              </div>
              <Link to='/signup' className='pr-3 mr-3 pl-3 ml-1 py-2 font-semibold border-gray-600  text-gray-500 border-l cursor-pointer hover:bg-gray-300 hover:text-black transition ease-in'>
                  Join now
              </Link>
              <div className='px-3 py-2 border border-blue-600 rounded-3xl cursor-pointer hover:bg-blue-200 transition ease-in duration-150 text-blue-600 font-semibold '>Sign in</div>

          </div>

      </div>
     
    </div>
  )
}
