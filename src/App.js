import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import { Items } from './Items/Items';

function App() {

  const pokemons = [
    { name: "Bulbasaur",
     number: "001"},
     { name: "Ivysaur",
     number: "002"},
     { name: "Venusaur",
     number: "003"},
  ]

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          Header
        </Grid>       
      </Grid>
      <Grid container>
      <Grid item xs={4} >
          <Items pokemons={pokemons} />
        </Grid>
        <Grid item xs={8} >
          Item Detail
        </Grid>
      </Grid>
    </>
  );
}

export default App;
