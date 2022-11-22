import Header from "../../components/Header";
import { Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, StyledBox } from "../../components/Component";
import { BottonLinkDesc, BottonListDesc } from "../../components/BottonList";

export default function Typology() {
  //essa variável tem que ser buscada no banco, além disso é preciso capturar o valor do botão para pesquisar as competências relacionadas a tipologia escolhida
  const tipologias = [
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    {
      Tipologia: "Comuns",
      Conceito:
        "Promover a justiça, a democracia, a cidadania e a dignidade humana, contribuindo para a transformação dos direitos da sociedade em realidade.",
    },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
    { Tipologia: "Comuns", Conceito: "conceito de comuns" },
  ];
  const competencias = [
    {
      Tipologia: "Gerenciais",
      Competencia: "Defesa de Direitos",
      Conceito:
        "Promover a justiça, a democracia, a cidadania e a dignidade humana, contribuindo para a transformação dos direitos da sociedade em realidade.",
    },
    {
      Tipologia: "Gerenciais",
      Competencia: "Gestão Organizacional",
      Conceito:
        "Gerir pessoas, recursos e serviços por meio de soluções colaborativas e inovadoras alinhadas à estratégia institucional.",
    },
    {
      Tipologia: "Gerenciais",
      Competencia: "Foco do Usuário",
      Conceito:
        "Orientar a atuação institucional com vistas à qualidade dos serviços e à satisfação do usuário.",
    },
    {
      Tipologia: "Gerenciais",
      Competencia: "Resultividade",
      Conceito:
        "Atuar na prevenção e solução das demandas com efetividade, visando a otimização do desempenho institucional.",
    },
    {
      Tipologia: "Gerenciais",
      Competencia: "Interação Social",
      Conceito:
        "Fortalecer o diálogo permanente com a sociedade, ampliando os canais de aproximação com a comunidade.",
    },
  ];

  return (
    <BoxColumn>
      <Header />
      <FlexBox>
        <Side_menu />
        <BoxColumn>
          <Bar bg="#FB970D" path="./public/icon_skill.png" title="Tipologias" />
          <FlexBox
            style={{
              flexDirection: "column",
              alignItems: "center",
              width: "83vw",
            }}
          >
            <Typography style={{ margin: 20, fontSize: 18 }}>
              TIPOLOGIAS CADASTRADAS
            </Typography>
            <BottonLinkDesc list={tipologias} />
          </FlexBox>
          <FlexBox
            style={{
              flexDirection: "column",
              alignItems: "center",
              width: "83vw",
            }}
          >
            <Typography style={{ margin: 20, fontSize: 18 }}>
              Competências Relacionadas
            </Typography>
            <BottonListDesc list={competencias} />
          </FlexBox>
        </BoxColumn>
      </FlexBox>
    </BoxColumn>
  );
}
