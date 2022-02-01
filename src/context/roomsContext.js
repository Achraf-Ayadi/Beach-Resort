import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/roomsReducer'
import data from '../data'
import { TOGGLE_SIDEBAR, GET_ROOMS, GET_FEATURED } from '../actions'

const initialState = {
  isSidebarOpen: false,
  rooms: [],
  featuredRooms: [],
}

const RoomsContext = React.createContext()

export const RoomsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR, payload: state.isSidebarOpen })
  }

  const fetchRooms = (items) => {
    let rooms = items.map((item) => {
      const id = item.sys.id
      const images = item.fields.images.map((image) => image.fields.file.url)
      const room = { ...item.fields, id, images }
      return room
    })

    dispatch({ type: GET_ROOMS, payload: rooms })
    dispatch({ type: GET_FEATURED, payload: rooms })
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchRooms(data)
  }, [])

  console.log(state)

  return (
    <RoomsContext.Provider
      value={{
        ...state,
        toggleSidebar,
      }}
    >
      {children}
    </RoomsContext.Provider>
  )
}
// make sure use
export const useRoomsContext = () => {
  return useContext(RoomsContext)
}
