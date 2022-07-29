import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../action";

import home from "../imagenes/home.png";

import "./Created.css";
const validateName = /^[a-zA-Z\s]*$/;

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Requires a name";
  }
  if (!validateName.test(input.name)) {
    errors.name = "Not accept numbers";
  }
  if (!input.duration) {
    errors.duration = "Requires a duration";
  }
  if (!input.difficulties) {
    errors.difficulties = "Select difficulties";
  }
  if (!input.category) {
    errors.category = "Select category";
  }
  if (!input.season) {
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
    difficulties: "",
    duration: "",
    category: "",
    season: "",
    country: [],
  });
  console.log(input);

  function handleSubmit(e) {
    e.preventDefault();
    distpach(postActivity(input));
    if (!pais.length > 0) return alert("Select a country");
    if (!input.name) return alert("Complete the space");
    if (
      errors.name ||
      errors.duration ||
      errors.difficulties ||
      errors.category ||
      errors.season
    ) {
      alert("Missing fill spaces");
    } else {
      alert("se creo");
      setInput({
        name: "",
        difficulties: "",
        duration: "",
        category: "",
        season: "",
        country: [],
      });
      setPais([]);
      history.push("/home");
    }
  }
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

  function handleCheckBox(e) {
    if (e.target.checked) {
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
    } else {
      console.log("error");
    }
  }

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

  function handleSelect(e) {
    const contry = input.country.find((c) => c.id === e.target.value);
    console.log(contry);
    if (!contry) {
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
    setInput({
      ...input,
      country: input.country.filter((c) => c !== e),
    });
    let deleteID = pais.filter((country) => country !== e);
    setPais(deleteID);
  }

  useEffect(() => {
    distpach(getCountries());
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
            />
            <p className="errors">{errors.duration}</p>
          </div>

          <form>
            <div className="difficulties">
              <p>Difficulties</p>
              <p className="clasificacion">
                <input
                  id="radio1"
                  type="radio"
                  name="difficulties"
                  value="5"
                  onChange={handleChange}
                />
                <label for="radio1">
                  <strong>X</strong>{" "}
                </label>
                <input
                  id="radio2"
                  type="radio"
                  name="difficulties"
                  value="4"
                  onChange={handleChange}
                />
                <label for="radio2">
                  <strong>X</strong>{" "}
                </label>
                <input
                  id="radio3"
                  type="radio"
                  name="difficulties"
                  value="3"
                  onChange={handleChange}
                />
                <label for="radio3">
                  <strong>X</strong>{" "}
                </label>
                <input
                  id="radio4"
                  type="radio"
                  name="difficulties"
                  value="2"
                  onChange={handleChange}
                />
                <label for="radio4">
                  <strong>X</strong>{" "}
                </label>
                <input
                  id="radio5"
                  type="radio"
                  name="difficulties"
                  value="1"
                  onChange={handleChange}
                />
                <label for="radio5">
                  <strong>X</strong>{" "}
                </label>
              </p>
              <p className="errors">{errors.difficulties}</p>
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
                <div key={e.id} className="pais">
                  <img src={e[0].flags} alt="alt" width="80px" height="50px" />
                  <button
                    onClick={() => {
                      handleDelete(e);
                    }}
                  >
                    X
                  </button>
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
