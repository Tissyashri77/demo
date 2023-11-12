import React from "react";
import data from "../utils/data";
import Card from "./Card";
import "./styles/movies.css"

function MoviesList() {
  return (
    <div className="all_movies">
      {
        data.map((item) => (
            <Card data={item}/>
        ))
      }
    </div>
  );
}

export default MoviesList;
