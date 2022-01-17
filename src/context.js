import React, { useState, useContext, useEffect } from 'react'

import data from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  const [sortedRooms, setSortedRooms] = useState(rooms)
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
  useEffect(() => {
    fetchRooms(data)
  }, [])

  const featuredRooms = rooms.filter((room) => room.infos.featured === true)
  //   console.log(newRooms)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.type === 'checkbox' ? e.target.checked : e.target.value
    setSearchFilter({
      ...searchFilter,
      [name]: value,
    })
  }

  // console.log(searchFilter)
  const filterRooms = () => {
    let {
      type,
      capacity,
      minPrice,
      minSize,
      maxPrice,
      maxSize,
      breackfast,
      pets,
    } = searchFilter
    let tempRooms = [...rooms]
    if (type !== 'All') {
      const tempRooms = rooms.filter((item) => item.infos.type === type)
      // muss noch gemacht werden
      // setSortedRooms(tempRooms)
      // console.log(tempRooms)
    }
    if (capacity !== 1) {
      capacity = parseInt(capacity)
      const tempRooms = rooms.filter((item) => item.infos.capacity >= capacity)

      setSortedRooms(tempRooms)
      console.log(tempRooms)
    }
  }
  useEffect(() => {
    filterRooms()
  }, [searchFilter])
  // console.log(sortedRooms)
  const maxPrice = Math.max(...rooms.map((item) => item.infos.price))
  const maxSize = Math.max(...rooms.map((item) => item.infos.size))

  // console.log(rooms)
  // console.log(maxSize)

  return (
    <AppContext.Provider
      value={{
        sortedRooms,
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
