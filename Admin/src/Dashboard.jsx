import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Importmovies from './Pages/ImportMovies/Importmovies'
import Theaters from './Pages/Theaters/Theaters'
import Aside from './components/Aside/Aside'
import Shows from './Pages/shows/Shows'


const Dashboard = () => {
  return (
    <>
      <Aside></Aside>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/import-movies" element={<Importmovies />} />
          <Route path="/theaters" element={<Theaters />} />
          <Route path='/shows' element={<Shows></Shows>} />
        </Routes>
      </main>
    </>
  )
}

export default Dashboard