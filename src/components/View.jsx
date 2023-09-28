import axios from 'axios'
import React, { useEffect } from 'react'


const View = () => {

    let endpoint = 'http://localhost:4678/user/message';

    useEffect(() => {
        let myLogin = JSON.parse(localStorage.getItem('loginDetails'))
        // console.log(myLogin);
        axios.post(endpoint,myLogin)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>[
            console.log(error)
        ])
    }, [])
    
  return (
    <div>View</div>
  )
}

export default View