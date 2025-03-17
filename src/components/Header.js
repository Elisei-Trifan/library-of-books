import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <NavLink className={'header_link'} to="/">
        Главная
      </NavLink>
      <NavLink className={'header_link'} to="/library">
        Библиотека
      </NavLink>
      <NavLink className={'header_link'} to="/accounting">
        Учет
      </NavLink>
    </header>
  )
}

export default Header
