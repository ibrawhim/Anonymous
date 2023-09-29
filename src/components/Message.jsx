import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'



const Message = () => {
    // console.log(useParams());
    const [message, setMessage] = useState('')
    const [empty, setEmpty] = useState('')
    let {username} = useParams()
    
    let endpoint = 'http://localhost:4678/user/message'
    const date = new Date()
    let myTime = date.toLocaleTimeString()
    let myDate = date.toLocaleDateString()
    const sendMessage = () => {
        let values = {
            username,
            message,
            myDate,
            myTime
        }
        if (message==''){
            setEmpty('Input empty, kindly write a message')
        }else {
            axios.post(endpoint,values)
            .then((result)=>{
                console.log(result);
            })
            .catch((error)=>{
            console.log(error)
            })
        }
    }
    let myDiv = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
  return (
    <>
        <div>
            <section style={myDiv} className='lg:w-1/3 w-full bg-fuchsia-700 opacity-80 rounded py-8 px-5'>
                <p className='text-white text-xl py-2'>Send message anonymously to <span className='font-bold text-red-200'>{username}</span></p>
                <div className='w-full'>
                    <textarea className='border border-2 rounded-xl w-full bg-blue-950 placeholder:text-white' placeholder='Leave a message here' name="" id="" cols="30" rows="7" onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <small className='text-red-500 font-bold'>{empty}</small>
                <div className='w-full'>
                    <button onClick={sendMessage} className='w-full bg-blue-950 rounded py-[2px] text-white font-bold'>Send Message</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Message