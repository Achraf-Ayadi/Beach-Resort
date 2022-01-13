import React, { useState, useContext } from 'react'
import data from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true)
  const [rooms, setRooms] = useState(data)

  rooms.map((item) => {
    const id = item.sys.id
    const infos = item.fields
    const images = infos.images.map((item) => {
      const { image } = item.fields.file.url
    })
  })

  return <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
