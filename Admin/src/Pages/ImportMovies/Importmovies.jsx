import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './ImportMovies.css'

const Importmovies = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const fetchMovies = async () => {
        try {
            const rdata = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
            console.log(rdata.data.results)
            setData(rdata.data.results)
        } catch (error) {
            setError("Something went wrong! can't fetch data from Mpvie DB")
            console.log(error)
        }
    }
    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        <>
            <h1>Import Movies</h1>
            <div className="import-movie-grid">

                {
                    data.map((movie => {
                        return (
                            <>
                                <div key={movie.id} className='raw-movie-card'>
                                    <div className="details">
                                        <div className="poster-area">
                                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie Poster" />
                                        </div>
                                        <div className="txt-details">

                                            <h3>{movie?.title}</h3>
                                            <p>
                                                {
                                                    movie?.overview
                                                }
                                            </p>
                                            <p>
                                                <b>Avg. Vote :</b> {movie?.vote_average}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="button-area">
                                        <button className='import-button'>
                                            Import
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    }))
                }
            </div>
        </>
    )
}

export default Importmovies