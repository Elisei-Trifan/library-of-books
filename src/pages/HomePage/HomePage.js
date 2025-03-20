import React from 'react'
import BookSlider from '../../components/BookSlider/BookSlider'
import './homePage.css'

const HomePage = () => {
  return (
    <div className="home_cont">
      <h1 className="home_title"> Чтение может изменить твою жизнь!</h1>
      <div className="bookSlider_cont">
        <BookSlider />
      </div>
    </div>
  )
}

export default HomePage
