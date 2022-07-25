import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivity, getCountries, postActivity } from "../../action";

export default function CreatedActivity() {
  const distpach = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const history = useHistory();
  // console.log(allCountries);
  const [input, setInput] = useState({
    name: "",
    difficulties: "",
    duration: "",
    season: [],
    country: [],
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("se creo");
    distpach(postActivity(input));
    setInput({
      name: "",
      difficulties: "",
      duration: "",
      season: [],
    });
    history.push("/home");
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheckBox(e) {
    const click = e.target.value;
    if (e.target.checked) {
      setInput({
        ...input,
        season: [...input.season, ...click],
      });
    } else {
      console.log("error");
    }
  }

  function handleSelect(e) {
    const contry = allCountries.find((c) => c.id === e.target.value);
    setInput({
      ...input,
      country: [...input.country, contry],
    });
  }

  useEffect(() => {
    distpach(getActivity());
    distpach(getCountries());
  }, []);

  return (
    <div>
      <h1>Created Activity</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Name:</p>
        <input
          onChange={handleChange}
          type="text"
          value={input.name}
          name="name"
        />
        <p>Difficulties:</p>
        <input
          onChange={handleChange}
          type="number"
          value={input.difficulties}
          name="difficulties"
        />
        <p>Duration:</p>
        <input
          onChange={handleChange}
          type="text"
          value={input.duration}
          name="duration"
        />
        <div>
          <p>Season:</p>
          <p>Summer</p>
          <input
            onChange={(e) => handleCheckBox(e)}
            type="checkbox"
            value="Summer"
            name="Summer"
          />
          <p>Autumn</p>
          <input
            onChange={(e) => handleCheckBox(e)}
            type="checkbox"
            value="Autumn"
            name="Autumn"
          />
          <p>Winter</p>
          <input
            onChange={(e) => handleCheckBox(e)}
            type="checkbox"
            value="Winter"
            name="Winter"
          />
          <p>Spring</p>
          <input
            onChange={(e) => handleCheckBox(e)}
            type="checkbox"
            value="Spring"
            name="Spring"
          />
        </div>
        <select onChange={(e) => handleSelect(e)}>
          {allCountries.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <button type="submit">Created</button>
      </form>
    </div>
  );
}
