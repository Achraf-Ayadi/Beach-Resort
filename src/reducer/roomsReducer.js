import { TOGGLE_SIDEBAR, GET_ROOMS, GET_FEATURED } from '../actions'

const products_reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !action.payload }
  }

  if (action.type === GET_ROOMS) {
    return { ...state, rooms: action.payload }
  }

  if (action.type === GET_FEATURED) {
    const featuredRooms = action.payload.filter(
      (room) => room.featured === true
    )
    return { ...state, featuredRooms }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
