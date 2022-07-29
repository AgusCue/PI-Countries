import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ name, flags, continents, id }) {
  return (
    <div className="container">
      <div className="card">
        <img src={flags} alt="flags" />
        <div className="card__content">
          <h2>{name}</h2>
          <p>{continents}</p>
          <Link to={`/countries/${id}`}>
            <a href="#">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
