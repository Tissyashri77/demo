import React from 'react'
import "./styles/profilecard.css"

function ProfileCard({user}) {
  return (
    <div className='profile_hero'>
        <img src={user.photoURL} alt={user.displayName} className="profile_img"/>
        <h3>Hi 👋🏻 {user.displayName}</h3>
    </div>
  )
}

export default ProfileCard