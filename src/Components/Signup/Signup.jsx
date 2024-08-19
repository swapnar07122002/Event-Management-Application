import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { api_uri } from '../../config';

const Signup = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[password,setPassword] = useState('');
  const Register = async (e) =>{
    e.preventDefault();
    // console.log('register signup frontend');
    if(!name || !email || !phone || !password){
      alert('fill the details')
    }
    sessionStorage.setItem('name',name);
    window.location.reload();

    const response = await fetch(`${api_uri}/api/auth/register`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        name:name,
        email:email,
        phone:phone,
        password:password
      })
    })
    const data = await response.json();
    console.log(data);
  }
  return (
    <>
    <div className="signup_container">
      <div className="signup_main">
        <div className="signup_grid"><h1>Sign Up</h1></div>
          <div className="signup_text">
            Already a member? <Link to='/login' className='link_signup'>Login here</Link>
          </div>
          <div className="signup_form">
            <form onSubmit={Register}>
              {/* name */}
              <div className="mb-3">
                <label htmlFor="name" className='form-label'>Enter Name</label>
                <input type="text" id='name' className='form-control' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
              </div>

              {/* email */}
              <div className="mb-3">
                <label htmlFor="email" className='form-label'>Enter Email</label>
                <input type="email" id='email' className='form-control' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              {/* phone */}
              <div className="mb-3">
                <label htmlFor="phone" className='form-label'>Enter Phone Number</label>
                <input type="text" id='phone' className='form-control' placeholder='Enter Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </div>

              {/* password */}
              <div className="mb-3">
                <label htmlFor="password" className='form-label'>Enter Password</label>
                <input type="password" id='password' className='form-control' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              <button className='btn_signup' type='submit'>Register</button>
            </form>
          </div>
      </div>
    </div>
    </>
  )
}

export default Signup;