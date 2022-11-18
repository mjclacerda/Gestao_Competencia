import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";

export default function Config_inv() {
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
            <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>
              Aqui ficarão as configurações do inventário
            </h1>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
