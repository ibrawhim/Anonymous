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
  return (
    <>
        <div>
            <section>
                <p>Send a message to {username}</p>
                <div>
                    <textarea className='border border-2' name="" id="" cols="30" rows="5" onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <small className='text-red-500 font-bold'>{empty}</small>
                <div>
                    <button onClick={sendMessage} className=''>Send Message</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Message