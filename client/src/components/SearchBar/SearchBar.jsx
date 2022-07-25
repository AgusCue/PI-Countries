import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../action";
import lupa from "../imagenes/lupa.png";

import "./SearchBar.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return alert("Search a country");
    dispatch(getName(name.toLowerCase()));
    setCurrentPage(1);
  }

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Search here..."
        onChange={(e) => handleInput(e)}
      />
      <a class="search-btn" href="#" onClick={(e) => handleSubmit(e)}>
        <img src={lupa} alt="lupa" width="60px" height="60px" />
        <i class="fas fa-search"></i>
      </a>
      {/* <button type="submit" onClick={(e) => handleSubmit(e)}>
      </button> */}
    </div>
  );
}
