import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/Logo'
import Input from '../Input/Input'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header_block">
        <Link to="/">
          <Logo width={30} height={30} className="header_icon" />
        </Link>
        <NavLink className={'header_link'} to="/">
          Главная
        </NavLink>
        <NavLink className={'header_link'} to="/library">
          Библиотека
        </NavLink>
      </div>
      <Input />
    </header>
  )
}

export default Header
