import { Link } from "react-router-dom";
import { useStyles, ButtonPokemon } from "../styles";

const CardPokemon = ({ image, name, type, type2, num }) => {
  const classes = useStyles();
  const style = type + " thumb-container";
  return (
    <div className={style}>
      <div className="number">
        <small># {num}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <small>Type: {type2}</small>
      </div>
      <ButtonPokemon
        component={Link}
        to={`./${num}`}
        size="large"
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        Ver Mas
      </ButtonPokemon>
    </div>
  );
};

export default CardPokemon;
