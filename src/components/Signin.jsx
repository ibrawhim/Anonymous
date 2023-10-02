import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'




const Signin = () => {
    const [incorrect, setIncorrect] = useState('')
    // let endpoint = 'http://localhost:4678/signin'
    const endpoint = 'https://anonymous-back.onrender.com/signin'
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
            axios.post(endpoint,values)
            .then((response)=>{
                console.log(response);
                if (response.data.status==true){
                    localStorage.setItem('loginDetails',JSON.stringify(response.data.result))
                    navigate('/profile')
                }
                else {
                    navigate('/signin')
                    setIncorrect(response.data.message)
                }
                
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    })

    let mySection = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
  return (
    <div  className='my-5'>

    <section className='sm:mt-16' >
        <form onSubmit={formik.handleSubmit} style={mySection} className=' bg-blue-950 p-10 lg:rounded-2xl rounded opacity-90 lg:w-1/3 w-full  my-2 sm:my-10 md:my-20'  action="">
            <h1 className='text-white'>SIGN IN</h1>
            <small className='text-red-500'>{incorrect}</small>
            <div className=' my-2'>
                <input type="text" className='w-full border-black rounded' placeholder='Username' name='username' onChange={formik.handleChange}/>
            </div>
            <div className=' my-2'>
                <input type="text" className='w-full border-black rounded' placeholder='Password' name='password' onChange={formik.handleChange}/>
            </div>
            <div className='my-2'>
                <button type='submit' className='w-full bg-white py-2 bg-fuchsia-500 rounded'>Submit</button>
            </div>
            <div className='flex justify-between'>
                <span className='text-white'>New here?</span>
                <span className='text-red-500 underline'><Link to="/signup">Register here</Link></span>
            </div>
        </form>
    </section>
    </div>
  )
}

export default Signin