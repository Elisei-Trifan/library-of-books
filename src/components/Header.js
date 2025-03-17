import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/"> Главная</NavLink>
      <NavLink to="/library"> Библиотека</NavLink>
      <NavLink to="/accounting"> Учет</NavLink>
    </header>
  )
}

export default Header
