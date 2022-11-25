import Header from "../../components/Header";
import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { FlexBox, StyledBox } from "../../components/Component";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SelectInv from "../../components/SelectInv";

export default function Config_inv() {
  const [ano, setAno] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAno(event.target.value);
  };

  return (
    <Box>
      <Header />
      <Box>
        <Box display="flex" flexDirection="row">
          <Side_menu />
          <Box display="flex" flexDirection="column">
            <Bar
              bg="#b1aeae"
              path="./public/icon_conf.png"
              title="Configurações - Inventário"
            />
            <StyledBox>
              <SelectInv ano={ano} handleChange={handleChange} />
            </StyledBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
