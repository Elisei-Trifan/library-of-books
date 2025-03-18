import React from 'react'
import Author from '../assets/Author'

const BookCard = ({ book }) => {
  const { title, author, cover } = book
  return (
    <div className="book_card">
      <img className="book_card_img" src={cover} alt={title} />
      <h5 className="book_card_title"> {title}</h5>
      <div className="book_card_author_cont">
        <Author width={10} height={10} />
        <p className="book_card_author">{author}</p>
      </div>
    </div>
  )
}

export default BookCard
