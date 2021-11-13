import { Item } from "./item";
import './items.scss';

export const Items = ({ pokemons }) => {
  console.log("items", pokemons);
  return (
    <>
      <div className="row">
        {pokemons.map((poke) => {
          return <Item key={poke.name} pokemon={poke} />;
        })}
      </div>
    </>
  );
};
