import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
// import Dropdown from './Dropdown';


const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [isloggedIn,setIsLoggedIn] = useState(false);
  const [userdata,setUserData] = useState();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = ()=>{
    setClicked(!clicked);
  }

  

  useEffect(()=>{
    const userdata = sessionStorage.getItem('name');
    console.log("User data:", userdata);
    setUserData(userdata);
    if(userdata){
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = ()=>{
    sessionStorage.removeItem('name');
    setIsLoggedIn(false);
    window.location.reload();
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

    return (
      <>
      <nav className='navbar'>
          <h1 className='navbar-logo'>Event Horizon</h1>
          <div className="menu-icon" onClick={handleClick}>
           <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={clicked ? "nav-menu active": "nav-menu"}>
            <li className='nav-item'>
              <Link to="/eventoptions" className="nav-links">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className="nav-links">About Us</Link>
            </li>
            <li className='nav-item'>
              <Link to="/createEvent" className="nav-links">Create Event</Link>
            </li>
            <li className='nav-item'>
              <Link to="/allEvents" className="nav-links">All Events</Link>
            </li>
            <li className='nav-item'>
              <Link to="/findEvents" className="nav-links">Find Events</Link>
            </li>

            

            {/* {
              !isloggedIn ? (
                <>
                <li className='nav-item'>
                 <Link to="/login" className="nav-links">Login</Link>
                </li>
                <li className='nav-item'> 
                 <Link to="/signup" className="nav-links">Sign up</Link>
                </li>
                </>
              ):
              (
                <>
                <li className='nav-item'>
                  <span className="nav-links">Welcome, <strong>{userdata}</strong></span>
                </li>
                <li className='nav-item'>
                  <Link className='nav-links logout' onClick={handleLogout}>Logout</Link>
                </li>
                </>
              )
            } */}


{isloggedIn ? (
           <>
            <li className='nav-item dropdown'>
              <div className="welcome-link">
                <span className="nav-links">
                  Welcome, <strong>{userdata}</strong>
                </span>
                <Link to="#" className="icon-link" onClick={toggleDropdown}>
                  <i className="fas fa-user"></i>
                </Link>
              </div>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/myprofile">My Profile</Link>
                  <Link to="/myregistrations">My Registrations</Link>
                  <Link className='nav-links logout' onClick={handleLogout}>Logout</Link>
                </div>
              )}
            </li>
          </>
          ) : (
            <>
              <li className='nav-item'>
                <Link to="/login" className="nav-links">Login</Link>
              </li>
              <li className='nav-item'>
                <Link to="/signup" className="nav-links">Sign up</Link>
              </li>
            </>
          )}
          </ul>
        </nav>
      </>
    )
  
}

export default Navbar;
