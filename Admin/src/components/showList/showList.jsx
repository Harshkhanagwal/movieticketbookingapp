import React from 'react'
import './showList.css'


// icons
import {FiEdit2} from "react-icons/fi";
import {MdDeleteOutline} from "react-icons/md";

const MovieList = (props) => {
    return (
        <div className="show-list">
            {
            props.data.map(show => {
                return (
                    <>
                        <div className="show-card">
                            <div className="show-image-area">
                                <img src={
                                        `https://image.tmdb.org/t/p/original/${
                                            show.poster_path
                                        }`
                                    }
                                    alt="show"/>
                                <div className="card-actions">
                                    <p className='card-action-button'>
                                        <FiEdit2/>
                                    </p>
                                    <p className='card-action-button'>
                                        <MdDeleteOutline/>
                                    </p>
                                </div>
                            </div>
                            <div className="show-txt-area">
                                <div>
                                    <h2 className='show-card-title'>
                                        {
                                        show.title
                                    }</h2>
                                    <p>{
                                        show.overview
                                    }</p>
                                </div>
                                <hr className='seprate'/>
                                <div className='show-text-2'>
                                    <h2>{
                                        show.cinima
                                    }</h2>
                                    <p>
                                        📍{
                                        show.cinima_locaton
                                    }</p>
                                    <div className="show-screen-area">
                                        <span>{
                                            show.show_date
                                        }</span>
                                        <span>{
                                            show.show_time
                                        }</span>
                                        <span>{
                                            show.show_screen
                                        }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        } </div>
    )
}

export default MovieList
