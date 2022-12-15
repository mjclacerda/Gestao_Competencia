import Header from "../../components/Header";
import { Box, Typography, Stack, Alert } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import {
  BootstrapButton,
  BoxColumn,
  FlexBox,
} from "../../components/Component";
import { Link } from "react-router-dom";
import { linkStyle } from "../../components/Side_menu";
import { v4 as uuid } from "uuid";

export default function ConfigChoose() {
  return (
    <Box>
      <Header />
      <Box>
        <Box display="flex" flexDirection="row">
          <Side_menu />
          <BoxColumn style={{ background: "#efefef" }}>
            <Bar
              bg="#b1aeae"
              path="./public/icon_conf.png"
              title="Configurações - Tipologias & Competências"
            />
            <FlexBox
              style={{ alignSelf: "center", position: "relative", top: "10vh" }}
            >
              <Link key={uuid()} to={"/config_tc"} style={linkStyle}>
                <BootstrapButton
                  style={{ margin: "5vh", width: 200, fontSize: 20 }}
                >
                  Tipologias
                </BootstrapButton>
              </Link>
              <Link key={uuid()} to={"/config_comp"} style={linkStyle}>
                <BootstrapButton
                  style={{ margin: "5vh", width: 200, fontSize: 20 }}
                >
                  Competencias
                </BootstrapButton>
              </Link>
            </FlexBox>
          </BoxColumn>
        </Box>
      </Box>
    </Box>
  );
}
