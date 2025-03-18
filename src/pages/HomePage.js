import React from 'react'
import BookSlider from '../components/BookSlider/BookSlider'

const HomePage = () => {
  return (
    <div>
      <h2> Чтение может изменить твою жизнь!</h2>
      <div className="bookSlider_cont">
        <BookSlider />
      </div>
    </div>
  )
}

export default HomePage
