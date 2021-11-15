import { useEffect, useState } from "react";
import { Switch, useLocation } from "react-router";
import axios from "axios";
import "./itemDetail.scss";
import pokemonType from "../assets/PokemonType.png";
import catchIcon from "../assets/Catch.png";
import detailsIcon from "../assets/Details.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "#000b65",
  border: "2px solid #000",
  boxShadow: 24,
  color: "white",
  p: 4,
};

export const ItemDetail = (props) => {
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [openCatch, setOpenCatch] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

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

  const catchPokemonHandleOpen = () => setOpenCatch(true);
  const catchPokemonHandleClose = () => setOpenCatch(false);

  const detailPokemonHandleOpen = () => setOpenDetail(true);
  const detailPokemonHandleClose = () => setOpenDetail(false);

  return (
    <Switch>
      <div className="item-detail-container">
        <Modal
          open={openDetail}
          onClose={detailPokemonHandleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {item?.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div className="pokemon-modal-detail">
                <img
                  className="pokemon-image"
                  src={item?.sprites.other.home.front_default}
                  alt={item?.name}
                />
                <div className="pokemon-modal-detail-info">
                  <p>Species: {item?.species.name}</p>
                  <p>Height: {item?.height}</p>
                  <p>Weight: {item?.weight}</p>
                </div>
              </div>
            </Typography>
          </Box>
        </Modal>
        <div className="title-container">
          <img src={pokemonType} alt="pokemon type" />
          <h3 className="title">{item?.name}</h3>
        </div>
        <img
          className="pokemon-image"
          src={item?.sprites.other.home.front_default}
          alt={item?.name}
        />

        <div className="footer">
          <Button className="footer-option" onClick={catchPokemonHandleOpen}>
            <img src={catchIcon} alt="pokemon catch" />
            CATCH
          </Button>
          <Button className="footer-option" onClick={detailPokemonHandleOpen}>
            <img src={detailsIcon} alt="pokemon detail" />
            DETAILS
          </Button>
        </div>
      </div>
    </Switch>
  );
};
