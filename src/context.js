import React, { useState, useContext, useEffect } from 'react'

import data from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  const [sortedRoom, setSortedRoom] = useState([])
  //   const [featuredRooms, setFeaturedRooms] = useState()

  const [searchFilter, setSearchFilter] = useState({
    type: 'all',
    capacity: 1,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breackfast: false,
    pets: false,
  })
  const handleChange = (e) => {
    const name = e.target.name
    const type = e.target.type
    const value = e.target.value
    console.log(name, type, value)
  }
  const maxPrice = Math.max(...rooms.map((item) => item.infos.price))
  const maxSize = Math.max(...rooms.map((item) => item.infos.size))

  console.log(rooms)
  console.log(maxSize)
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
    <AppContext.Provider
      value={{
        searchFilter,
        handleChange,
        rooms,
        featuredRooms,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
