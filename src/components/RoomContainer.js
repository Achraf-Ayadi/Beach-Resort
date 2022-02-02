import React from 'react'
import { useFilterContext } from '../context/filterContext'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
// import Loading from './Loading'

function RoomContainer() {
  const { rooms, filtredRooms } = useFilterContext()
  
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={filtredRooms} />
    </>
  )
}

export default RoomContainer
