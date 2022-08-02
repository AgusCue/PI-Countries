import React from "react";
import { Link } from "react-router-dom";

import gif from "../imagenes/mundo.gif";
import americaSur from "../imagenes/americaSur.png";
import americaNorte from "../imagenes/AmericaNorte.png";
import africa from "../imagenes/Africa.png";
import asia from "../imagenes/Asia.png";
import europa from "../imagenes/Europa.png";
import oceania from "../imagenes/Australia.png";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="fondo">
      <Link to="/home" className="btn">
        <img src={gif} alt="img" width="100px" height="100px" />
      </Link>
      <div className="americaSur">
        <img src={americaSur} alt="AmericaSur" width="auto" height="430px" />
      </div>
      <div className="americaNorte">
        <img
          src={americaNorte}
          alt="AmericaNorte"
          width="723px"
          height="520px"
        />
      </div>
      <div className="africa">
        <img src={africa} alt="Africa" width="400px" height="445px" />
      </div>
      <div className="asia">
        <img src={asia} alt="Asia" width="652px" height="532px" />
      </div>
      <div className="europa">
        <img src={europa} alt="Europa" width="387px" height="269px" />
      </div>
      <div className="oceania">
        <img src={oceania} alt="oceania" width="235px" height="275px" />
      </div>
    </div>
  );
}
