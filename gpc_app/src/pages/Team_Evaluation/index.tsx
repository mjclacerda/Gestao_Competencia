import Header from "../../components/Header_user";
import { Box, Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { BoxColumn, StyledBox } from "../../components/Component";
import { Other_Ask } from "../../components/Other_Ask";

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

//Buscar o nome do avaliado no banco
const evaluetedname = "Maria Janete Lacerda";

export default function Boss_Evaluation() {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar
            bg="#2272eb"
            path="./public/team_check.png"
            title="Avaliação da Equipe"
          />
          <StyledBox>
            <BoxColumn>
              <Typography
                style={{
                  alignSelf: "start",
                  margin: "2vw",
                  marginLeft: "10vw",
                  fontWeight: "bold",
                }}
              >
                Avaliado: {evaluetedname}
              </Typography>
              <Other_Ask list={competencias} />
            </BoxColumn>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
}
