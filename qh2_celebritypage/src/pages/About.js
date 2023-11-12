import React, { useState } from 'react'
import MainContent from '../common/components/MainContent'
import Navbar from '../common/components/Navbar'
import Sam from '../assets/sam.png'
import MoviesList from '../common/components/MoviesList'
import "./styles/about.css"

function About() {
  const [moviesclicked, setMoviesClicked] = useState(false)
  return (
    <div className={moviesclicked ? 'app_hero opened' : 'app_hero'} onClick={() => {moviesclicked && setMoviesClicked(false)}}>
      <div className='app_container'>
        {/* Left Content */}
        <section className='app_left'>
          <Navbar contact={false} moviesclicked={moviesclicked} setMoviesClicked={setMoviesClicked} />
          <MainContent/>
        </section>

        {/* Right content */}
        <section className='app_right'>
          <img src={Sam} className="sam"/>
        </section>
      </div>
      {
        moviesclicked && <MoviesList/>
      }
    </div>
  )
}

export default About