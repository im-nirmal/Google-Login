import React from 'react'
import DashboardImg from '../assets/dashboard.webp'
import {  useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const userName = JSON.parse(sessionStorage.getItem("userName"))
  // console.log(userName);

  //logout
  const handleLogout = ()=>{
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <>
      <div className="container mt-5 text-center">
        <h1>Hii <span className='text-info'>{userName?.split("@")[0]}</span></h1>
        <div>
          <h5>This is your dashboard, your info will be displayed here</h5>
          <img className='img-fluid' src={DashboardImg} alt="dashboard" />
        </div>
        <button onClick={handleLogout} className="btn btn-danger">LogOut</button>
      </div>
    </>
  )
}

export default Dashboard