import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'




const SignUp = () => {
    const [exist, setExist] = useState('')
    let endpoint = 'https://anonymous-back.onrender.com/signup'
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
            axios.post(endpoint,values)
            .then((response)=>{
                console.log(response);
                if(response.data.status==false){
                    setExist(response.data.message)
                }
                else {
                    console.log(response);
                    navigate('/signin')
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
    <>
    <div className='py-2'>
    <section className='my-2'>
        <form onSubmit={formik.handleSubmit} style={mySection} className='opacity-70  w-full lg:w-1/3 p-10 lg:top-[30%] top-[50%] rounded-xl bg-blue-950 py-5 px-5 rounded my-2 sm:my-10 md:my-20'  action="">
            <h1 className='text-[#ae1e55] font-bold'>SIGN UP</h1>
            <small className='text-red-500 font-bold'>{exist}</small>
            <div className='my-2 '>
                <input type="text" className='w-full bg-[#ae1e55] placeholder:text-blue-950 border-black py-2 rounded text-white' placeholder='Username' name='username' onChange={formik.handleChange} value={formik.values.username}/>
            </div>
            <div className='my-2 '>
                <input type="text" className='w-full bg-[#ae1e55] placeholder:text-blue-950 border-black py-2 rounded text-white' placeholder='Email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
            </div>
            <div className='my-2 '>
                <input type="text" className='w-full bg-[#ae1e55] placeholder:text-blue-950 border-black py-2 rounded text-white' placeholder='Password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
            </div>
            <div>
                <button type='submit' className='w-full text-[#ae1e55] bg-blue-900 border border-fuchsia-800 text-xl font-bold py-1 rounded'>Submit</button>
            </div>
            <div className='flex justify-between text-white'>
            <span className='text-[#ae1e55] font-semibold'>Have an account?</span>
            <Link to="/signin" className='text-[#ae1e55] font-semibold underline'>Sign in Here</Link>
            </div>
        </form>
    </section>
    </div>
    </>
  )
}

export default SignUp