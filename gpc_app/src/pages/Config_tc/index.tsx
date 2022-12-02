import Header from "../../components/Header";
import { Box, Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox } from "../../components/Component";
import Form from "../../components/Form";
import { BottonLink } from "../../components/BottonList";

export default function Config_tc() {
  //essa variável tem que ser buscada no banco, além disso é preciso capturar o valor do botão para pesquisar as competências relacionadas a tipologia escolhida
  const tipologias = [
    "Organizacionais",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Organizacionais",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Organizacionais",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Organizacionais",
    "Específicas",
    "Organizacionais",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Organizacionais",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Organizacionais",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Organizacionais",
    "Gerenciais",
    "Comuns",
    "Específicas",
    "Organizacionais",
  ];

  return (
    <Box>
      <Header />
      <Box>
        <Box display="flex" flexDirection="row">
          <Side_menu />
          <Box display="flex" flexDirection="column">
            <Bar
              bg="#b0afaf"
              path="./public/icon_conf.png"
              title="Configurações - Tipologias"
            />
            <FlexBox
              style={{
                width: "85.2vw",
                height: "50vh",
                background: "#efefef",
                position: "relative",
                top: "2vh",
                left: "1vw",
              }}
            >
              <FlexBox
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: "83vw",
                  position: "relative",
                  top: "2vh",
                }}
              >
                <Typography style={{ margin: 40, fontSize: 18 }}>
                  TIPOLOGIAS CADASTRADAS
                </Typography>
                <BottonLink list={tipologias} />
              </FlexBox>
            </FlexBox>
            <FlexBox
              style={{
                width: "85.2vw",
                height: "33vh",
                background: "#ffffff",
                position: "relative",
                top: "3vh",
                left: "1vw",
              }}
            >
              <BoxColumn
                style={{
                  width: "30vw",
                  minWidth: "280px",
                  position: "relative",
                  left: "27vw",
                  top: "5vh",
                }}
              >
                <Typography
                  sx={{ marginBottom: 3, color: "#fd7b30", fontWeight: "bold" }}
                >
                  Cadastrar Tipologia
                </Typography>
                <Form label="Nome da tipologia" />
              </BoxColumn>
            </FlexBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
