import React from 'react'

import Room from './Room'

function RoomList({ rooms }) {
  if (rooms.length < 1) {
    return (
      <div className='empty-search'>
        <h3>no rooms matched your search parametres </h3>
      </div>
    )
  }

  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((room) => {
          return <Room room={room} key={room.id} />
        })}
      </div>
    </section>
  )
}

export default RoomList
