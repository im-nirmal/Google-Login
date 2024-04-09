import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="339516423489-liji9mgptpo6gq4uqmukpsfjurcn6o4a.apps.googleusercontent.com">
      <App/>
    </GoogleOAuthProvider>;

    </BrowserRouter>
   
  </React.StrictMode>,
)
