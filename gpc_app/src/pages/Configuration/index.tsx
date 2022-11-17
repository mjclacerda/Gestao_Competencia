import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";

export default function Configuration() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        Este aqui é a página de configuração
      </Box>
    </Box>
  );
}
