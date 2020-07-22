import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Instituto Cuatrovientos</h1>
    <p>
      {" "}
      NUESTRA MISIÓN ES LA EDUCACIÓN INTEGRAL DE PERSONAS PARA SU INCLUSIÓN EN
      LA SOCIEDAD Y LA EMPRESA.
    </p>

    <Link to="about" className="btn btn-primary btn-lg">
      Saber más
    </Link>
  </div>
);

export default HomePage;
