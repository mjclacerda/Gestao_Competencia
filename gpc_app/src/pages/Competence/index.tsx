import Header from "../../components/Header";
import { Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, FlexSemiBox } from "../../components/Component";
import { BottonCDesc, BottonTDesc } from "../../components/BottonList";

const style = {
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
  padding: 50,
};

export default function Typology() {
  //essa variável tem que ser buscada no banco, além disso é preciso capturar o valor do botão para pesquisar as competências relacionadas a tipologia escolhida
  const tipologias = [
    {
      Tipologia: "Organizacionais",
      Conceito:
        "Competência organizacional é a capacidade da empresa de integrar e coordenar seus recursos e processos, de forma estratégica, competitiva e única, de forma que agreguem valor à organização, formando sua identidade e gerando vantagem competitiva sustentável.",
    },
    {
      Tipologia: "Comuns",
      Conceito:
        "Competência comum quando atribuída igualmente a mais de um ente, deixando-se o âmbito de atuação de cada um a ser definido pela preponderância do interesse.",
    },
    {
      Tipologia: "Gerenciais",
      Conceito:
        "Competências Gerenciais são conhecimentos, habilidades e atitudes, necessários aos diferentes níveis da organização, que resultam no que os gestores realizam ou produzem no trabalho.",
    },
    {
      Tipologia: "Específicas",
      Conceito:
        "Competências específicas são todas as habilidades, conhecimentos, valores e pensamentos necessários para desenvolver adequadamente uma tarefa ou um emprego.",
    },
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
          <FlexSemiBox
            style={{
              height: "40vh",
              background: "#eae7e46d",
            }}
          >
            <Typography style={{ fontSize: 16, marginBottom: 20 }}>
              TIPOLOGIAS CADASTRADAS
            </Typography>
            <BottonTDesc list={tipologias} />
          </FlexSemiBox>
          <FlexSemiBox
            style={{
              height: "51.5vh",
            }}
          >
            <Typography style={{ fontSize: 14, marginBottom: 20 }}>
              COMPETÊNCIAS
            </Typography>
            <BottonCDesc list={competencias} />
          </FlexSemiBox>
        </BoxColumn>
      </FlexBox>
    </BoxColumn>
  );
}
