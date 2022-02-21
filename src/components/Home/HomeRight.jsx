import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomeRight() {
    const [dropdown,setdropdown]=useState(true)
    const [dropdown2,setdropdown2]=useState(true)
    const [dropdown3,setdropdown3]=useState(true)


  return (
        <div className='w-3/12 pr-3  hidden lg:block '>
            <div className='w-full bg-white  rounded-lg mb-5 overflow-hidden flex flex-col text-center relative border-2 '>
                <div className='w-full h-16 bg-blue-200 border-b-2  '></div>

              <img className='w-20 h-20 object-cover rounded-full border-2 absolute top-6 left-1/3 ' src="./p1.jpg" alt="" />
                <Link to='profile' className='mt-14 font-medium cursor-pointer hover:underline transition duration-300 ease-in'>Mahta Rostami</Link>
                <p className='font-light text-xs pb-2 border-b-2 '>student at urmia university</p>
                <div className='flex  justify-between p-3 cursor-pointer hover:bg-gray-200'>
                    <p className='font-medium text-xs text-gray-500'>Who viewed your profile</p>
                    <p className='text-blue-700 font-bold text-xs'>123</p>
                </div>
                <div className='flex  justify-between px-3 cursor-pointer hover:bg-gray-200 border-b-2 py-2'>
                    <div className='flex flex-col'>
                    <p className='font-medium text-xs text-gray-500 self-start'>Connections</p> 
                    <p className='font-medium text-xs text-left  hover:bg-gray-200'>Manage your network</p>
                    </div>
                    <p className='text-blue-700 font-bold text-xs'>832</p>
                </div>
                <div className='flex items-center p-3 cursor-pointer hover:bg-gray-200  '>
                    <div className='text-gray-600 mr-1' >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                    </svg>
                           </div>
                    <p className='font-medium text-xs text-left  hover:bg-gray-200'>My items</p>
         
                </div>
                
                
            </div>


            <div className=' bg-white w-full border-2 rounded-lg'>
            <div>
            <div className='flex justify-between items-center p-2'>
                <p className='font-medium text-xs  '>Recent</p>
                <div className='cursor-pointer  hover:bg-blue-200 rounded-full ' onClick={()=>setdropdown(prevstate=>prevstate=!prevstate)}>
                    {dropdown ? (

                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>   
                    ):(
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                     </svg>

                    )}
                
                </div>
                
            </div>
            {dropdown ? (
                <>
                
                    <div className='flex pl-2 py-2 hover:bg-gray-200 text-gray-500 cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                        <p className='ml-2 font-medium text-xs text-gray-500'>collective  learning of Al and ...</p>
                    </div>
                    <div className='flex pl-2 py-2 hover:bg-gray-200 cursor-pointer '>
                        <p className='font-medium text-xs text-gray-500'>#</p>
                        <p className='ml-2 font-medium text-xs text-gray-500'>Talk:Machine learning latest</p>
                    </div>
                    <div className='flex pl-2 py-2 hover:bg-gray-200 cursor-pointer '>
                        <p className='font-medium text-xs text-gray-500'>#</p>
                        <p className='ml-2 font-medium text-xs text-gray-500'>industrial enginnering</p>
                    </div>
                    <div className='flex pl-2 py-2 hover:bg-gray-200 cursor-pointer '>
                        <p className='font-medium text-xs text-gray-500'>#</p>
                        <p className='ml-2 font-medium text-xs text-gray-500'>Front end developer</p>
                    </div>
                    <div className='flex pl-2 py-2 hover:bg-gray-200 cursor-pointer '>
                        <p className='font-medium text-xs text-gray-500'>#</p>
                        <p className='ml-2 font-medium text-xs text-gray-500'>react</p>
                    </div>
                </>
                ):(
                  <>
                  </>  
                )}
            </div>
            <div className='flex justify-between items-center p-2'>
                <p className='font-medium text-xs text-blue-600 '>Groups</p>
                <div className='cursor-pointer hover:bg-blue-200 rounded-full ' onClick={()=>setdropdown2(prevstate=>prevstate=!prevstate)}>
                    {dropdown2 ? (

                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>   
                    ):(
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                     </svg>

                    )}
                
                </div>
             </div>  
             {dropdown2 ?(
                 <>
                <div className='flex items-center text-gray-500 pl-2 py-2 hover:bg-gray-200 cursor-pointer' >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <p className='ml-2 font-medium text-xs text-gray-500'>IELTS TEST</p>
    
                </div>     
                <div className='flex items-center text-gray-500 pl-2 py-2 hover:bg-gray-200 cursor-pointer' >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <p className='ml-2 font-medium text-xs text-gray-500'>Machin learning and data ...</p>
    
                </div>  
                <div className='flex items-center text-gray-500 pl-2 py-2 hover:bg-gray-200 cursor-pointer' >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <p className='ml-2 font-medium text-xs text-gray-500'>Front end developer</p>
    
                </div>   
    
               </>
             ):(
                 <>
                 </>
             )}
             <div className='flex justify-between items-center p-2'>
                 <p className='font-medium text-xs text-blue-600 '>Events</p>
                 <div className='cursor-pointer  hover:bg-blue-200 rounded-full '>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
                 </div>
             </div>
             <div>
             <div className='flex justify-between items-center p-2'>
                <p className='font-medium text-xs text-blue-600 '>Followed Hashtags</p>
                <div className='cursor-pointer hover:bg-blue-200 rounded-full ' onClick={()=>setdropdown3(prevstate=>prevstate=!prevstate)}>
                    {dropdown3 ? (

                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>   
                    ):(
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                     </svg>

                    )}
                
                </div>
             </div> 
             {dropdown3 ? (
                <>
                
                    
                    <div className='flex pl-2 py-2 hover:bg-gray-200 cursor-pointer '>
                        <p className='font-medium text-xs text-gray-500'>#</p>
                        <p className='ml-2 font-medium text-xs text-gray-500'>Talk:deep learning </p>
                    </div>
                    <div className='flex pl-2 py-2 hover:bg-gray-200 cursor-pointer '>
                        <p className='font-medium text-xs text-gray-500'>#</p>
                        <p className='ml-2 font-medium text-xs text-gray-500'>medical enginnering</p>
                    </div>
                    <div className='flex pl-2 py-2 hover:bg-gray-200 cursor-pointer '>
                        <p className='font-medium text-xs text-gray-500'>#</p>
                        <p className='ml-2 font-medium text-xs text-gray-500'>back end developer</p>
                    </div>
                    <div className='flex pl-2 py-2 hover:bg-gray-200 cursor-pointer '>
                        <p className='font-medium text-xs text-gray-500'>#</p>
                        <p className='ml-2 font-medium text-xs text-gray-500'>vue and angular</p>
                    </div>
                </>
                ):(
                  <>
                  </>  
                )}




             </div>
             <div className='border-t-2 text-center'>
              <p className='p-3 text-sm font-semibold text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-black transition ease-in duration-200'>
                 Discover more
             </p>   
             </div>
             






            </div>
        </div>
  )
}
