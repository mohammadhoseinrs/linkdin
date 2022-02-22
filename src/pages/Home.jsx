import React from 'react'
import { Link } from 'react-router-dom'
import Homecenter from '../components/Home/Homecenter'
import HomeLeft from '../components/Home/HomeLeft'
import HomeRight from '../components/Home/HomeRight'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <>
    
    <Navbar/>
    <div className='bg-stone-100 pb-20'>
      <div className='w-4/5 mx-auto pt-6'>
    <div className='flex items-start'>
        <HomeRight/>



        <Homecenter/>
        <HomeLeft />
        
    </div>
    </div>
    </div>
    </>
    
  )
}
