import React from 'react';
import {img1, img2, img3, img4, img5, img6} from "../assets/index";

export default function Home({handleAddToCart, cartItems}) {

  const products = [
    {id:1001, image: img1, name: "Sony Wh-Ch 510 Bluetooth Wireless", price: "$149"},
    {id:1002, image: img2, name: "boAt Rockerz 450", price: "$49"},
    {id:1003, image: img3, name: "JBL Tune 760NC", price: "$179"},
    {id:1004, image: img4, name: "Logitech H111 Wired", price: "$39"},
    {id:1005, image: img5, name: "APPLE Airpods Max Bluetooth Headset", price: "$199"},
    {id:1006, image: img6, name: "ZEBRONICS Zeb-Thunder Wired", price: "$29"},
  ];

  // Check if a product is already in the cart
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  }

  
  return (
    <main className='main'>
      <section className='products'>
         {/* Map over products array to create multiple product cards */}
         {products.map((product) => (
            <div key={product.id} className="box">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <div className="priceNCart">
                <p>{product.price}</p>
                <button 
                onClick={() => handleAddToCart(product)}
                disabled={isProductInCart(product.id)}
                >
                  {isProductInCart(product.id) ? (<><i className="bi bi-check"></i>
                  <span>Added to Cart</span> </>) : "Add to Cart"}
                </button>
              </div>
              
            </div>
         ))}

        {/* creating this multiple boxes like below we can do the above thing to optimize it */}

        {/* <div className="box box1">
          <img src={img1} />
          <p>Sony Wh-Ch510 Bluetooth Wireless</p>
          <div className="priceNCart">
            <p>$149</p>
            <button className="">Add to Cart</button>
          </div>
        </div> */}

      </section>
    </main>
  )
}
