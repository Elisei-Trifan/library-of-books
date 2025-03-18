import React from 'react'
import { bookSlider } from '../data/booksSliderdata'

const BookSlider = () => {
  return (
    <div className="bookSlider">
      {bookSlider.map((item) => (
        <img src={item.url} alt="foto" />
      ))}
      <h5> Книги для проповедников</h5>
    </div>
  )
}

export default BookSlider
