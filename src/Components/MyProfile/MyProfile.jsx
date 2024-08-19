import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { api_uri } from '../../config';

const MyProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the backend API
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${api_uri}/api/auth/users`, {
          method: 'GET',
          headers: {
            // Include any necessary authentication headers here
            // For example, if using JWT:
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // console.log('User data:', data);
          // Filter the user data to find the logged-in user
          const loggedInUser = data.find(user => user.name === sessionStorage.getItem('name'));
          setUserData(loggedInUser);
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <h1>My Profile</h1>
        {userData ? (
          <div className="profile-details">
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone Number: {userData.phone}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default MyProfile;
