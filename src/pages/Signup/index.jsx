import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/images/White logo-01.png"
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { loginValidation } from '../../validationSchemas';


const Signup = () => {
    const navigate = useNavigate()
    const [eye, setEye] = useState(false)
    const [eye2, setEye2] = useState(false)

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = (values) => {
        // window.localStorage.setItem("token", 'true')
        // navigate('/attendance')
    };

    const handleLoginRoute = () => {
        navigate("/login")
    }


    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
            <div className='w-[600px] overflow-auto no-scrollbar h-[700px] p-10 sm:p-4 rounded-xl border-2 border-white md:w-[100%] bg-transparent'>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginValidation}>
                    <Form>
                        <div className='flex justify-center'>
                            <img src={logo} className='w-44' alt="" />
                        </div>
                        <h1 className='text-white mt-4 text-center text-3xl sm:text-xl'>Welcome please singup</h1>
                        <div className='flex flex-col my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Name</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Name' type="text" id="name" name="name" />
                            <ErrorMessage className='text-white text-sm mt-2 ml-2' name="name" component="div" />
                        </div>

                        <div className='flex flex-col my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Email</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Email' type="email" id="email" name="email" />
                            <ErrorMessage className='text-white text-sm mt-2 ml-2' name="email" component="div" />
                        </div>

                        <div className='flex flex-col my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Phone Number</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Phone Number' type="text" id="phoneNumber" name="phoneNumber" />
                            <ErrorMessage className='text-white text-sm mt-2 ml-2' name="phoneNumber" component="div" />
                        </div>

                        <div className='flex flex-col relative my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Password</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Password' type={eye === false ? "password" : "text"} id="password" name="password" />
                            {eye === false ? <IoEyeOffSharp className='absolute right-3 bottom-3.5 cursor-pointer' onClick={() => setEye(!eye)} /> : <IoEyeSharp className='absolute right-3 bottom-3.5 cursor-pointer' onClick={() => setEye(!eye)} />}
                        </div>
                        <ErrorMessage className='text-white text-sm  ml-2' name="password" component="div" />

                        <div className='flex flex-col relative my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Confirm Password</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Confirm Password' type={eye2 === false ? "password" : "text"} id="confirmPassword" name="confirmPassword" />
                            {eye2 === false ? <IoEyeOffSharp className='absolute right-3 bottom-3.5 cursor-pointer' onClick={() => setEye2(!eye2)} /> : <IoEyeSharp className='absolute right-3 bottom-3.5 cursor-pointer' onClick={() => setEye2(!eye2)} />}
                        </div>
                        <ErrorMessage className='text-white text-sm  ml-2' name="confirmPassword" component="div" />

                        <div className='text-center mt-5'>
                            <button className='text-white mt-2 uppercase font-semibold border-3 border-white py-2 w-full px-5 rounded-lg outline-none bg-transparent transition-all ease-in-out hover:scale-[1.05]'>Signup</button>
                            <div className='mt-3 flex justify-between items-center gap-3 px-4'>
                                <div className='h-[2px] w-full bg-white rounded-lg'></div>
                                <p className='text-white font-semibold text-md'>OR</p>
                                <div className='h-[2px] w-full bg-white rounded-lg'></div>
                            </div>
                            <button onClick={handleLoginRoute} className='text-white mt-2 uppercase font-semibold border-3 border-white py-2 w-full px-5 rounded-lg outline-none bg-transparent transition-all ease-in-out hover:scale-[1.05]'>Already have an account?</button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

export default Signup