import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetails } from "../../action";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

import asia from "../iconos/Asia.png";
import sur from "../iconos/sur.png";
import norte from "../iconos/norte.png";
import africa from "../iconos/Africa.png";
import oceania from "../iconos/Oceania.png";
import antartida from "../iconos/antartida.png";
import europa from "../iconos/Europa.png";

import area from "../imagenes/area.png";
import poblacion from "../imagenes/poblacion.png";
import sub from "../imagenes/subregion.png";
import cap from "../imagenes/capital.png";

import "./Detail.css";
import gif from "../imagenes/back.png";

export default function Details() {
  const dispatch = useDispatch();
  const detailID = useSelector((state) => state.details);
  console.log(detailID);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (
    <div className="todo">
      {!detailID.name ? (
        <Loading />
      ) : (
        <div>
          <div className="nav">
            <Link to={"/home"}>
              <img
                className="back"
                src={gif}
                alt="back"
                width="150px"
                height="150px"
              />
            </Link>
            <div className="iconos">
              <h5>
                <img src={cap} alt="cap" width="30px" height="30px" /> Capital
              </h5>
              <h5>
                <img src={sub} alt="subregion" width="30px" height="30px" />
                Subregion
              </h5>
              <h5>
                <img
                  src={poblacion}
                  alt="population"
                  width="30px"
                  height="30px"
                />
                Population
              </h5>
              <h5>
                <img src={area} alt="area" width="30px" height="30px" />
                Area
              </h5>
            </div>
          </div>
          <div className="data">
            <div className="nombre">
              <h1>{detailID.name}</h1>
              <p>
                <strong>({detailID.id})</strong>
              </p>
            </div>
            <div className="ordenar">
              <img className="flags" src={detailID.flags} alt={detailID.id} />
              <div>
                <div className="continent">
                  {detailID.continents === "Asia" ? (
                    <img src={asia} alt="Asia" />
                  ) : detailID.continents === "North America" ? (
                    <img src={norte} alt="North America" />
                  ) : detailID.continents === "Europe" ? (
                    <img src={europa} alt="Europe" />
                  ) : detailID.continents === "South America" ? (
                    <img src={sur} alt="South America" />
                  ) : detailID.continents === "Oceania" ? (
                    <img src={oceania} alt="Oceania" />
                  ) : detailID.continents === "Antarctica" ? (
                    <img src={antartida} alt="Antarctica" />
                  ) : detailID.continents === "Africa" ? (
                    <img src={africa} alt="Africa" />
                  ) : (
                    "Not exist Continent"
                  )}
                </div>
                <div className="capital">
                  <img src={cap} alt="cap" width="70px" height="70px" />
                  <span>
                    <strong>{detailID.capital}</strong>
                  </span>
                </div>
                <div className="subregion">
                  <img src={sub} alt="subregion" width="70px" height="70px" />
                  <span>
                    <strong>{detailID.subregion}</strong>
                  </span>
                </div>
                <div className="area">
                  <img src={area} alt="area" width="70px" height="70px" />
                  <span>
                    <strong>{detailID.area} KM²</strong>
                  </span>
                </div>
                <div className="population">
                  <img
                    src={poblacion}
                    alt="population"
                    width="70px"
                    height="70px"
                  />
                  <span>
                    <strong>{detailID.population} population</strong>{" "}
                  </span>
                </div>
                <div>
                  <span>{detailID.activities}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
