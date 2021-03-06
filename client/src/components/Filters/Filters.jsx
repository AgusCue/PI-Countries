import React from "react";
import { useDispatch } from "react-redux";
import { filterCountry, orderByName } from "../../action";

import "./Filters.css";

export default function Filters({ setCurrentPage, setOrden }) {
  const dispatch = useDispatch();
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSortPoblation(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(filterCountry(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="filters">
      <div className="continentes">
        <div>
          <button
            className="world"
            value="all"
            onClick={(e) => handleClick(e)}
          ></button>

          <button
            className="hola"
            value="Africa"
            onClick={(e) => handleClick(e)}
          ></button>
          <button
            className="sur"
            value="South America"
            onClick={(e) => handleClick(e)}
          ></button>
          <button
            className="norte"
            value="North America"
            onClick={(e) => handleClick(e)}
          ></button>

          <button
            className="europe"
            value="Europe"
            onClick={(e) => handleClick(e)}
          ></button>
          <button
            className="boton"
            value="Asia"
            onClick={(e) => handleClick(e)}
          ></button>

          <button
            className="boton2"
            value="Oceania"
            onClick={(e) => handleClick(e)}
          ></button>
          <button
            className="antartida"
            value="Antarctica"
            onClick={(e) => handleClick(e)}
          ></button>
        </div>
        <div className="selectores">
          <div className="select">
            <select onChange={(e) => handleSort(e)}>
              <option selected disabled>
                Order By A-Z
              </option>
              <option value="asc"> A-Z</option>
              <option value="des">Z-A</option>
            </select>
          </div>
          <div className="select">
            <select onChange={(e) => handleSortPoblation(e)}>
              <option selected disabled>
                Order By Population
              </option>
              <option value="max">MAX</option>
              <option value="min">MIN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
