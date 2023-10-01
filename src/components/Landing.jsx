import React from 'react'
import { Link } from 'react-router-dom'
// import Footer from './Footer'
import {FaHeadSideMask}  from 'react-icons/fa'


const Landing = () => {
  let mySection = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
  return (
    <>
        <div className=' w-[100%]' >
            <div style={mySection} className='lg:bg-blue-950 opacity-90 lg:py-20  py-10 text-center flex flex-col justify-center items-center rounded-xl bg-red-500 lg:px-4 px-2 lg:w-1/3 md:w-1/2 w-full'>
              <p className='lg:text-fuchsia-500 text-blue-950 text-5xl'><FaHeadSideMask/></p>
              <h1 className='text-4xl font-bold text-blue-950 lg:text-fuchsia-500'>Welcome</h1>
              <h2 className='lg:text-fuchsia-500 text-blue-950 font-semibold'>Here you can send and receive message anonymously</h2>
              <Link className='underline lg:text-red-500 text-xl text-fuchsia-500 font-semibold' to="/signup">Sign up here</Link>
            </div>
        </div>
    </>
  )
}

export default Landing