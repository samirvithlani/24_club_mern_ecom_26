import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const {register,handleSubmit}=useForm()

  const navigate =useNavigate()

  const subumitHandler = (data)=>{
    alert("loggedin...")
    //we are assuming the login person is user role or login person is admin role
    ///it is user we will redirect him to userNavbar
    navigate("/user")
  }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(subumitHandler)}>
          <div>
          <label>EMAIL</label>
          <input type='text' {...register("email")}></input>
          </div>
          <div>
            <label>PASSWORD</label>
            <input type='text'{...register("password")}></input>
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>
    </div>
  )
}
