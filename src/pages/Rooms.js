import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

function Rooms() {
  const { rooms } = useGlobalContext()
  console.log(rooms);
  return <h1>rooms</h1>
}

export default Rooms
