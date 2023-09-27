import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <>
        <div>
            <Link className='text-red-500 text-2xl font-bold' to="/signup">Sign Up</Link>
        </div>
    </>
  )
}

export default Landing