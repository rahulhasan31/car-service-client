import { data } from 'autoprefixer';
import React, { useContext, useId, useState } from 'react';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [error, setError]=useState('')
  const {loginUser, user}=useContext(AuthContext)
  const location= useLocation()
  const navigate= useNavigate()
  
  const from=location.state?.from?.pathname||'/';

    const handleLoginSubmit= event=>{
         event.preventDefault()
         const form= event.target
         const email= form.email.value
         const password= form.password.value
         loginUser(email, password)
         .then(result=>{
          const user= result.user
         
          form.reset()
         
          const currentUser= {
            email : user.email
          }
          console.log(currentUser);


          fetch('https://genius-server-tau.vercel.app/jwt', {
            method : "POST", 
            headers : {
              'content-type' : 'application/json'
            },
            body :JSON.stringify(currentUser)
          })
          .then(res=> res.json())
          .then(data=> {
            console.log(data);
            localStorage.setItem('token', data.token)
                navigate(from,{replace:true})
          })





      
          
         })
         .catch(e=>{
          const msg= e.message
          const email= msg.email
          console.log(email);
         
           setError(msg)
         })

    }
    return (
        <div className="hero w-full">
  <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      
       <img className='w-3/4' src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10 ">
      <form onSubmit={handleLoginSubmit} className="card-body"> 
      <h1 className="text-5xl font-bold text-center">Login !</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a  href="/"  className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className='text-red-600'>{ error
        }</p>
       
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value=" Login" />
          
        </div>
      </form >
      <p className='text-center'>New to genius car <Link className='text-orange-600 font-bold' to={'/signup'}>Sign Up</Link> </p>
    </div>
  </div>
  <ToastContainer />
</div>
    );
};

export default Login;