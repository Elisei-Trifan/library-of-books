import React from 'react'
import { toggleModal, nextPage } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import Right from '../../assets/Right'
import './modal.css'

const Modal = () => {
  const isOpen = useSelector((state) => state.filter.isOpen)
  const currentPage = useSelector((state) => state.filter.currentPage)
  const selectedBook = useSelector((state) => state.filter.selectedBook)
  const dispatch = useDispatch()
  if (!isOpen || !selectedBook) return null
  const { cover, backCover } = selectedBook
  //   const [isOpen, setIsOpen] = React.useState(false)
  //   console.log(backCover)

  //   const nextPage = () => {
  //     setCurrentPage((prev) => (prev + 1) % 2) // 0 → 1 → 0
  //   }

  return (
    <>
      {isOpen && (
        <div
          className="modal_overlay"
          onClick={() => dispatch(toggleModal(!isOpen))}
        >
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal_close"
              onClick={() => dispatch(toggleModal(!isOpen))}
            >
              &times;
            </button>
            <img
              className="modal_img"
              src={currentPage === 0 ? cover : backCover}
              alt={'foto'}
            />
            <button
              className="modal_arrow"
              onClick={() => dispatch(nextPage())}
            >
              <Right width={32} height={32} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
