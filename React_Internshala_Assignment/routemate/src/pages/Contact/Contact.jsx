import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

export  function Contact() {

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("--------");
    return navigate("/");
  }

  return (
    <main>
      <div className='component'>Contact</div>
      <Outlet />
      <button onClick={handleSubmit}>Back To Home</button>
    </main>
  )
}
