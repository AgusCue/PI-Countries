import React from "react";

import "./Paginado.css";

export default function Paginado({ allCountries, countryPerPage, paginado }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(allCountries / countryPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <div className="paginas">
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <li key={number}>
              <button onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
