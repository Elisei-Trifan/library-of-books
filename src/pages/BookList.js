import React from 'react'
import { books } from '../data/books'
import BookCard from '../components/BookCard'
import Filter from '../components/Filter/Filter'
import { useSelector } from 'react-redux'

const BookList = () => {
  const selectCategory = useSelector((state) => state.filter.category)

  const filterBooks = selectCategory
    ? books.filter((item) => item.category === selectCategory)
    : books

  return (
    <>
      <Filter />
      <div className="book_list">
        {filterBooks.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </div>
    </>
  )
}

export default BookList
