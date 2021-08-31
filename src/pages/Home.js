import { useState } from "react";
import { IconButton, Paper, InputBase, } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import ReactPaginate from "react-paginate";
import CardPokemon from "../components/CardPokemon";
import Select from "../components/Select";
import { useStyles } from "../styles";
import { useForm } from "../hooks/useForm";
import data from "../data/data.json";

const Home = () => {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(0);
  const pokemonPage = 14;
  const pagesVisited = pageNumber * pokemonPage;
  const [typePokemon, setTypePokemon] = useState("");

  const handleChange = (event) => {
    setTypePokemon(event.target.value);
  };

  const { values, handleInputChange } = useForm({ search: "" });
  const pageCount = Math.ceil(data.pokemon.length / pokemonPage);
  const handlePageClick = ({ selected: selectedPage }) => {
    setPageNumber(selectedPage);
  };

  return (
    <>
      <div className="animate__animated animate__fadeInUpBig app-contaner">
        <h1>Pokemon Prueba</h1>
        <Paper elevation={2} className={classes.paperSearch}>
          {/* <form onSubmit={ handleSearch }> */}
          <InputBase
            className={classes.input}
            name="search"
            placeholder="Buscar pokemón"
            value={values.search}
            onChange={handleInputChange}
          />
          <IconButton className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
        </Paper>
        <Select typePokemon={typePokemon} handleChange={handleChange}/>
        <div className=" pokemon-container">
          <div className="all-container">
            {values.search === "" &&
              typePokemon === "" &&
              data.pokemon
                .slice(pagesVisited, pagesVisited + pokemonPage)
                .filter((filtro) =>
                  filtro.name
                    .toLowerCase()
                    .includes(values.search.toLowerCase())
                )
                .map((pokemons) => {
                  return (
                    <CardPokemon
                      key={pokemons.num}
                      id={pokemons.id}
                      image={pokemons.img}
                      name={pokemons.name}
                      type={pokemons.type[0]}
                      type2={pokemons.type[1]}
                      num={pokemons.num}
                    />
                  );
                })}{" "}
            {values.search !== "" &&
              typePokemon === "" &&
              data.pokemon
                .filter((filtro) =>
                  filtro.name
                    .toLowerCase()
                    .includes(values.search.toLowerCase())
                )
                .map((pokemons) => {
                  return (
                    <CardPokemon
                      key={pokemons.num}
                      id={pokemons.id}
                      image={pokemons.img}
                      name={pokemons.name}
                      type={pokemons.type[0]}
                      type2={pokemons.type[1]}
                      num={pokemons.num}
                    />
                  );
                })}
            {values.search === "" &&
              typePokemon !== "" &&
              data.pokemon
                .filter((filtro) =>
                  filtro.type[0]
                    .toLowerCase()
                    .includes(typePokemon.toLowerCase())
                )
                .map((pokemons) => {
                  return (
                    <CardPokemon
                      key={pokemons.num}
                      id={pokemons.id}
                      image={pokemons.img}
                      name={pokemons.name}
                      type={pokemons.type[0]}
                      type2={pokemons.type[1]}
                      num={pokemons.num}
                    />
                  );
                })}
            {values.search === "" && typePokemon === "" && (
              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
