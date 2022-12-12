import Header from "../../components/Header";
import { Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, FlexSemiBox } from "../../components/Component";
import { BottonCDesc, BottonTDesc } from "../../components/BottonList";
import { getTypologies, getCompetences } from "../Backend_Integration";

const style = {
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
  padding: 50,
};

const tipologias = await getTypologies();
const competencias = await getCompetences();

export default function Typology() {
  return (
    <BoxColumn>
      <Header />
      <FlexBox>
        <Side_menu />
        <BoxColumn>
          <Bar bg="#FB970D" path="./icon_skill.png" title="Tipologias" />
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
