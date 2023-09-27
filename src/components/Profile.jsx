import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Profile = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    let myDetails = JSON.parse(localStorage.getItem("loginDetails"))
    console.log(myDetails)
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
      <div   className='border border-2 flex justify-center items-center text-black'>
        <div className='border border-red-500 border-2'>
          <div style={myDiv} className='border'>
                <h1 className=''>{username}'s profile</h1>
                <p>Copy the link below to get anonymous messages</p>
                <a className='text-red-500'>http://localhost:5173/message/{username}</a><br />
                <Link to="">View Messages</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile