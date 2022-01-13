import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='defaultHero'>
      <Banner title='luxurious rooms' info='delux rooms starting at 299$'>
        <Link to='/rooms'></Link>
      </Banner>
    </div>
  )
}

export default Hero
