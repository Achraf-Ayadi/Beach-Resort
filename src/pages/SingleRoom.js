import React from 'react'

import Banner from '../components/Banner'
import { Link, useParams } from 'react-router-dom'
import { useRoomsContext } from '../context/roomsContext'

function SingleRoom() {
  const { rooms } = useRoomsContext()
  const { slug } = useParams()

  const singleRoom = rooms.filter((room) => room.slug === slug)[0]
  console.log(singleRoom)

  const {
    images,
    name,
    price,
    size,
    capacity,
    pets,
    breakfast,
    extras,
    description,
  } = singleRoom

  return (
    <>
      <div className='roomsHero'>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link>
        </Banner>
      </div>
      <section className='single-room'>
        <div className='single-room-images'>
          {images.map((image, index) => {
            return <img src={image} alt='single' key={index} />
          })}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size}SQFT </h6>
            <h6>
              max capacity:
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6> {pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <ul className='extras'>
          {extras.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </section>
    </>
  )
}

export default SingleRoom
