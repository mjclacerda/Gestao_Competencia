import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import ImageButton from "../../components/ImageButton";
import { Link } from "react-router-dom";

export default function Configuration() {
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
              title="Configurações"
            />
            <Link to="/config_db">
              <ImageButton
                title="Conexão DB"
                path="./public/database.png"
                x="25%"
                y="220%"
              />
            </Link>
            <Link to="/config_tc">
              <ImageButton
                title="Tipologias e Competências"
                path="./public/typology.png"
                x="50%"
                y="10%"
              />
            </Link>
            <Link to="/config_inv">
              <ImageButton
                title="Inventário de Lacunas de Competências"
                path="./public/inventory.png"
                x="75%"
                y="20%"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
