import { useGlobalContext } from '../context'
import Room from './Room'
import Loading from './Loading'
import Title from './Title'

import React from 'react'

function FeaturedRooms() {
  const { featuredRooms, loading } = useGlobalContext()

  return (
    <section className='featured-Rooms'>
      <Title title= "featured room" />
      <div className='featured-rooms-center'>
        {featuredRooms.map((featuredRoom) => {
          return loading ? (
            <Loading />
          ) : (
            <Room key={featuredRoom.id} room={featuredRoom} />
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedRooms
