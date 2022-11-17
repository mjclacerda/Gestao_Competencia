import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";

export default function Configuration() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Bar bg="#b1aeae" path="./public/icon_conf.png" title="Configurações" />
      </Box>
    </Box>
  );
}
