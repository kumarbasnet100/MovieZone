import React, { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);

  const filterByCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category == cat));
  };
  return (
    <>
      <div
        className="my-3"
        style={{ width: "1000px", margin: "auto", textAlign: "center" }}>
        <button
          onClick={() => setMovieList(movies)}
          type="button"
          className="btn btn-outline-primary mx-3">
          All
        </button>
        <button
          onClick={() => filterByCategory("Action")}
          type="button"
          className="btn btn-outline-primary mx-3" >
          Action
        </button>
        <button
          onClick={() => filterByCategory("Thriller")}
          type="button"
          className="btn btn-outline-light mx-3">
          Thriller
        </button>
        <button
          onClick={() => filterByCategory("Animation")}
          type="button"
          className="btn btn-outline-info mx-3">
          Animation
        </button>
        <button
          onClick={() => filterByCategory("Horror")}
          type="button"
          className="btn btn-outline-warning mx-3" >
          Horror
        </button>
        <button
          onClick={() => filterByCategory("Drama")}
          type="button"
          className="btn btn-outline-info mx-3">
          Drama
        </button>
        <button
          onClick={() => filterByCategory("Sci-Fi")}
          type="button"
          className="btn btn-outline-light mx-3">
          Sci-Fi
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: "center",
          width: "1300px",
          margin: "auto",
        }}>
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "300px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                style={{
                  width: "200px",
                  height: "280px",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                }}
              />
            </div>
            <h5>{data.title} </h5>
            <p>{data.release_date} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
