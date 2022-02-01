import React from 'react'
import { Link } from 'react-router-dom'
import DefaultImage from '../images/defaultBcg.jpeg'

function Room({ room }) {
  const { name, slug, price } = room
  const { images } = room

  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || { DefaultImage }} alt='single room' />
        <div className='price-top'>
          <h6>{price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/singleroom/${slug}`} className='btn-primary room-link'>
          features
        </Link>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  )
}

export default Room
