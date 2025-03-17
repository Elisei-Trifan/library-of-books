import React from 'react'

const BookCard = ({ title, author, cover }) => {
  return (
    <div className="book_card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  )
}

export default BookCard
