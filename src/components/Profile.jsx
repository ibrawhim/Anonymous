import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Profile = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    let myDetails = JSON.parse(localStorage.getItem("loginDetails"))
    setUsername(myDetails.username)
  }, [])

  
  let myDiv = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
  return (
    <>
        <div className='border border-red-500'>
          <div style={myDiv} className='border p-20 my-2 bg-blue-950 opacity-80 rounded-xl'>
                <h1 className='text-xl font-bold text-fuchsia-500'>Hi, {username}</h1>
                <p className=' my-2 text-fuchsia-500'>Copy the link below to get anonymous messages</p>
                <a className='text-red-500 my-2 hover:text-fuchsia-500'>https://regal-dasik-41ecda.netlify.app/message/{username}</a><br />
                <div className='my-5'>
                  <Link className='border py-2 rounded px-[2px] text-blue-950 bg-fuchsia-500 hover:bg-blue-950 hover:text-white' to="/view">View Messages</Link>
                </div>
          </div>
        </div>
    </>
  )
}

export default Profile