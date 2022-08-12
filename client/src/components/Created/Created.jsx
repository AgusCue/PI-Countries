import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivity, getCountries, postActivity } from "../../action";

import home from "../imagenes/home.png";

import "./Created.css";
const validateName = /^[a-zA-Z\s]*$/;

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Requires a name";
  } else if (!validateName.test(input.name)) {
    errors.name = "Not accept numbers";
  } else if (!input.duration) {
    errors.duration = "Requires a duration";
  } else if (!input.difficulty) {
    errors.difficulty = "Select difficulty";
  } else if (!input.category) {
    errors.category = "Select category";
  } else if (!input.season) {
    errors.season = "Select season";
  }
  return errors;
}

export default function CreatedActivity() {
  const distpach = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const history = useHistory();
  const [pais, setPais] = useState([]);
  // console.log(allCountries);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    category: "",
    season: "",
    country: [],
  });
  console.log(input);

  function handleSubmit(e) {
    e.preventDefault();
    distpach(postActivity(input));
    if (!input.name) return alert("Complete the space");
    if (!pais.length > 0) return alert("Select a country");
    if (
      errors.name ||
      errors.duration ||
      errors.difficulty ||
      errors.category ||
      errors.season
    ) {
      alert("Missing fill spaces");
    } else {
      alert("se creo");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        category: "",
        season: "",
        country: [],
      });
      setPais([]);
      history.push("/home");
    }
  }

  //---------------Input-----------//

  function handleChange(e) {
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  //-------------Season----------//

  function handleCheckBox(e) {
    if (input.season.includes(e.target.value)) {
      let filtro = input.season.filter((m) => m !== e.target.value);
      // console.log(filtro);
      setInput({
        ...input,
        season: filtro,
      });
    } else {
      setErrors(
        validate({
          ...input,
          season: [...input.season, e.target.value],
        })
      );
      setInput({
        ...input,
        season: [...input.season, e.target.value],
      });
    }
  }

  //-----------------category-----------//

  function handleSelect2(e) {
    setErrors(
      validate({
        ...input,
        category: e.target.value,
      })
    );
    setInput({
      ...input,
      category: e.target.value,
    });
  }

  //-------------------country-----------------//

  function handleSelect(e) {
    if (input.country.includes(e.target.value)) {
      alert("ya existe");
    } else {
      setInput({
        ...input,
        country: [...input.country, e.target.value],
      });
      const found = allCountries.find((el) => el.id === e.target.value);
      setPais([...pais, [found]]);
    }
  }
  // console.log(pais);
  function handleDelete(e) {
    // console.log(e);
    let borrado = input.country.filter((c) => c !== e[0].id);
    // console.log(borrado);
    if (borrado) {
      setInput({
        ...input,
        country: borrado,
      });
      let deleteID = pais.filter((country) => country !== e);
      setPais(deleteID);
    }
  }

  useEffect(() => {
    distpach(getCountries());
    distpach(getActivity());
  }, [distpach]);

  return (
    <div className="contenedor">
      <div className="navbar">
        <h1>Created Activity</h1>
        <Link to="/home" className="casa">
          <img src={home} alt="home" width="100px" height="100px" />
        </Link>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="crear">
        <div className="izquierda">
          <div className="name">
            <p>Name</p>
            <input
              onChange={handleChange}
              type="text"
              value={input.name}
              name="name"
              autoComplete="off"
            />
            <p className="errors">{errors.name}</p>
          </div>
          <div className="duration">
            <p>Duration</p>
            <input
              type="number"
              value={input.duration}
              name="duration"
              onChange={handleChange}
              autoComplete="off"
            />
            <p className="errors">{errors.duration}</p>
          </div>

          <form>
            <div className="difficulties">
              <p>difficulty</p>
              <p className="clasificacion">
                <input
                  id="radio1"
                  type="radio"
                  name="difficulty"
                  value="5"
                  onChange={handleChange}
                />
                <label for="radio1">
                  <strong>X</strong>{" "}
                </label>
                <input
                  id="radio2"
                  type="radio"
                  name="difficulty"
                  value="4"
                  onChange={handleChange}
                />
                <label for="radio2">
                  <strong>X</strong>{" "}
                </label>
                <input
                  id="radio3"
                  type="radio"
                  name="difficulty"
                  value="3"
                  onChange={handleChange}
                />
                <label for="radio3">
                  <strong>X</strong>{" "}
                </label>
                <input
                  id="radio4"
                  type="radio"
                  name="difficulty"
                  value="2"
                  onChange={handleChange}
                />
                <label for="radio4">
                  <strong>X</strong>{" "}
                </label>
                <input
                  id="radio5"
                  type="radio"
                  name="difficulty"
                  value="1"
                  onChange={handleChange}
                />
                <label for="radio5">
                  <strong>X</strong>{" "}
                </label>
              </p>
              <p className="errors">{errors.difficulty}</p>
            </div>
          </form>
          <div className="category">
            <div className="categorycreate">
              <select onChange={(e) => handleSelect2(e)}>
                <option selected disabled>
                  Select category
                </option>
                <option value="sports">sports</option>
                <option value="sightseeing">sightseeing</option>
                <option value="foods">foods</option>
                <option value="dances">dances</option>
                <option value="other">other</option>
              </select>
            </div>
            <p className="errors">{errors.category}</p>
          </div>
          <div className="seasons">
            <h3>Season</h3>
            <div className="temporada">
              <div className="temporada1">
                <div className="input">
                  <p>Summer 🌞</p>
                  <input
                    onChange={(e) => handleCheckBox(e)}
                    type="checkbox"
                    value="Summer"
                    name="season"
                  />
                </div>
                <div className="input">
                  <p>Autumn 🍁</p>
                  <input
                    onChange={(e) => handleCheckBox(e)}
                    type="checkbox"
                    value="Autumn"
                    name="season"
                  />
                </div>
              </div>
              <div className="temporada2">
                <div className="input">
                  <p>Winter ❄️</p>
                  <input
                    onChange={(e) => handleCheckBox(e)}
                    type="checkbox"
                    value="Winter"
                    name="season"
                  />
                </div>
                <div className="input">
                  <p>Spring 🌼</p>
                  <input
                    onChange={(e) => handleCheckBox(e)}
                    type="checkbox"
                    value="Spring"
                    name="season"
                  />
                </div>
              </div>
              <p className="errors">{errors.season}</p>
            </div>
          </div>
        </div>
        <div className="paises">
          <div className="select">
            <select onChange={(e) => handleSelect(e)}>
              <option selected disabled>
                Select country
              </option>
              {allCountries.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div id="paisdiv">
            {pais.map((e) => {
              return (
                <div key={e} className="pais">
                  <img src={e[0].flags} alt="alt" width="80px" height="50px" />
                  <p
                    className="borrado"
                    onClick={() => {
                      handleDelete(e);
                    }}
                  >
                    X
                  </p>
                </div>
              );
            })}
          </div>
          <button className="botoncrear" type="submite">
            Created
          </button>
        </div>
      </form>
    </div>
  );
}
