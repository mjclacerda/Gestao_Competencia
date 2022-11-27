import Header from "../../components/Header_user";
import { Box, Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { v4 as uuid } from "uuid";
import { linkStyle } from "../../components/Side_menu";
import { Link } from "react-router-dom";
import {
  BoxColumn,
  StyledBox,
  BootstrapButton,
  FlexBox,
  StyledAvatar,
} from "../../components/Component";
import { textTransform } from "@mui/system";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar bg="#2272eb" path="./public/icon_pesq.png" title="Pesquisa" />
          <StyledBox>
            <FlexBox>
              <BoxColumn style={{ margin: "6vh", flex: 1 }}>
                <Typography style={{ marginBottom: "3vh" }}>
                  Olá, bem vindo ao Sistema Eletrônico de Gestão de Pessoas por
                  Competências.
                </Typography>
                <Link key={uuid()} to={"/autoavaliacao"} style={linkStyle}>
                  <BootstrapButton
                    key={uuid()}
                    style={{
                      marginBottom: 10,
                      fontSize: 16,
                      background: "#d9d9d9",
                      color: "#000000",
                      textTransform: "none",
                    }}
                    value="Autoavaliação"
                  >
                    Autoavaliação
                  </BootstrapButton>
                </Link>
                <Link key={uuid()} to={"/avaliacaochefia"} style={linkStyle}>
                  <BootstrapButton
                    key={uuid()}
                    style={{
                      marginBottom: 10,
                      fontSize: 16,
                      background: "#d9d9d9",
                      color: "#000000",
                      textTransform: "none",
                    }}
                    value="Avaliação Chefia"
                  >
                    Avaliação Chefia
                  </BootstrapButton>
                </Link>
                <Link key={uuid()} to={"/avaliacaochefia"} style={linkStyle}>
                  <BootstrapButton
                    key={uuid()}
                    style={{
                      fontSize: 16,
                      background: "#d9d9d9",
                      color: "#000000",
                      textTransform: "none",
                    }}
                    value="Avaliação Equipe"
                  >
                    Avaliação Equipe
                  </BootstrapButton>
                </Link>
              </BoxColumn>
              <StyledAvatar
                style={{ width: 400, height: 400 }}
                alt="brain"
                src="./brain.svg"
              />
            </FlexBox>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
}
