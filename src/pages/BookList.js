import React from 'react'
import { books } from '../data/books'
import BookCard from '../components/BookCard'

const BookList = () => {
  return (
    <div className="book_list">
      {books.map((item) => (
        <BookCard key={item.id} book={item} />
      ))}
    </div>
  )
}

export default BookList
