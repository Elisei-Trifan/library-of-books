import React from 'react'
import Author from '../../assets/Author'
import Category from '../../assets/Category'
import './bookCard.css'
import { toggleModal } from '../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'
import Modal from '../Modal/Modal'

const BookCard = ({ book }) => {
  const { title, author, cover, category } = book
  const dispatch = useDispatch()

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
          <Author width={15} height={15} className="book_svg" />
          <p className="book_card_author">{author}</p>
        </div>
        <Modal />
      </div>
    </>
  )
}

export default BookCard
