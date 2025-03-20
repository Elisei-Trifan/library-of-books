// Pagination.tsx
import React from 'react'
import './pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Функция для генерации кнопок пагинации
  const getPaginationButtons = () => {
    const pages = []

    if (totalPages <= 6) {
      // Если страниц мало, показываем все
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Первая страница всегда видна
      pages.push(1)
      if (currentPage > 3) pages.push('...')

      // Две страницы перед текущей, текущая и две после
      for (
        let i = Math.max(2, currentPage - 2);
        i <= Math.min(totalPages - 1, currentPage + 2);
        i++
      ) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages) // Последняя страница всегда видна
    }

    return pages
  }

  return (
    <div className="pagination">
      {getPaginationButtons().map((page, index) =>
        page === '...' ? (
          <span key={index} className="dots">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`page-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}
    </div>
  )
}

export default Pagination
