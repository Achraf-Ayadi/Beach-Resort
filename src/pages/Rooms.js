import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomList from '../components/RoomList'
import RoomFilter from '../components/RoomFilter'

import { useGlobalContext } from '../context'

function Rooms() {
  return (
    <>
      <div className='roomsHero'>
        <Banner title='our rooms'>
          <Link to='/rooms' className='btn-primary'>
            Back to home
          </Link>
        </Banner>
      </div>

      <RoomFilter />
      <RoomList />
    </>
  )
}

export default Rooms
