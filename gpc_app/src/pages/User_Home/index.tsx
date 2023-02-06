import Header from "../../components/Header_user";
import { Box, Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { v4 as uuid } from "uuid";
import { linkStyle } from "../../components/Side_menu";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  BoxColumn,
  StyledBox,
  FlexBox,
  StyledAvatar,
} from "../../components/Component";

const buttonok = {
  textDecoration: "none",
  color: "white",
  backgroundColor: "#0cc559",
  margin: 5,
  fontfamily: "roboto",
  fontSize: "18px",
  padding: "10px",
  border: "none",
  borderRadius: "4px",
  minWidth: 150,
};

const normal = {
  textDecoration: "none",
  color: "black",
  backgroundColor: "#d9d9d9",
  margin: 5,
  fontfamily: "roboto",
  fontSize: "16px",
  padding: "10px",
  border: "none",
  borderRadius: "4px",
  minWidth: 150,
};

export default function Dashboard() {
  /*A variável de contexto openinvent, verifica se há algum inventário aberto no momento 
  e se houver os botões de acesso as pesquisas são liberados*/
  const { openinvent, page, questions, boss, subEval, bossresp } =
    useContext(AuthContext);
  let StyledSelf = normal;
  let StyledBoss = buttonok;
  let StyledTeam = buttonok;
  let linkSelf = "/self_evaluation";
  let linkBoss = "/pesquisa";
  let linkTeam = "/pesquisa";
  if (page === questions) {
    StyledSelf = buttonok;
    linkSelf = "/pesquisa";
  }
  if (boss) {
    linkBoss = "/boss_evaluation";
    StyledBoss = normal;
    if (subEval * page === bossresp) {
      StyledBoss = buttonok;
      linkBoss = "/pesquisa";
    }
  }
  const team = false;
  if (team) {
    linkTeam = "/team_evaluation";
    StyledTeam = normal;
  }

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
                    {openinvent ? (
                      <BoxColumn style={{ maxWidth: "10vw" }}>
                        <Link key={uuid()} to={linkSelf} style={linkStyle}>
                          <button
                            key={uuid()}
                            style={StyledSelf}
                            value="Autoavaliação"
                          >
                            Autoavaliação
                          </button>
                        </Link>
                        <Link key={uuid()} to={linkBoss} style={linkStyle}>
                          <button
                            key={uuid()}
                            style={StyledBoss}
                            value="Avaliação Chefia"
                          >
                            Avaliação Chefia
                          </button>
                        </Link>
                        <Link key={uuid()} to={linkTeam} style={linkStyle}>
                          <button
                            key={uuid()}
                            style={StyledTeam}
                            value="Avaliação Equipe"
                          >
                            Avaliação Equipe
                          </button>
                        </Link>
                      </BoxColumn>
                    ) : (
                      <BoxColumn style={{ maxWidth: "10vw" }}>
                        <Typography
                          sx={{
                            minWidth: "19vw",
                            minHeight: 30,
                            borderRadius: 3,
                            color: "#055b0b",
                            padding: 3,
                            marginBottom: 2,
                            background: "#09871128",
                          }}
                        >
                          No momento não há pesquisas em aberto.
                        </Typography>
                        <button
                          key={uuid()}
                          style={normal}
                          value="Autoavaliação"
                          disabled
                        >
                          Autoavaliação
                        </button>
                        <button
                          key={uuid()}
                          style={normal}
                          value="Avaliação Chefia"
                          disabled
                        >
                          Avaliação Chefia
                        </button>
                        <button
                          key={uuid()}
                          style={normal}
                          value="Avaliação Equipe"
                          disabled
                        >
                          Avaliação Equipe
                        </button>
                      </BoxColumn>
                    )}
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
            </BoxColumn>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
}
