import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


function AuthPage() {
    const navigate = useNavigate()
  return (
    <GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponseDecoded = jwtDecode(
        credentialResponse.credential)
    console.log(credentialResponseDecoded);
    sessionStorage.setItem("userName",JSON.stringify(credentialResponseDecoded.name))
    toast.success("Login  Success...")
    setTimeout(()=>{
        navigate('/dashboard')
      },2000)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  )
}

export default AuthPage