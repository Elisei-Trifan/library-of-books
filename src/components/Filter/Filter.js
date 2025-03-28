import React from 'react'
import { books } from '../../data/books'
import './filter.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../redux/slices/filterSlice'

const categories = [...new Set(books.map((item) => item.category))]

const Filter = ({ resetPage }) => {
  const dispatch = useDispatch()
  const selectCategory = useSelector((state) => state.filter.category)

  const handleSelect = (category) => {
    dispatch(setCategory(selectCategory === category ? null : category))
    resetPage()
  }

  return (
    <div className="filter_cont">
      {categories.map((item) => (
        <div
          key={item}
          className={`filter_item ${
            selectCategory === item ? 'filter_selected' : ''
          } `}
          onClick={() => handleSelect(item)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Filter
