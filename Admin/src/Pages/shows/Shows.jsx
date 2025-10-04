import React, { useState } from 'react'

//icons
import { MdOutlineAddToQueue } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Shows = () => {
  const [popup, setPopup] = useState(false)

  return (
    <div className="page-header">
      <h1>Manage Shows</h1>
      <button onClick={() => setPopup(!popup)}>
        <MdOutlineAddToQueue className='app-icon' /> Add New Show
      </button>

      {
        popup && (
          <div className="popuparea">
            <div className="popupbox">
              <div className="popupheader">
                <h3>Add New Show</h3>
                <IoClose onClick={() => setPopup(!popup)} className='app-icon popup-close-btn' />
              </div>

              <form className='add-show-form'>
                <select name="movies" >
                  <option value="" disabled selected> Select movie </option>
                  <option value="Movie 1">Movie 1</option>
                  <option value="Movie 2">Movie 2</option>
                  <option value="Movie 3">Movie 3</option>
                  <option value="Movie 4">Movie 4</option>
                  <option value="Movie 5">Movie 5</option>
                </select>

                <select name="theater" >
                  <option value="" disabled selected> Select theater </option>
                  <option value="Theater 1">Theater 1</option>
                  <option value="Theater 2">Theater 2</option>
                  <option value="Theater 3">Theater 3</option>
                  <option value="Theater 4">Theater 4</option>
                  <option value="Theater 5">Theater 5</option>
                </select>

                <select name="screen" >
                  <option value="" disabled selected>Select Screen</option>
                  <option value="Screen 1">Screen 1</option>
                  <option value="Screen 2">Screen 2</option>
                  <option value="Screen 3">Screen 3</option>
                </select>

                <div className="show-timings">
                  <label>
                    <input type="radio" name="showtime" value="morning" /> Morning Show
                  </label>
                  <label>
                    <input type="radio" name="showtime" value="afternoon" /> Afternoon Show
                  </label>
                  <label>
                    <input type="radio" name="showtime" value="night" /> Night Show
                  </label>
                </div>

                <button type="submit"> Submit </button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Shows
