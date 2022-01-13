import React from 'react'

function banner({ title, info, children }) {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <div></div>
      <p>{info}</p>

      {children}
    </div>
  )
}

export default banner
