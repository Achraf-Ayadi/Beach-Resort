import React from 'react'
import { useGlobalContext } from '../context'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading'

function RoomContainer() {
  const { rooms, loading, sortedRooms } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  )
}

export default RoomContainer
