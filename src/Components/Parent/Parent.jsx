import React from 'react'
import { Link } from 'react-router-dom'
import './Parent.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PreviousEvents from '../PreviousEvents/PreviousEvents'

const Parent = () => {
  return (
    <>
        <Navbar/>
    <div className="parent_container"> 
    <img src="https://hire4event.com/blogs/wp-content/uploads/2020/01/Conference.jpg" alt="HeroImg" />
      <div className="parent_page">
        <h1>Welcome to EventHorizon</h1>
        <p>Your Complete Event Management Solution!</p>
      </div>
    </div>
    <PreviousEvents/>
    <Footer/>
    </>
  )
}

export default Parent