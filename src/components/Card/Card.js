//y aca devuelve el compontent LIST (3)

import React from "react";
import PropTypes from "prop-types";


//paso el objeto movie donde adentro tenemos las propiedades
export const Card = ({ movie }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100"/>
        <div className="card-body">
          <h4>
            {movie.Title} {movie.Year}
          </h4>
          <p>{movie.Type}</p>
        </div>
      </div>
    </div>
  );
};



export default Card;
