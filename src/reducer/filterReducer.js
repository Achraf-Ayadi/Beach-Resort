import {
  LOAD_ROOMS,
  UPDATE_FILTERS,
  FILTER_ROOMS,
  //   CLEAR_FILTERS,
} from '../actions'
// import roomsReducer from './roomsReducer'

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
    const { type, capacity, maxSize, minSize, price, breakfest, pets } =
      state.filters
    let tempRooms = [...rooms]

    // type
    if (type !== 'All') {
      tempRooms = tempRooms.filter((room) => {
        return room.type === type
      })
    }
    // capacity
    // if (capacity !== 'All') {
    //   tempRooms = tempRooms.filter((room) => {
    //     return room.capacity === capacity
    //   })
    // }
    // // minSize

    // tempRooms = tempRooms.filter((room) => {
    //   return room.size >= minSize
    // })
    // // maxSize

    // tempRooms = tempRooms.filter((room) => {
    //   return room.size <= maxSize
    // })

    
    // Price

    tempRooms = tempRooms.filter((room) => {
      return room.price <= price
    })
    // // breakfest
    if (breakfest) {
      tempRooms = tempRooms.filter((room) => room.breakfest === true)
    }
    // // pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true)
    }

    return { ...state, filtredRooms: tempRooms }
  }
  //   if (action.type === CLEAR_FILTERS) {
  //     return {
  //       ...state,
  //       ...state.filters,
  //       filters: {
  //         text: ' ',
  //         capacity: 'all',
  //         company: 'all',
  //         color: 'all',
  //         price: state.filters.maxPrice,
  //         shipping: false,
  //       },
  //     }
  //   }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filterReducer
