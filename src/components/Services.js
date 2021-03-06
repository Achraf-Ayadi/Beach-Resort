import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'
// import FaHiking from 'react-icons'
// import FaShuttleVan from 'react-icons'
// import FaBeer from 'react-icons'

function Services() {
  const services = [
    {
      icon: <FaCocktail />,
      title: 'Free Cocktails',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <FaHiking />,
      title: 'Endless Hiking',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free Shuttle',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <FaBeer />,
      title: 'Strongest Beer',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
  ]

  return (
    <section className='services'>
      <Title title='our services' />
      <div className='services-center'>
        {services.map((item, index) => {
          return (
            <article className='service' key={index}>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
