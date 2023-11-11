import React from 'react'
import ProfileCard from '../common/components/ProfileCard'
import { useAuth } from '../common/context'
import "./styles/home.css"

function Home() {
  const {currentUser,signout} = useAuth()
  return (
    <div className='home_hero'>
        <ProfileCard user={currentUser}/>
        <button onClick={signout} className="logout_btn">Logout</button>
    </div>
  )
}

export default Home