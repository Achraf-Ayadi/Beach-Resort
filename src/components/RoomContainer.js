import React from 'react'
import { useRoomsContext } from '../context/roomsContext'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
// import Loading from './Loading'

function RoomContainer() {
  const { rooms } = useRoomsContext()
  const sortedRooms = rooms
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  )
}

export default RoomContainer
