import React from 'react'
import { useGlobalContext } from '../context'
import Title from '../components/Title'
function RoomFilter({ rooms }) {
  const { searchFilter, handleChange } = useGlobalContext()
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item.infos[value]))]
  }

  const type = getUnique(rooms, 'type')
  const types = ['All', ...type]

  const people = getUnique(rooms, 'capacity')

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={searchFilter.type}
            className='form-control'
            onChange={handleChange}
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
            value={searchFilter.capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        {/* room price */}
        <div className='form-group'>
          <label htmlFor='price'>room price ${searchFilter.price}</label>
          <input
            type='range'
            name='price'
            min={searchFilter.minPrice}
            max={searchFilter.maxPrice}
            id='price'
            value={searchFilter.price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className='form-group'>
          <label htmlFor='price'>room size </label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              value={searchFilter.minSize}
              onChange={handleChange}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              value={searchFilter.maxSize}
              onChange={handleChange}
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
              checked={searchFilter.breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              checked={searchFilter.pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  )
}

export default RoomFilter
