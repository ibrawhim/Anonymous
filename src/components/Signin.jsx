import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'



const Signin = () => {
    const [incorrect, setIncorrect] = useState('')
    let endpoint = 'http://localhost:4678/user/signin'
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
    <div  >

    <section className='' >
        <form onSubmit={formik.handleSubmit} style={mySection} className=''  action="">
            <small className='text-red-500'>{incorrect}</small>
            <div className='my-2 py-2 px-2 border'>
                <input type="text" className=' border-black py-2' placeholder='Username' name='username' onChange={formik.handleChange}/>
            </div>
            <div className='my-2 py-2 px-2 border'>
                <input type="text" className=' border-black py-2' placeholder='Password' name='password' onChange={formik.handleChange}/>
            </div>
            <div>
                <button type='submit' className='w-full bg-white'>Submit</button>
            </div>
        </form>
    </section>
    </div>
  )
}

export default Signin