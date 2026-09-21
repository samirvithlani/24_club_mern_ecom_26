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
    //we will call api here and api will return response as
    //{token:"skasjiasjsajpiaskas",role:"admin"}
    //store token and role both in localSotrage
    localStorage.setItem("token","aksjnasashashjassihsabashasash") ////it will come from api
    localStorage.setItem("role","user") //it will come from api

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
