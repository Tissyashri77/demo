import React from 'react'
import "./styles/card.css"

function Card({data}) {
  return (
    <div className='card_container'>
        <div className='card_img'>
          <img src={data.img} alt={data.title}/>
        </div>
        <div className='card_content'>
          <h2>{data.title}</h2>
          <p className='rating'>{data.rating}</p>
          <p className='genre'>{data.genre}</p>
          <p className='desc'>{data.description}</p>

          <button onClick={() => {
            window.open(data.trailer_link)
          }}>Trailer</button>
        </div>
    </div>
  )
}

export default Card