import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";

export default function Tipografy() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        Este aqui é o página da Tipografia
      </Box>
    </Box>
  );
}
