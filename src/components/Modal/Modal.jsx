import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addtopost } from '../../services/Linkslice'

export default function Modal({setmodal }) {
  const [textarea,settextarea]=useState('')
  const dispatch=useDispatch()
  const {username}=useSelector(state=>state.linkdin)

  function submithandler(e){
    e.preventDefault()
    let newobj= {

      id:3,
      img:'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      name:username,
      job:'Student at urmia university',
      time:'45min .',
      desc:textarea,
      like:'mahmod jafari and 23 others',
      comment:'34',
     }

    dispatch(addtopost(newobj))
    setmodal(false)
    
  }
  
  return (

    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50 '
    onClick={()=>setmodal(false)}
    >

      <div className='w-2/5 bg-white fixed rounded-xl  left-1/4 top-10 '
      onClick={(e)=>e.stopPropagation()}
      >
          <div className='flex justify-between p-4'>
              <p className='text-2xl'>Create a post</p>
                <p onClick={()=>setmodal(false)} className='text-2xl text-gray-500 cursor-pointer'>X</p>
          </div>
      <div className='w-full h-0.5 bg-gray-200'></div>  
      <div className='flex items-center m-4'>
      <img className='w-14 h-14 object-cover rounded-full border-2  ' src="./p1.jpg" alt="" />
        <div>
            <p className='font-semibold ml-4'>{username}</p>
        </div>
    </div>  
    <form className='mx-4'>
             <textarea  type="text" className='w-full h-40 outline-0' placeholder='What do you want to talk about?'
             onChange={(event)=>settextarea(event.target.value)}
             />

       <p className='text-blue-500 ml-5 mt-3 inline rounded-xl transition duration-200 ease-in font-semibold text-lg cursor-pointer p-3 hover:bg-blue-200'> Add Hashtag</p>


<div className='flex items-center mt-3 p-3'>
        <div className='flex' >
            

           
           <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-5 cursor-pointer hover:opacity-50 transition ease-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>      
            
         
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-5 cursor-pointer hover:opacity-50 transition ease-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-5 cursor-pointer hover:opacity-50 transition ease-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-5 cursor-pointer hover:opacity-50 transition ease-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-5 cursor-pointer hover:opacity-50 transition ease-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-5 cursor-pointer hover:opacity-50 transition ease-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-5 cursor-pointer hover:opacity-50 transition ease-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
</svg>

        </div>
        <div className='flex flex-1 items-center text-gray-500 px-5 border-l border-gray-600'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>
            </div>
            <p className='ml-2'>Anyone</p>
        </div>
        <button type='submit' className='bg-gray-200 text-gray-500 px-4 py-1 rounded-full hover:opacity-70 transition ease-in duration-150'
        onClick={submithandler}
        >Post</button>
    </div>
    

    </form>
        
    
    </div>  
    
    </div>
    
  )
}
