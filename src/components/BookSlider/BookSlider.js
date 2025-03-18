import React from 'react'
import { bookSlider } from './booksSliderdata'
import './BookSlider.css'

const BookSlider = () => {
  const [fotoIndex, setFotoIndex] = React.useState(0)
  const [inTransition, setInTransition] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setInTransition(true)
      setTimeout(() => {
        setFotoIndex((prev) => (prev + 1) % bookSlider.length)
        setInTransition(false)
      }, 500) // Задержка для завершения перехода (анимирование)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bookSlider">
      <img
        className={`bookSlider_img ${inTransition ? 'fade' : ''}`}
        src={bookSlider[fotoIndex].url}
        alt="foto"
      />
      <p className="bookSlider_title"> {bookSlider[fotoIndex].description} </p>
    </div>
  )
}

export default BookSlider
