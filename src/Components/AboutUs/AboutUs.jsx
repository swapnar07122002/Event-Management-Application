import React from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className='about-container'>
      <h1>Our History</h1>
      <p>Our event management company was founded in 2023 with a passion for bringing people together through memorable and impactful events. Over the years, we have grown from organizing small community gatherings to orchestrating large-scale conferences and corporate functions.
         Our dedication to excellence and attention to detail have earned us a reputation as a trusted partner in event planning.</p>

      <h1>Our Mission</h1>
      <p>At Event Horizon, our mission is to create exceptional event experiences that inspire, connect, and leave a lasting impression. We strive to exceed our clients' expectations by delivering innovative solutions, personalized service, and flawless execution. 
        With every event we organize, our goal is to leave a positive impact on attendees and create memories that will be cherished for years to come. </p>

      <h1>Our Vision</h1>
      <p>Our vision is to become the premier event management company, recognized for our creativity, professionalism, and commitment to excellence. We aim to be industry leaders in delivering extraordinary events that set new standards for quality and innovation.
         By continually pushing boundaries and embracing new technologies, we seek to redefine the possibilities of event planning and create unforgettable experiences that captivate and inspire.</p>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs;