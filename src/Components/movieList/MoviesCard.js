import React from "react"
import "./MoviesCard.css"

import Cards from "../card/card"

const MoviesCard = ({movieList}) => {
    
  
  

    return (
        <div className="movie__list">

            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MoviesCard