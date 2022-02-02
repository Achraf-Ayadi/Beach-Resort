import { useRoomsContext } from '../context/roomsContext'
import Room from './Room'
import Title from './Title'

import React from 'react'

function FeaturedRooms() {
  const { featuredRooms } = useRoomsContext()

  return (
    <section className='featured-rooms'>
      <Title title='featured room' />
      <div className='featured-rooms-center'>
        {featuredRooms.map((featuredRoom) => {
          return <Room key={featuredRoom.id} room={featuredRoom} />
        })}
      </div>
    </section>
  )
}

export default FeaturedRooms
