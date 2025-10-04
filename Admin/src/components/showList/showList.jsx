import React from 'react'
import './showList.css'


//icons
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const MovieList = () => {
  return (
    <div className="show-list">
      <div className="show-card">
        <div className="show-image-area">
          <img src="https://image.tmdb.org/t/p/original//ovZ0zq0NwRghtWI1oLaM0lWuoEw.jpg" alt="show" />
        </div>
        <div className="show-txt-area">
          <div>
            <h2 className='show-card-title' >Play Dirty</h2>
            <p>Expert thief Parker gets a shot at a major heist, but to pull it off he and his team must outsmart a South American dictator, the New York mob, and the world's richest man.</p>
          </div>
          <hr className='seprate' />
          <div className='show-text-2'>
            <h2>PVR CINEMAS</h2>
            <p> 📍noida sec 62</p>
            <div className="show-screen-area">
              <span>23 october 2029</span>
              <span>Morning show</span>
              <span>Screen 1</span>
            </div>
          </div>
        </div>
        {/* <div className="show-button-area">
          <button>Edit</button>
          <button>Delete</button>
        </div> */}
      </div>


      <div className="show-card">
        <div className="show-image-area">
          <img src="https://image.tmdb.org/t/p/original//ovZ0zq0NwRghtWI1oLaM0lWuoEw.jpg" alt="show" />
          <div className="card-actions">
            <p className='card-action-button'>
              <FiEdit2 />
            </p>
            <p className='card-action-button'>
            <MdDeleteOutline />
            </p>
          </div>
        </div>
        <div className="show-txt-area">
          <div>
            <h2 className='show-card-title' >Demon Slayer: Kimetsu no Yaiba Infinity Castle</h2>
            <p className='show-movie-overview'>"Washed-up revolutionary Bob exists in a state of stoned paranoia, surviving off-grid with his spirited, self-reliant daughter, Willa. When his evil nemesis resurfaces after 16 years and she goes missing, the former radical scrambles to find her, father and daughter both battling the consequences of his past."</p>
          </div>
          <hr className='seprate' />
          <div className='show-text-2'>
            <h2>Miraj CINEMAS</h2>
            <p> 📍Jamnapaar, choro ki basti</p>
            <div className="show-screen-area">
              <span>23 october 2029</span>
              <span>Morning show</span>
              <span>Screen 1</span>
            </div>
          </div>
        </div>
        {/* <div className="show-button-area">
          <button>Edit</button>
          <button>Delete</button>
        </div> */}
      </div>
    </div>
  )
}

export default MovieList
