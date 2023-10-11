import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import copy from 'clipboard-copy'
import {FaCopy} from 'react-icons/fa'



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
  let myLink = `https://regal-dasik-41ecda.netlify.app/message/${username}`
  const copyLink = () => {
    copy(myLink)
    .then(()=>{
      alert('copied')
    })
    .catch(()=>{
      alert('not copied')
    })
  }
  return (
    <>
        <div className='border border-red-500'>
          <div style={myDiv} className='border p-20 my-2 bg-blue-950 opacity-80 rounded-xl'>
                <h1 className='text-xl font-bold text-[#ae1e55]'>Hi, {username}</h1>
                <p className=' my-2 text-[#ae1e55] font-semibold'>Copy the link below to get anonymous messages</p>
                <div className='flex'>
                <a className='text-[#ae1e55] my-2 hover:text-white underline'>https://regal-dasik-41ecda.netlify.app/message/{username}</a><br />
                <button onClick={copyLink} className='ms-4 lg:mt-0 mt-8 text-[#ae1e55]'><FaCopy/></button>
                </div>
                <div className='my-5'>
                  <Link className='border py-2 rounded px-[2px] text-blue-950 bg-[#ae1e55] hover:bg-blue-950 hover:text-white' to="/view">View Messages</Link>
                </div>
          </div>
        </div>
    </>
  )
}

export default Profile