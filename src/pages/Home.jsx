import React from 'react'
import { Link } from 'react-router-dom'
import Homecenter from '../components/Home/Homecenter'
import HomeLeft from '../components/Home/HomeLeft'
import HomeRight from '../components/Home/HomeRight'

export default function Home() {
  return (
    <div className='flex items-start'>
        <HomeRight/>



        <Homecenter/>
        <HomeLeft />
        
    </div>
  )
}
