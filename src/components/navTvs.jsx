import React from "react";

const NavTvs = () => {
  return (
    <div>
      <ul className="ul_nav">
        <li>
          <a href="#">Peliculas</a>{" "}
        </li>
        <li>
          <a href="#">Programa de tv</a>{" "}
        </li>
        <li>
          <a href="#">Personas</a>{" "}
        </li>
        <li>
          <a href="#">Más</a>{" "}
        </li>
      </ul>
      <div className="input_nav">
        <input className="input" type="search" placeholder="Buscar... 🔎" />
      </div>
    </div>
  );
};

export default NavTvs;
