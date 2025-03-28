import React from 'react'
// import {img1, img2, img3, img4, img5, img6} from "../assets/index";

export default function Cart({cartItems, handleRemoveFromCart}) {
  return (
        <section className='cart'>
            <h1>Cart Items: {cartItems.length}</h1>
            {cartItems.length === 0 ? <p>No items in the cart!</p> : (
                cartItems.map((item) => (
                    <div key={item.id} className='cartCard'>
                        <img src={item.image} alt={item.name} />
                        <p className='productName'>{item.name}</p>
                        <p className='productPrice'>{item.price}</p>
                        <button className='removeButton' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                ))
            // <div className='cartCard'>
            //     <img src={img1} alt="" />
            //     <p className='productName'>Sony Wh-Ch510 Bluetooth Wireless</p>
            //     <p className='productPrice'>#149</p>
            //     <button>Remove</button>
            // </div>
        ) }
            
        </section> 
  )
}
