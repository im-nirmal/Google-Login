import React, { useState } from 'react'
import LoginImg from '../assets/Login.jpg'
import { Form, FloatingLabel } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthPage from './AuthPage';

function Login({insideRegister}) {
  const navigate = useNavigate()
  const [userInputs,setUserInputs] = useState({
    username:"",email:"",password:""
  })
  console.log(userInputs);

  //register
  const handleRegister = (e)=>{
    e.preventDefault()
    if(userInputs.username && userInputs.email && userInputs.password){
      toast.success("Registration Success... Please Login")
      setUserInputs({username:"",email:"",password:""})
      setTimeout(()=>{
        navigate('/')
      },2000)
    }else{
      toast.warning("Please fill the details completely!!!")
    }
  }

  //login
  const handleLogin = (e)=>{
    e.preventDefault()
    if(userInputs.email && userInputs.password){
      toast.success("Login  Success...")
      sessionStorage.setItem("userName",JSON.stringify(userInputs.email))
      // console.log(userInputs.username);
      setUserInputs({email:"",password:""})
      setTimeout(()=>{
        navigate('/dashboard')
      },2000)
    }else{
      toast.warning("Please fill the details completely!!!")
    }
  }

  return (
    <>
      <div style={{width:'100%', height:'100vh'}} className="d-flex justify-content-center align-items-center">
      <div className="container w-75">
        <div className="card-shadow p-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src={LoginImg} alt="Login" />
            </div>
            <div className="col-lg-6 ">
              <h1 className='fw-bolder'>WELCOME</h1>
              <h5 className='fw-bolder mt-2'>Sign in to your Account</h5>
              <Form>
              { insideRegister &&
                <FloatingLabel
                controlId="floatingInputName"
                label="Username"
                className="mb-3"
              >
                <Form.Control value={userInputs.username} onChange={e=>setUserInputs({...userInputs,username:e.target.value})} type="text" placeholder="Username" />
              </FloatingLabel>
              }

                <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})} type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})} type="password" placeholder="Password" />
              </FloatingLabel>

              { insideRegister ?
                <div className="mt-3 text-center">
                <button onClick={handleRegister} className="btn btn-primary">Register</button>
                <p>Already have an account? Click here to <Link to={'/'}className='text-success'>Login</Link></p>
              </div>
                :
              <div className="mt-3 text-center">
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
                <p>Already have an account? Click here to <Link to={'/register'}className='text-success'>Register</Link></p>
              </div>
              }

              </Form>
              <h3 className='text-center'>OR</h3>
              <div className='text-center'>
                <button className="btn btn-warning "><AuthPage/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Login