import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signin } from '../../services/Linkslice'


export default function Logintemp() {
    const dispatch=useDispatch()

    const Navigate=useNavigate()

    function changehandler(event){
        dispatch(signin(event.target.value))
    }
  return (
      <>
    <div className='flex '>
        <div className='flex-1 '>
            <div className='pl-32 pt-20'>
            <div className='text-5xl font-extralight text-amber-900'>
                <p >Welcome to your</p>
                <p className='py-4'>professional community</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}>
            <input className='w-96 h-12 border outline-none pl-3 rounded-lg mb-5 mt-12' type="text" name="" id="" placeholder='Username' 
            onChange={changehandler}
            />
            <div className='w-96 h-12 border flex justify-between items-center pl-3 rounded-lg'>
                <input className='w-full h-full outline-none'  type="password" placeholder='Password'/>
                <p className='px-3 py-1 rounded-lg transition ease-in duration-200 cursor-pointer hover:bg-gray-300'>Show</p>
            </div>
            <div className='my-5 hover:text-blue-700'>
            <a href="">Forgot password?</a>

            </div>
            <button onClick={()=>Navigate('/home')} className='bg-blue-800 text-white w-96 h-12 text-xl rounded-xl transition ease-in duration-200 hover:bg-blue-600' type='submit'>Sign in</button>
            </form>
            </div>
        </div>
        <div className='flex-1 mt-10'>
            <img className='' src="./p7.png" alt="" />
        </div>
        
        
    </div>
    
    </>
  )
}
