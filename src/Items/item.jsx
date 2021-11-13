import { useHistory } from "react-router";
import "./items.scss";

export const Item = ({ pokemon }) => {
  const history = useHistory();

  const id = pokemon?.url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

  const handleClick = () => {
    console.log("pokemon", pokemon, id);
    history.push(`/pokemon/${id}`);
  };
  return (
    <>
      <div className="item" onClick={handleClick}>
        {id}
        {" - "}
        {pokemon?.name}
      </div>
    </>
  );
};
