import { useEffect, useState } from "react";
import { Switch, useLocation } from "react-router";
import axios from "axios";
import "./itemDetail.scss";

export const ItemDetail = (props) => {
  const location = useLocation();
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log("location changed" + location.pathname);

    const itemId = location.pathname.split("/")[2];
    console.log("itemId: " + itemId);

    try {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${itemId}/`)
        .then((response) => {
          console.log(response.data);
          setItem(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  return (
    <Switch>
      <div className="item-detail-container">
        <h3>{item?.name}</h3>
        <img src={item?.sprites.other.home.front_default} alt={item?.name} />
        <p>Species: {item?.species.name}</p>
        <p>Height: {item?.height}</p>
        <p>Weight: {item?.weight}</p>
      </div>
    </Switch>
  );
};
