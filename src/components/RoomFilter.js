import React from 'react'
import { useGlobalContext } from '../context'
import Title from '../components/Title'
function RoomFilter({rooms}) {
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
      </form>
    </section>
  )
}

export default RoomFilter
