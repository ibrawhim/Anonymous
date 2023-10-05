import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'



const Message = () => {
    const [message, setMessage] = useState('')
    const [empty, setEmpty] = useState('')
    const [small, setSmall] = useState('')
    let {username} = useParams()
    
    let endpoint = 'https://anonymous-back.onrender.com/message'
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
                setMessage('')
                if(result.data.status==true){
                    setEmpty(result.data.message)
                }

            })
            .catch((error)=>{
                // if(error){
                //     setSmall(result.data.message)
                // }
            })
        }
    }
    const maxLength = 200; 
    useEffect(() => {
        const charactersLeft = maxLength - message.length;
        const countColor = charactersLeft < 0 ? 'red' : '#333';
        document.getElementById('count').textContent = charactersLeft;
        document.getElementById('count').style.color = countColor;
      }, [message]);
    let myDiv = {
        position: 'absolute',
        // top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
  return (
    <>
        <div className=''>
            <div className='text-4xl text-red-500'>{small}</div>
            <section style={myDiv} className='lg:top-[30%] top-[50%] lg:w-1/3 w-full bg-blue-950 opacity-80 rounded-xl opacity-90 lg:w-1/3 w-full  my-2 sm:my-10 md:my-20 px-3'>
                <p className='text-blue-950 text-xl py-2'>Send message anonymously to <span className='font-bold text-red-200'>{username}</span></p>
                <div className='w-full'>
                    <textarea id="textArea" className='border border-2 text-white rounded w-full bg-[#ae1e55] placeholder:text-blue-950' placeholder='Leave a message here' name="" cols="30" rows="7" onChange={(e)=>setMessage(e.target.value)} maxLength={maxLength} value={message}></textarea>
                    <div id="charCount" class="text-sm text-blue-950">Characters left: <span id="count" class="font-bold">200</span></div>

                </div>
                <small className='lg:text-blue-950  font-bold'>{empty}</small>
                <div className='w-full py-3'>
                    <button onClick={sendMessage} className='w-full bg-blue-950 rounded py-[2px] text-[#ae1e55] font-bold'>Send Message</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Message