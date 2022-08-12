import React from "react";

// import sports from "../imagenes/deportes.png";
// import foods from "../imagenes/comer.png";
// import sightseeing from "../imagenes/pasear.png";
// import dances from "../imagenes/danza.png";
// import other from "../imagenes/other.png";

import "./CardDetail.css";

export default function CardDetail({
  name,
  difficulties,
  duration,
  category,
  season,
}) {
  return (
    <div className="actividades">
      {/* <div className="categoria">
        {category === "sports" ? (
          <img src={sports} alt="sports" />
        ) : category === "sightseeing" ? (
          <img src={sightseeing} alt="sightseeing" />
        ) : category === "foods" ? (
          <img src={foods} alt="sightseeing" />
        ) : category === "dances" ? (
          <img src={dances} alt="dances" />
        ) : category === "other" ? (
          <img src={other} alt="other" />
        ) : null}
      </div> */}
      <h2>{name}</h2>
      <div className="number">
        <div className="dificultad">
          <p>
            <strong>Difficulties:</strong>{" "}
          </p>
          <label>{difficulties} </label>
        </div>
        <div className="duracion">
          <p>
            <strong>Duration(hs):</strong>{" "}
          </p>
          <label> {duration} hs</label>
        </div>
      </div>
      <div className="season">
        <p>
          <strong>Season:</strong>{" "}
        </p>
        <div>
          {season.map((e) => {
            return <p>{e}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
