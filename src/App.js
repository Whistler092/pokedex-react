import "./App.css";
import { Grid } from "@material-ui/core";
import { Items } from "./Items/Items";
import axios from "axios";
import { urlPokemon } from "./utils/endpoints";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ItemDetail } from "./Items/ItemDetail";
import { Search } from "./Items/Search";
import homeIcon from "./assets/Home.png";


function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [searchParameter, setSearchParameter] = useState("");

  useEffect(() => {
    try {
      axios.get(urlPokemon).then((response) => {
        setPokemonsList(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onSearchHandler = (search) => {
    setSearchParameter(search);
  };

  return (
    <>
      <BrowserRouter>
        <Grid container>
          <Grid item xs={4}>
            <div className="header">
              <Search onSearch={onSearchHandler} />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="header">
              <h1>Pokédex</h1>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="header">
              <img src={homeIcon} alt="home Icon" />
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} md={3}>
            <Items
              pokemons={pokemonsList?.filter((i) =>
                searchParameter ? i.name.toLowerCase().includes(searchParameter.toLowerCase()) : true
              )}
            />
          </Grid>
          <Grid item xs={8} md={9}>
            <ItemDetail />
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
