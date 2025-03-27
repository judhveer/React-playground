import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Home, Admin, ProductList, ProductDetail, Contact, ContactIn, ContactEu, ContactUs, PageNotFound,} from "../pages";

export default function AllRoutes() {

    const user = true;
    
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="contact" element={<Contact />}> 
                <Route path="in" element={<ContactIn />} />
                <Route path="eu" element={<ContactEu />} />
                <Route path="us" element={<ContactUs />} />
                {/* <Route path="*" element={<ContactOther />} /> */}

            </Route>
            <Route path="admin" element={user? <Admin /> : <Navigate to="/" />} />
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </>
  )
}
