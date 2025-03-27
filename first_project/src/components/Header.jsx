import React from 'react'
import Logo from '../assets/logo.svg'


export default function Header() {
  return (
    <header className='header'>
        <img src={Logo} alt="" />
        <a href="/">Home</a>
    </header>
  )
}
