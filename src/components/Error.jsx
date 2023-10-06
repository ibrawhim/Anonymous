import React from 'react'
import {VscError}  from 'react-icons/vsc'
import { Link } from 'react-router-dom'


const Error = () => {
  let mySection = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
  return (
    <>
      <div>
          <section style={mySection}>
              <div className='flex flex-col justify-center items-center text-blue-950'>
                <span className='text-5xl'><VscError/></span>
                <p className='text-5xl text-center'>This is an Error Page</p>
                <Link to="/" className='underline'>Go home</Link>
              </div>
          </section>
      </div>
    </>
  )
}

export default Error