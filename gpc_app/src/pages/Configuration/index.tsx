import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import ImageButton from "../../components/ImageButton";
import { Link } from "react-router-dom";
import { FlexBox } from "../../components/Component";

export default function Configuration() {
  return (
    <Box>
      <Header />
      <Box>
        <Box display="flex" flexDirection="row">
          <Side_menu />
          <Box display="flex" flexDirection="column" alignItems="center">
            <Bar
              bg="#b1aeae"
              path="./public/icon_conf.png"
              title="Configurações"
            />
            <FlexBox
              style={{
                width: "55vw",
                height: "50vh",
                position: "relative",
                top: "20vh",
                alignItems: "center",
              }}
            >
              <FlexBox style={{ position: "relative", top: "8vh" }}>
                <Link to="/config_db">
                  <ImageButton
                    title="Conexão DB"
                    path="./public/database.png"
                  />
                </Link>
              </FlexBox>
              <FlexBox
                style={{ position: "relative", top: "-8vh", left: "8vw" }}
              >
                <Link to="/configchoose">
                  <ImageButton
                    title="Tipologias e Competências"
                    path="./public/typology.png"
                  />
                </Link>
              </FlexBox>
              <FlexBox
                style={{ position: "relative", top: "8vh", left: "16vw" }}
              >
                <Link to="/config_inv">
                  <ImageButton
                    title="Inventário de Lacunas de Competências"
                    path="./public/inventory.png"
                  />
                </Link>
              </FlexBox>
            </FlexBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
