import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducer/filterReducer'
import {
  LOAD_ROOMS,
  UPDATE_FILTERS,
  FILTER_ROOMS,
  CLEAR_FILTERS,
} from '../actions'
import { useRoomsContext } from './roomsContext'

const initialState = {
  rooms: [],
  filtredRooms: [],
  filters: {
    type: 'all',
    capacity: 1,
    size: 0,
    maxSize: 0,
    minSize: 0,
    price: 0,
    maxPrice: 0,
    minPrice: 0,
    breakfast: false,
    pets: false,
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { rooms } = useRoomsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_ROOMS, payload: rooms })
  }, [rooms])

  useEffect(() => {
    dispatch({ type: FILTER_ROOMS })
  }, [rooms, state.filters])

  const updateFilter = (e) => {
    // updateFilter ACTION
    let value = e.target.value
    let name = e.target.name

    if (name === 'type') {
      value = e.target.value
    }
    if (name === 'capacity') {
      value = e.target.value
      //   console.log(value)
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'minSize') {
      value = Number(value)
    }
    if (name === 'maxSize') {
      value = Number(value)
    }
    if (name === 'breakfast') {
      value = e.target.checked
    }
    if (name === 'pets') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: { value, name } })

    // console.log(name, value)
  }

  // console.log(state)

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  // console.log(state.allProducts)
  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilter,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
