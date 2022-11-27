import Header from "../../components/Header";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, StyledBox } from "../../components/Component";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SelectInv from "../../components/SelectInv";

export default function Config_inv() {
  const [ano, setAno] = React.useState("");
  const [mes, setMes] = React.useState("");
  const [anofinal, setAnofinal] = React.useState("");
  const [mesfinal, setMesfinal] = React.useState("");

  //criar busca no banco para o último inventário
  const ultimo = "2022";

  const handleChange = (event: SelectChangeEvent) => {
    setAno(event.target.value);
  };
  const handleChangeMes = (event: SelectChangeEvent) => {
    setMes(event.target.value);
  };
  const handleChangeFinal = (event: SelectChangeEvent) => {
    setAnofinal(event.target.value);
  };
  const handleChangeMesFinal = (event: SelectChangeEvent) => {
    setMesfinal(event.target.value);
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
              <FlexBox style={{ flex: 0.9 }}>
                <SelectInv
                  mes={mes}
                  mesf={mesfinal}
                  ano={ano}
                  anof={anofinal}
                  handleChange={handleChange}
                  handleChangeFinal={handleChangeFinal}
                  handleChangeMes={handleChangeMes}
                  handleChangeMesFinal={handleChangeMesFinal}
                />
              </FlexBox>
              <Typography
                sx={{
                  margin: "60px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Útimo Inventário:{" "}
                <span
                  style={{ background: "#0FEDFB", padding: 4, borderRadius: 6 }}
                >
                  {ultimo}
                </span>
              </Typography>
            </StyledBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
