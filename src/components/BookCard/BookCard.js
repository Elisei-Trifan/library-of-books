import React from 'react'
import Author from '../../assets/Author'
import Category from '../../assets/Category'
import './bookCard.css'
import { toggleModal } from '../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'
import Modal from '../Modal/Modal'

const BookCard = ({ book }) => {
  const { title, author, cover, category } = book
  // const isOpen = useSelector((state) => state.filter.isOpen)
  const dispatch = useDispatch()
  // const [isOpen, setIsOpen] = React.useState(false)
  // const [currentPage, setCurrentPage] = React.useState(0)

  // const toggleModal = () => setIsOpen(!isOpen)

  // const nextPage = () => {
  //   setCurrentPage((prev) => (prev + 1) % 2) // 0 → 1 → 0
  // }

  return (
    <>
      <div className="book_card">
        <img
          className="book_card_img"
          src={cover}
          alt={title}
          onClick={() => dispatch(toggleModal({ isOpen: true, book }))}
        />
        <h5 className="book_card_title"> {title}</h5>
        <div className="book_card_category_cont">
          <Category width={15} height={15} color={'grey'} />
          <p className="book_card_category"> {category} </p>
        </div>
        <div className="book_card_author_cont">
          <Author width={15} height={15} />
          <p className="book_card_author">{author}</p>
        </div>
        <Modal />
      </div>

      {/* Модальное окно */}
      {/* {isOpen && (
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
            <button className="modal_arrow" onClick={nextPage}>
              <Right width={32} height={32} />
            </button>
          </div>
        </div>
      )} */}
    </>
  )
}

export default BookCard
