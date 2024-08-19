import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { api_uri } from '../../config';

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const Submit = async (e)=>{
    e.preventDefault();

    if( !email || !password){
      alert('fill the details')
    }

    
    try {
      const login_response = await fetch(`${api_uri}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (login_response.ok) {
        // Handle successful login, e.g., redirect to dashboard
        console.log('Login successful');
        const logindata = await login_response.json();
        console.log(logindata);

        // localStorage.setItem('userData', JSON.stringify(logindata));
        sessionStorage.setItem('userId', logindata.userId);
        sessionStorage.setItem('name', logindata.username);
        // sessionStorage.setItem('accessToken', logindata.accessToken);
        
        navigate('/eventoptions');
      } else {
        // Handle login failure, e.g., display error message
        const errorData = await login_response.json();
        console.error('Login failed:', errorData);
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
  return (
    <>
    <div className="login_container">
      <div className="login_main">
        <div className="login_grid"><h1>Login</h1></div>
          <div className="login_form">
             <form onSubmit={Submit} action="POST">
                <div className="mb-3">
                <label htmlFor="email" className='form-label'>Enter Email</label>
                <input className='form-control' type="email" onChange ={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email'/>
                </div>
                
                <div className="mb-3">
                <label htmlFor="password" className='form-label'>Enter Password</label>
                <input className='form-control' type="password" onChange ={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password'/>
                </div>
                

                <button className='btn_login' type='submit'>Submit</button>
              </form>
          </div>

          <div className="login_text">
              Not a member?    
              <Link to='/signup' className='link_login'>Sign Up</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Login