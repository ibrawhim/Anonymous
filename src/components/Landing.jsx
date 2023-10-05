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
            <div style={mySection} className='bg-blue-950 opacity-60 lg:py-20  py-10 text-center flex flex-col justify-center items-center rounded-xl lg:px-4 px-2 lg:w-1/3 md:w-1/2 w-full'>
              <p className='text-[#ae1e55] text-5xl'><FaHeadSideMask/></p>
              <h1 className='text-4xl font-bold text-[#ae1e55] '>Welcome</h1>
              <h2 className=' text-[#ae1e55] font-semibold'>Here you can send and receive message anonymously</h2>
              <Link className='border bg-[#ae1e55] rounded px-2 text-blue-950 my-3 font-semibold' to="/signup">Sign up</Link>
            </div>
        </div>
    </>
  )
}

export default Landing