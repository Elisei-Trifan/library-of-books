import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/Logo'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <Logo width={30} height={30} className="header_icon" />
      </Link>
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
