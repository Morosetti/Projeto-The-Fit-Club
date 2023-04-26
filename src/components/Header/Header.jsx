import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="Header">
        <img src={Logo} alt="" />
    </div>
  )
}

export default Header