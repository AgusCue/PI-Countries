import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivity, getCountries } from "../../action";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Paginado from "../Paginado/Paginado";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
  const currentCountry = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  // console.log(allCountries);
  // console.log(indexOfFirstCountry, indexOfLastCountry);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivity());
  }, []);

  return (
    <div>
      {allCountries.length > 0 ? (
        <div>
          <div className="arriba">
            <div>
              <SearchBar setCurrentPage={setCurrentPage} />
              <Link to={"/activity"}>
                <button className="create"> Create activity</button>
              </Link>
            </div>
            <Filters setCurrentPage={setCurrentPage} setOrden={setOrden} />
          </div>
          <div className="abajo">
            <div className="cards">
              {currentCountry?.map((e) => {
                return (
                  <Card
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    flags={e.flags}
                    continents={e.continents}
                  />
                );
              })}
            </div>
            <Paginado
              countryPerPage={countryPerPage}
              allCountries={allCountries.length}
              paginado={paginado}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
