import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='defaultHero'>
      <Banner title='404' info='this page not found'>
        <Link className='btn-primary' to='/'>
          return to home
        </Link>
      </Banner>
    </div>
  )
}

export default Error
