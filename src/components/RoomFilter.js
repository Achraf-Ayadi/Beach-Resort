import React from 'react'
import { useGlobalContext } from '../context'
import Title from '../components/Title'
function RoomFilter() {
  const { rooms, searchFilter, handleChange } = useGlobalContext()
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item.infos[value]))]
  }

  const type = getUnique(rooms, 'type')
  const Types = ['All', ...type]

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
            {Types.map((type, index) => {
              return <option value={type} key={index}>{type}</option>
            })}
          </select>
        </div>
      </form>
    </section>
  )
}

export default RoomFilter
