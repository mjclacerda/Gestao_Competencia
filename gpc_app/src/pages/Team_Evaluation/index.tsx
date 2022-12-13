import { Box, Typography } from "@mui/material";
import Header from "../../components/Header_user";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { BoxColumn, StyledBox } from "../../components/Component";
import { Other_Ask } from "../../components/Other_Ask";
import { useState, useEffect } from "react";
import { getCompetences, getUsers } from "../Backend_Integration";

//Buscar o nome do avaliado no banco
const evaluetedname = "Maria Janete Lacerda";

export default function Boss_Evaluation() {
  const [competencias, setCompetencias] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCompetences();
      setCompetencias(data);
    })();
  }, []);

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
