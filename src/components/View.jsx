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
            {
                message.map((item,index)=>(
                    <div key={index}>{item.message}</div>
                ))
            }
        </div>
    </>
  )
}

export default View