import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Search = ({ onSearch }) => {

    const [search, setSearch] = useState("");

    return (
        <Paper
          component="form"
          sx={{ p: "2px 4px", mt: "15px", display: "flex", alignItems: "center", width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Pokemon"
            value={search}
            onChange={e =>  {
                setSearch(e.target.value);
                onSearch(e.target.value);
            }}
            inputProps={{ "aria-label": "search Pokemon" }}
          />
          <IconButton  sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      );
      
}