import {
  LOAD_ROOMS,
  UPDATE_FILTERS,
  FILTER_ROOMS,
  CLEAR_FILTERS,
} from '../actions'

const filterReducer = (state, action) => {
  if (action.type === LOAD_ROOMS) {
    const maxPrice = Math.max(...action.payload.map((item) => item.price))
    const maxSize = Math.max(...action.payload.map((item) => item.size))
    const minSize = Math.min(...action.payload.map((item) => item.size))

    return {
      rooms: [...action.payload],
      filtredRooms: [...action.payload],
      filters: {
        ...state.filters,
        price: maxPrice,
        maxPrice,
        minSize,
        maxSize,
      },
    }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === FILTER_ROOMS) {
    const { rooms } = state
    let { type, capacity, maxSize, minSize, price, breakfast, pets } =
      state.filters
    let tempRooms = [...rooms]

    // type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type)
    }
    // capacity
    capacity = parseInt(capacity)
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity === capacity)
    }
    // Size

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    )
    // Price

    tempRooms = tempRooms.filter((room) => {
      return room.price <= price
    })
    // breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true)
    }
    // pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true)
    }

    return { ...state, filtredRooms: tempRooms }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        type: 'all',
        capacity: 1,
        maxSize: state.filters.maxSize,
        minSize: state.filters.minSize,
        price: state.filters.maxPrice,
        breakfast: false,
        pets: false,
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filterReducer
