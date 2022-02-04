import React from 'react'
import { useFilterContext } from '../context/filterContext'
import Title from '../components/Title'
function RoomFilter() {
  const {
    rooms,

    filters: {
      type,
      capacity,
      // size,
      maxSize,
      minSize,
      price,
      maxPrice,
      minPrice,
      breakfast,
      pets,
    },
    updateFilter,
    clearFilter,
  } = useFilterContext()

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))]
  }
  const types = ['all', ...getUnique(rooms, 'type')]
  // console.log(types)

  const capacities = [...getUnique(rooms, 'capacity')]

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form' onSubmit={(e) => e.preventDefault}>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={updateFilter}
          >
            {types.map((type, index) => {
              return (
                <option value={type} key={index}>
                  {type}
                </option>
              )
            })}
          </select>
        </div>
        {/* select guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={updateFilter}
          >
            {capacities.map((capacity, index) => {
              return (
                <option value={capacity} key={index}>
                  {capacity}
                </option>
              )
            })}
          </select>
        </div>
        {/* room price */}
        <div className='form-group'>
          <label htmlFor='price'>room price ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={updateFilter}
            className='form-control'
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className='form-group'>
          <label htmlFor='size'>room size </label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              value={minSize}
              onChange={updateFilter}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              value={maxSize}
              onChange={updateFilter}
              className='size-input'
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={updateFilter}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              checked={pets}
              onChange={updateFilter}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <button className='btn-primary' onClick={clearFilter}>
          clear Filter
        </button>
      </div>
    </section>
  )
}

export default RoomFilter
