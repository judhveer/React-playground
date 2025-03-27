import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from "./components/Github/Github.jsx"
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Layout />,
//     children: [{
//       path:"",
//       element: <Home />
//     },
//     {
//       path: "About",
//       element: <About />
//     }
//   ]
//   }
// ])



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='github' element={<Github />} loader={githubInfoLoader} />
        <Route path='user/:userid' element={<User />} />

        
      </Route>
    )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
