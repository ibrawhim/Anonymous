import axios from 'axios'
import React, { useEffect, useState } from 'react'



const View = () => {

    let endpoint = 'http://localhost:4678/user/view';
const [message, setMessage] = useState([])
    useEffect(() => {
        let myLogin = JSON.parse(localStorage.getItem('loginDetails'))
        console.log(myLogin);
        axios.post(endpoint,myLogin)
        .then((result)=>{
            setMessage(result.data.response);
            // setMessage(result.data.response)
            // console.log(message);
        })
        .catch((error)=>[
            console.log(error)
        ])
    }, [])
    
  return (
    <>
        <div>
            <div className='flex flex-col justify-center items-center'>

            {
                message.map((item,index)=>(
                    <div key={index} className='border my-2'>
                        <div className='text-white'>Anonymous {index+1}</div>
                        <div className='text-white'>{item.message}</div>
                        <div className='text-white'>
                            <span>{item.myTime}</span>
                            <span>{item.myDate}</span>
                        </div>
                    </div>
                    
                ))
            }
            </div>
        </div>
    </>
  )
}

export default View