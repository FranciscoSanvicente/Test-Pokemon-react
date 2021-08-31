import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { ButtonPokemon, useStyles } from "../styles";
import data from "../data/data.json";

const Details = ({ history }) => {
  const classes = useStyles();
  const { num } = useParams();
  if (!num) {
    return <Redirect to="/" />;
  }
  const datos = data.pokemon.find((dato) => dato.num === num);
  const handleReturn = () => {
    history.push("/");
  };
  return (
    <div className="row mt-5 ">
      <div className="col-4 ">
        <img
          src={datos.img}
          alt={datos.name}
          className="img-thumbnail details animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3> {datos.name} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b> generacion: </b> {datos.generation.name}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b> Tipo: </b> {datos.type[0]}{" "}
          </li>
          {datos.type[1] ? (
            <li className="list-group-item">
              {" "}
              <b> Tipo: </b> {datos.type[1]}{" "}
            </li>
          ) : null}
          <li className="list-group-item">
            {" "}
            <b> Descripcion: </b> {datos.about}{" "}
          </li>
        </ul>

        <h5> Peso </h5>
        <p> {datos.size.weight} </p>

        <ButtonPokemon
          size="small"
          variant="contained"
          color="primary"
          disableRipple
          className={classes.margin}
          onClick={handleReturn}
        >
          Home
        </ButtonPokemon>
      </div>
    </div>
  );
};

export default Details;
