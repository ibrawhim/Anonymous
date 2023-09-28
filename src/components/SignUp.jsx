import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'




const SignUp = () => {
    const [exist, setExist] = useState('')
    let endpoint = 'http://localhost:4678/user/signup'
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
  return (
    <>
    <div className='bg-black text-white'>

    <section>
        <form onSubmit={formik.handleSubmit} style={mySection} className='border border-2 border-red-500 w-full lg:w-1/3 p-2 rounded'  action="">
            <small className='text-red-500 font-bold'>{exist}</small>
            <div className='my-2 '>
                <input type="text" className='w-full placeholder:text-sky-900 border-black py-2 rounded' placeholder='Username' name='username' onChange={formik.handleChange} value={formik.values.username}/>
            </div>
            <div className='my-2 '>
                <input type="text" className='w-full placeholder:text-sky-900 border-black py-2 rounded' placeholder='Email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
            </div>
            <div className='my-2 '>
                <input type="text" className='w-full placeholder:text-sky-900 border-black py-2 rounded' placeholder='Password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
            </div>
            <div>
                <button type='submit' className='w-full bg-white py-2 rounded'>Submit</button>
            </div>
            <div className='flex justify-between text-white'>
            <span>Have an account?</span>
            <Link to="/signin">Sign in Here</Link>
            </div>
        </form>
    </section>
    </div>
    </>
  )
}

export default SignUp