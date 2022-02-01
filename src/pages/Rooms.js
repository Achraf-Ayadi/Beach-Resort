import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'

function Rooms() {
  return (
    <>
      <div className='roomsHero'>
        <Banner title='our rooms'>
          <Link to='/' className='btn-primary'>
            Back to home
          </Link>
        </Banner>
      </div>

      <RoomContainer />
    </>
  )
}

export default Rooms
