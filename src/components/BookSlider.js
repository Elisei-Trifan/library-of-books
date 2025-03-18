import React from 'react'
import { bookSlider } from '../data/booksSliderdata'

const BookSlider = () => {
  const [fotoIndex, setFotoIndex] = React.useState(0)

  React.useEffect(() => {
    console.log(bookSlider[fotoIndex].url)
    const interval = setInterval(() => {
      setFotoIndex((prev) => (prev + 1) % bookSlider.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bookSlider">
      <img src={bookSlider[fotoIndex].url} alt="foto" />

      <h5> Книги для проповедников</h5>
    </div>
  )
}

export default BookSlider
