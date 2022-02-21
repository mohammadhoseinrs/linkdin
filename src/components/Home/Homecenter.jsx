import React, { useState } from 'react'
import Posts from '../posts/Posts'
import fakedata from '../../fakedata'
import Modal from '../Modal/Modal'
import { useSelector } from 'react-redux'

export default function Homecenter() {
    const [modal,setmodal]=useState(false)
    const {list}=useSelector(state=>state.linkdin)
    
    
  return (
      
    <div className='lg:w-6/12 w-full '>
        <div>
            <div className=' h-36 rounded-lg border-2 bg-white '>
                <div className='flex mt-4 items-center '>
                <img className='w-14 h-14 object-cover rounded-full border-2 ml-4 ' src="./p1.jpg" alt="" />
                <button
                onClick={()=>setmodal(true)}
                 className='border h-12 flex-1 mx-4 text-sm font-medium rounded-full text-left pl-6 border-gray-500 text-gray-500 hover:bg-gray-300 hover:text-gray-900 transition ease-in duration-150'>
                     Start a post
                </button>

            </div>
            <div className='flex justify-between mx-6 my-2'>
                <div className='flex items-center p-3 rounded-lg transition ease-in duration-200 cursor-pointer hover:bg-gray-300'>
                    <div className='text-blue-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                         <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                    </div>
                    <p className='ml-3 text-gray-500 text-sm'>Photo</p>
                </div>

                <div className='flex items-center p-3 rounded-lg transition ease-in duration-200 cursor-pointer  hover:bg-gray-300'>
                    <div className='text-green-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                    </svg>
                    </div>
                    <p className='ml-3 text-gray-500 text-sm'>Video</p>
                </div>
              
            <div className='flex items-center p-3 rounded-lg transition ease-in duration-200 cursor-pointer  hover:bg-gray-300'>
                <div className='text-orange-500'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                </svg>
                </div>
                <p className='ml-3 text-gray-500 text-sm'>Event</p>
            </div>
            <div className='flex items-center p-3 rounded-lg transition ease-in duration-200 cursor-pointer  hover:bg-gray-300'>
                <div className='text-red-500'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                     <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                </svg>
                </div>
                <p className='ml-3 text-gray-500 text-sm'>Write Article</p>
            </div>


            </div>
              
            </div>
            <div className='my-2 flex items-center'>
                <div className='flex-1 h-0.5 bg-gray-300'></div>
                <div className='flex ml-3 items-center'>
                    <p className='text-xs text-gray-400'>Sort by :</p>
                    <p className='text-xs ml-1 font-semibold'> Top</p>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    </div>
                </div>
            </div>
            {list.map(fake=>(
                <Posts fake={fake}/>  
            ))}
            {fakedata.map(fake=>(
              <Posts fake={fake}/>  
            ))}

            {modal && <Modal setmodal={setmodal}  modal={modal}/>}


            

            
            



        </div>
    </div>
  )
}
