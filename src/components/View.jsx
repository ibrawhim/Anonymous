import axios from 'axios'
import React, { useEffect, useState } from 'react'



const View = () => {

    // let endpoint = 'https://anonymous-back.vercel.app/view';
    let endpoint = 'https://anonymous-back.onrender.com/view'
    let endpoint2 = 'https://anonymous-back.onrender.com/delete';
const [message, setMessage] = useState([])
    useEffect(() => {
        let myLogin = JSON.parse(localStorage.getItem('loginDetails'))
        axios.post(endpoint,myLogin)
        .then((result)=>{
            setMessage(result.data.response);
        })
        .catch((error)=>[
            console.log(error)
        ])
    }, [])
    const deleteOne = (time,date,message) => {
        axios.post(endpoint2,{time,date,message})
        .then((res)=>{
          setMessage(res.data.newResult);
        })
        .catch((err)=>{
            console.log(err);
        })
      
      }
    let content = {
        maxWidth: '1200px' ,
        margin: '0 auto',
        padding: '20px'
    }
  return (
    <>
        <div style={content} className=''>
            <div className='lg:mb-[200px] md:mb-[200%] mb-[200%]  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-white lg:mt-0 md:mt-0  lg:gap-20 gap-2'>
            { !message ? 'No message' :
                message.map((item,index)=>(
                    <div key={index} className='border bg-blue-950 lg:w-[250px] md:w-[250px] sm:w-[100%]'>
                        <div className='text-red-500 lg:text-fuchsia-500 px-2'>Anonymous {index+1}</div>
                        <div className='text-white h-[125px] text-ellipsis  my-2 px-2'>{item.message}</div>
                        <div className='text-white py-6 px-2'>
                            <div className='text-[]'>Time: {item.myTime}</div>
                            <div className='text-[px]'>Date: {item.myDate}</div>
                        </div>
                        <button  className='w-full lg:bg-fuchsia-500 bg-red-500 py-2' onClick={()=>deleteOne(item.myTime,item.myDate,item.message)}>Delete</button>
                    </div>
                    
                ))
            }
            </div>
        </div>
    </>
  )
}

export default View