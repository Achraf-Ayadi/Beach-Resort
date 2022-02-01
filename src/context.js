import React, { useState, useContext, useEffect } from 'react'

import data from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortedRooms, setSortedRooms] = useState([])
  const [searchFilter, setSearchFilter] = useState({
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  })

  const fetchRooms = (items) => {
    setLoading(true)
    let tempItems = items.map((item) => {
      const id = item.sys.id
      const infos = item.fields
      const images = infos.images.map((image) => image.fields.file.url)
      const room = { id, infos, images }
      return room
    })
    setLoading(false)
    setRooms(tempItems)
    setSortedRooms(tempItems)
  }
  // console.log(rooms)
  useEffect(() => {
    fetchRooms(data)
  }, [])

  // const handleChange = (e) => {
  //   const name = e.target.name
  //   const value = e.type === 'checkbox' ? e.target.checked : e.target.value
  //   setSearchFilter({
  //     ...searchFilter,
  //     [name]: value,
  //   })
  // }

  // const featuredRooms = rooms.filter((room) => room.infos.featured === true)

  // const filterRooms = () => {
  //   let {
  //     type,
  //     capacity,
  //     minSize,
  //     maxPrice = Math.max(...rooms.map((item) => item.infos.price)),
  //     price = maxPrice,
  //     maxSize = Math.max(...rooms.map((item) => item.infos.size)),
  //     breakfast,
  //     pets,
  //   } = searchFilter

  //   let tempRooms = []

  //   // filter by type
  //   if (type !== 'all') {
  //     tempRooms = rooms.filter((room) => room.infos.type === type)
  //   }
  //   // filter by capacity
  //   if (capacity !== 1) {
  //     tempRooms = rooms.filter((room) => room.infos.capacity >= capacity)
  //   }
  //   // filter by price
  //   tempRooms = rooms.filter((room) => room.infos.price <= price)
  //   //filter by size
  //   tempRooms = rooms.filter(
  //     (room) => room.infos.size >= minSize && room.infos.size <= maxSize
  //   )
  //   //filter by breakfast
  //   if (breakfast) {
  //     tempRooms = rooms.filter((room) => room.infos.breakfast === true)
  //   }
  //   //filter by pets
  //   if (pets) {
  //     tempRooms = rooms.filter((room) => room.infos.pets === true)
  //   }
  //   setSortedRooms(tempRooms)
  // }

  // useEffect(() => {
  //   filterRooms()
  // }, [searchFilter])

  return (
    <AppContext.Provider
      value={{
        sortedRooms,
        searchFilter,

        rooms,
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
