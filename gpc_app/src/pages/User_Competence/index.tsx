import Header from "../../components/Header_user";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";

export default function Typology() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar bg="#FB970D" path="./public/icon_skill.png" title="Tipologias" />
          <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>
            Aqui ficará enumeradas a competências
          </h1>
        </Box>
      </Box>
    </Box>
  );
}