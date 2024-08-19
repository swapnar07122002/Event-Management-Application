import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Parent from './Components/Parent/Parent';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import EventsPage from './Components/EventsPage/EventsPage';
import EventDetails from './Components/EventDetails/EventDetails';
import FindEvents from './Components/FindEvents/FindEvents';
import MyRegistrations from './Components/MyRegistrations/MyRegistrations';
import MyProfile from './Components/MyProfile/MyProfile';
import AboutUs from './Components/AboutUs/AboutUs';
import EventList from './Components/EventList/EventList';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/eventoptions' element={<Parent/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/createEvent' element={<CreateEvent/>}/>
      <Route path='/events' element={<EventsPage/>}/>
      <Route path='/allEvents' element={<EventList/>}/>
      <Route path='/events/:id' element={<EventDetails/>}/>
      <Route path='/findEvents' element={<FindEvents/>}/>
      <Route path='/myregistrations' element={<MyRegistrations/>}/>
      <Route path='/myprofile' element={<MyProfile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
