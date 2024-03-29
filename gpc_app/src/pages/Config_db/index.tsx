import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { StyledBox } from "../../components/Component";

export default function Config_db() {
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
              title="Configurações - Conexão do Banco de Dados"
            />
            <StyledBox>
              As configurações do banco de dados ficarão aqui
            </StyledBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
