import {
  LOAD_ROOMS,
  UPDATE_FILTERS,
  FILTER_ROOMS,
  CLEAR_FILTERS,
} from '../actions'
// import roomsReducer from './roomsReducer'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_ROOMS) {
    const maxPrice = Math.max(...action.payload.map((item) => item.price))

    return {
      ...state,
      allProducts: [...action.payload],
      filtredProducts: [...action.payload],
      filters: { ...state.filters, price: maxPrice, maxPrice: maxPrice },
    }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === FILTER_ROOMS) {
    const { allProducts } = state
    const { text, category, company, color, price, shipping } = state.filters
    let tempProducts = [...allProducts]
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text)
      })
    }
    // category
    if (category !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.category === category
      })
    }
    // company
    if (company !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.company === company
      })
    }

    // color

    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color)
      })
    }
    // Price

    tempProducts = tempProducts.filter((product) => {
      return product.price <= price
    })
    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping === true)
    }
    return { ...state, filtredProducts: tempProducts }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      ...state.filters,
      filters: {
        text: ' ',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.maxPrice,
        shipping: false,
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
