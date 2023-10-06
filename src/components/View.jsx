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
    // let content = {
    //     maxWidth: '1200px' ,
    //     margin: '0 auto',
    //     padding: '20px'
    // }
    // let mySection = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     border: 'blue',
    //     width: '100%',
    //     height: '100%'
    // }
  return (
    <>
        <div >
            <div  className={message.length==0 ? 'text-center text-white text-2xl': 'lg:mb-[200px] md:mb-[200%] mb-[200%] mx-10 lg:mx-5 my-10  grid lg:grid-cols-4 gap-2 md:grid-cols-2 sm:grid-cols-1 text-white z-[-2]'}>
            {message.length==0 ?  'Oops! no one has sent you a message yet' :
                message.map((item,index)=>(
                    <div key={index} className='border bg-blue-950'>
                        <div className='text-[#ae1e55]  px-2'>Anonymous {index+1}</div>
                        <div className='text-white h-[125px] text-ellipsis  my-2 px-2'>{item.message}</div>
                        <div className='text-white py-6 px-2'>
                            <div>Time: {item.myTime}</div>
                            <div className='text-[px]'>Date: {item.myDate}</div>
                        </div>
                        <button  className='w-full  bg-[#ae1e55] py-2' onClick={()=>deleteOne(item.myTime,item.myDate,item.message)}>Delete</button>
                    </div>
                ))
            }
            </div>
        </div>
    </>
  )
}

export default View