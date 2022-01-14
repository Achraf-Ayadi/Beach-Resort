import React, { useState, useContext, useEffect } from 'react'

import data from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  const [sortedRoom, setSortedRoom] = useState([])
//   const [featuredRooms, setFeaturedRooms] = useState()

  const fetchRooms = (items) => {
    
    let tempItems = items.map((item) => {
      const id = item.sys.id
      const infos = item.fields
      const images = infos.images.map((image) => image.fields.file.url)
      const room = { id, infos, images }
      return room
    })
    
    setRooms(tempItems)

    return tempItems
  }

  const featuredRooms = rooms.filter((room) => room.infos.featured === true)
//   console.log(newRooms)
  useEffect(() => {
    fetchRooms(data)
  }, [])

  return (
    <AppContext.Provider value={{ rooms, featuredRooms }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
