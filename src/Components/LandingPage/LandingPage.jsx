import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const redirectToParent =() => {
    navigate('./eventoptions');
  }
  return (
    <>
    <div className="landing_container">
      <div className="landing_page">
        <h1>Welcome to EventHorizon</h1>
        <p>Your Complete Event Management Solution!</p>
        <button className='landing_btn' onClick={()=>redirectToParent()}>Get Started</button>
      </div>
    </div>
    </>
  )
}

export default LandingPage;