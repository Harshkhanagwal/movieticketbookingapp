import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Aside from './components/Aside/Aside'
import Importmovies from './Pages/ImportMovies/Importmovies'
import Theaters from './Pages/Theaters/Theaters'

function App() {

  return (
    <>
      <BrowserRouter>
        <Aside></Aside>
        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/import-movies" element={<Importmovies />} />
            <Route path="/theaters" element={<Theaters />} />
          </Routes>
        </main>
      </BrowserRouter>

      // app.jsx
    </>
  )
}

export default App
