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

export default function Dashboard() {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar bg="#2272eb" path="./public/icon_pesq.png" title="Pesquisa" />
          <StyledBox>
            <BoxColumn>
              <FlexBox>
                <FlexBox style={{ flex: 1 }}>
                  <BoxColumn style={{ margin: "6vh" }}>
                    <Typography style={{ marginBottom: "3vh" }}>
                      Olá, bem vindo ao Sistema Eletrônico de Gestão de Pessoas
                      por Competências.
                    </Typography>
                    <Link
                      key={uuid()}
                      to={"/self_evaluation"}
                      style={linkStyle}
                    >
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
                    <Link
                      key={uuid()}
                      to={"/boss_evaluation"}
                      style={linkStyle}
                    >
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
                    <Link
                      key={uuid()}
                      to={"/team_evaluation"}
                      style={linkStyle}
                    >
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
                </FlexBox>
                <FlexBox style={{ paddingInline: 250 }}>
                  <BoxColumn style={{ margin: "6vh", alignItems: "center" }}>
                    <StyledAvatar
                      style={{ width: 300, height: 300 }}
                      alt="brain"
                      src="./brain.svg"
                    />
                    <Typography>SISTEMA DE GESTÃO POR COMPETÊNCIAS</Typography>
                  </BoxColumn>
                </FlexBox>
              </FlexBox>
              <FlexBox style={{ alignSelf: "center", paddingTop: 100 }}>
                <Typography style={{ fontWeight: "bold" }}>
                  Perguntas frequentes:
                </Typography>
              </FlexBox>
            </BoxColumn>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
}
