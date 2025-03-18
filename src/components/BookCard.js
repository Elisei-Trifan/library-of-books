import React from 'react'

const BookCard = ({ book }) => {
  const { title, author, cover } = book
  return (
    <div className="book_card">
      <img src={cover} alt={title} />
      <h5> {title}</h5>
      <p className="book_card_author"> Автор: {author}</p>
    </div>
  )
}

export default BookCard
