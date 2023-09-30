import React from 'react'
import { Link } from 'react-router-dom'
// import Footer from './Footer'


const Landing = () => {
  return (
    <>
        <div className=' w-[100%'>
            <Link className='text-red-500 text-2xl font-bold' to="/signup">Sign Up</Link>
        </div>
    </>
  )
}

export default Landing