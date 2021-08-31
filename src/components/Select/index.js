import { FormControl, Select as Selected, MenuItem, FormHelperText,} from "@material-ui/core";
import { useStyles } from "../../styles";

const Select = ({typePokemon , handleChange }) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
        <Selected
          value={typePokemon}
          onChange={handleChange}
          displayEmpty
          name="typePokemon"
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Tipo de Pokemon</em>
          </MenuItem>
          <MenuItem value={"grass"}>Tipo Planta</MenuItem>
          <MenuItem value={"poison"}>Tipo Veneno</MenuItem>
          <MenuItem value={"bug"}>Tipo Insecto</MenuItem>
          <MenuItem value={"water"}>Tipo Agua</MenuItem>
          <MenuItem value={"fire"}>Tipo Fuego</MenuItem>
          <MenuItem value={"normal"}>Tipo Normal</MenuItem>
          <MenuItem value={"flying"}>Tipo Volador</MenuItem>
          <MenuItem value={"electric"}>Tipo Electrico</MenuItem>
          <MenuItem value={"ground"}>Tipo Tierra</MenuItem>
          <MenuItem value={"fighting"}>Tipo Lucha</MenuItem>
          <MenuItem value={"psychic"}>Tipo psíquico</MenuItem>
          <MenuItem value={"rock"}>Tipo Roca</MenuItem>
          <MenuItem value={"ghost"}>Tipo Fantasma</MenuItem>
          <MenuItem value={"dark"}>Tipo Oscuro</MenuItem>
          <MenuItem value={"fairy"}>Tipo hada</MenuItem>
        </Selected>
        <FormHelperText>
          Seleccione un tipo de pokemon de su preferencia
        </FormHelperText>
      </FormControl>
    )
}

export default Select
