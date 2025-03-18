import React from 'react'
import Author from '../assets/Author'

const BookCard = ({ book }) => {
  const { title, author, cover, backCover } = book
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(0)

  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="book_card">
        <img
          className="book_card_img"
          src={cover}
          alt={title}
          onClick={toggleModal}
        />
        <h5 className="book_card_title"> {title}</h5>
        <div className="book_card_author_cont">
          <Author width={15} height={15} />
          <p className="book_card_author">{author}</p>
        </div>
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <div className="modal_overlay" onClick={toggleModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={toggleModal}>
              &times;
            </button>
            <img
              className="modal_img"
              src={currentPage === 0 ? cover : backCover}
              alt={title}
            />
            <button
              className="modal_arrow left"
              onClick={() => setCurrentPage(0)}
            >
              &larr;
            </button>
            <button
              className="modal_arrow right"
              onClick={() => setCurrentPage(1)}
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default BookCard
