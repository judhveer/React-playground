import {Routes, Route, useLocation} from "react-router-dom";
import Header from './components/Header'
import WordCounter from './components/WordCounter'
import NotFound from "./components/NotFound";
import './App.css'

function App() {
  
  const location = useLocation();  // get the current route

  return (
    <>  
        {/* Render Header only if path is NOT "*" (404 page) */}
        {location.pathname === '/' && <Header /> }
        <Routes>
          <Route path="/"  element={<WordCounter />} /> 
          <Route path="*" element={<NotFound/>} />
        </Routes>

    </>
  )
};

export default App
