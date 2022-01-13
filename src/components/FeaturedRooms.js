import { useGlobalContext } from '../context'
import React from 'react'

function FeaturedRooms() {
  const { id, name } = useGlobalContext()

  return <h1>{name}</h1>
}

export default FeaturedRooms
