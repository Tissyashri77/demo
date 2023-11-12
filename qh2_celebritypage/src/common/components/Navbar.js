import React from 'react'
import "./styles/navbar.css"

function Navbar({moviesclicked, setMoviesClicked, contact}) {
  return (
    <div className='links'>
        <a href='/'>About</a>
        {
            !contact && <p onClick={() => {
                setMoviesClicked(!moviesclicked)
            }}>Recent Movies</p>
        }
        <a href='/contact'>Contact Manager</a>
    </div>
  )
}

export default Navbar