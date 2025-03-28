import React from 'react'
import {NavLink} from "react-router-dom";
import {logo} from "../assets";

export default function Header({cartItems}) {
  return (

    <header className='header'>
        <NavLink to="/" className="logo">
            <img src={logo} alt="Logo" />
            <span>Shopping Cart</span>
        </NavLink>

        <nav className="navigation">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>

        <NavLink to="/cart" className="items" ><span>Cart: {cartItems.length}</span></NavLink>
    </header>
  );
}
