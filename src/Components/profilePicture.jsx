import React from 'react'
import profilePicture from "../Assets/profile_picture.jpg";
import './profilePicture.css';
export default function Picture() {
  return (
    <img src={profilePicture} className='profile-picture' ></img>
  )
}
