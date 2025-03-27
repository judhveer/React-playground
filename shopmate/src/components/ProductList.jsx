import React from 'react'
import { useCallback, useState, useEffect } from 'react';
import {useFetch} from '../hooks/useFetch';


export default function ProductList() {

    // const [products, setProducts] = useState([]);

    const [url, setUrl] = useState("http://localhost:8000/products/")

    const {data: products, loading, error} = useFetch(url, {content: "ABC"});

    // const fetchProducts = useCallback(async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setProducts(data);
    // }, [url]);
    

    // useEffect(() => {
    //     // fetch(url)
    //     // .then(response => response.json())
    //     // .then(data => setProducts(data));
    //     fetchProducts();
    //     console.log("--");
    // }, [fetchProducts]);

  return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
                <br />
                <br />
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
            </div>

            {loading && <p>Loading Products....</p>}

            {error && <p>{error}</p>}
            
            {products && products.map((product) => (
                <div className="card" key={product.id}>
                    <p className='id'>{product.id}</p>
                    <p className='name'>{product.name}</p>
                    <p className='info'>
                        <span>${product.price}</span>
                        <span className={product.in_stock? 'instock': "unavailable"}>{product.in_stock? "In Stock": "Unavailable"}</span>
                    </p>
                </div>
            ))}

        </section>
  )
}
