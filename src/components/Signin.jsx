import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Swal from 'sweetalert2'




const Signin = () => {
    // const [incorrect, setIncorrect] = useState('')
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
                    Swal.fire({
                        title: 'Sign in successful.',
                        width: 500,
                        padding: '3em',
                        color: '#716add',
                        background: '#ae1e55',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/images/nyan-cat.gif")
                          left top
                          no-repeat
                        `
                      })
                    navigate('/profile')
                }
                else {
                Swal.fire({
                    title: 'Username or Password incorrect',
                    background: 'rgb(23 37 84)',
                    color: '#ae1e55',
                    width: '300px'
                })
                    navigate('/signin')
                    // setIncorrect(response.data.message)
                }
                
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    })

    let mySection = {
        position: 'absolute',
        // top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
  return (
    <div  className='my-5'>

    <section className='sm:mt-16' >
        <form onSubmit={formik.handleSubmit} style={mySection} className='lg:top-[30%] top-[50%] bg-blue-950 p-10 lg:rounded-2xl rounded opacity-90 lg:w-1/3 w-full  my-2 sm:my-10 md:my-20'  action="">
            <h1 className='text-white'>SIGN IN</h1>
            {/* <small className='text-red-500'>{incorrect}</small> */}
            <div className=' my-2'>
                <input type="text" className='w-full bg-[#ae1e55] border-black rounded' placeholder='Username' name='username' onChange={formik.handleChange}/>
            </div>
            <div className=' my-2'>
                <input type="text" className='w-full bg-[#ae1e55] border-black rounded' placeholder='Password' name='password' onChange={formik.handleChange}/>
            </div>
            <div className='my-2'>
                <button type='submit' className='w-full py-2 bg-[#ae1e55] rounded'>Submit</button>
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