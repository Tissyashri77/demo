import React from 'react'
import "./styles/main.css"
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import Card from './Card'

function MainContent() {
  return (
    <div className='main_hero'>
        <h1 className='bio_name'>Samantha Ruth Prabhu</h1>
        <p className='bio_subname'>Indian Actor</p>
        <div className='bio'>
            <div className='dob'>
                <p>28 April 1987</p>
            </div>
            <div className='socials'>
                <FaFacebookSquare size={20}/>
                <AiFillInstagram size={20}/>
                <AiFillTwitterSquare size={20}/>
            </div>
        </div>

        <div className='content'>
            <p>Samantha Ruth Prabhu (born 28 April 1987) is an Indian actress who primarily works in Telugu and Tamil films. She is the recipient of several accolades, including four Filmfare Awards South. After a brief stint as a model while pursuing a degree in commerce, Samantha made her acting debut in the Telugu romance film Ye Maaya Chesave (2010), winning the Filmfare Award for Best Female Debut – South.</p>
        </div>


       
    </div>
  )
}

export default MainContent