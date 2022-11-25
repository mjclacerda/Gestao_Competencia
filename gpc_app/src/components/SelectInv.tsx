import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

interface ISelect {
  ano: number | string;
  handleChange: any;
}

export default function SelectInv({ ano, handleChange }: ISelect) {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="ano_id">Ano</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={ano}
          onChange={handleChange}
          label="ano"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>2022</MenuItem>
          <MenuItem value={20}>2023</MenuItem>
          <MenuItem value={30}>2024</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
