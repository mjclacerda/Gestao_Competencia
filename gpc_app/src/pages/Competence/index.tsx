import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";

export default function Tipografy() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Bar bg="#FB970D" path="./public/icon_skill.png" title="Tipologias" />
      </Box>
    </Box>
  );
}
