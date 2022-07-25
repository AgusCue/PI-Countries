import React from "react";
import "./Loading.css";

import gif from "../imagenes/preloader.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={gif} alt="gif" />
    </div>
  );
};

export default Loading;
