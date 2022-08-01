import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterActivity,
  filterCountry,
  orderByName,
  orderByPopulation,
} from "../../action";

import "./Filters.css";

export default function Filters({ setCurrentPage, setOrden }) {
  const dispatch = useDispatch();
  const actividades = useSelector((state) => state.activities);
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSortPoblation(m) {
    m.preventDefault();
    dispatch(orderByPopulation(m.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${m.target.value}`);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(filterCountry(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleActividades(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
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
            className="africac"
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
            className="Asiaa"
            value="Asia"
            onClick={(e) => handleClick(e)}
          ></button>

          <button
            className="oceaniaa"
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
            <select onChange={(m) => handleSortPoblation(m)}>
              <option selected disabled>
                Order By Population
              </option>
              <option value="asc">MAX</option>
              <option value="des">MIN</option>
            </select>
          </div>
          <div className="select">
            <select onChange={handleActividades}>
              <option value="all">All</option>
              {actividades.map((e) => {
                return <option value={e.name}>{e.name}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
