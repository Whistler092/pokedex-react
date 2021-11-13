import "./App.css";
import { Grid } from "@material-ui/core";
import { Items } from "./Items/Items";
import axios from "axios";
import { urlPokemon } from "./utils/endpoints";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ItemDetail } from "./Items/ItemDetail";

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    try {
      axios.get(urlPokemon).then((response) => {
        setPokemonsList(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  /* async function getPokemons() {
    try {
      await axios.get(urlPokemon).then((response) => {
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  } */

  return (
    <>
      <BrowserRouter>
        <Grid container>
          <Grid item xs={12}>
            <div className="header">
              <h1>Pokédex</h1>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <Items pokemons={pokemonsList} />
          </Grid>
          <Grid item xs={8}>
            <ItemDetail />
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
