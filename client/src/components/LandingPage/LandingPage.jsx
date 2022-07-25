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
        <Link to={"/home"}>
          <button value="South America">
            <img
              src={americaSur}
              alt="AmericaSur"
              width="auto"
              height="430px"
            />
          </button>
        </Link>
      </div>
      <div className="americaNorte">
        <Link>
          <img
            src={americaNorte}
            alt="AmericaNorte"
            width="723px"
            height="520px"
          />
        </Link>
      </div>
      <div className="africa">
        <Link>
          <img src={africa} alt="Africa" width="400px" height="445px" />
        </Link>
      </div>
      <div className="asia">
        <Link>
          <img src={asia} alt="Asia" width="652px" height="532px" />
        </Link>
      </div>
      <div className="europa">
        <Link>
          <img src={europa} alt="Europa" width="387px" height="269px" />
        </Link>
      </div>
      <div className="oceania">
        <Link>
          <img src={oceania} alt="oceania" width="235px" height="275px" />
        </Link>
      </div>
    </div>
  );
}
