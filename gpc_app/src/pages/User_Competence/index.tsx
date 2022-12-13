import Header from "../../components/Header_user";
import { Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, FlexSemiBox } from "../../components/Component";
import { BottonCDesc, BottonTDesc } from "../../components/BottonList";
import {
  getTypologies,
  getCompetences,
  getCompetenceForTypologyId,
} from "../Backend_Integration";
import { useEffect, useState } from "react";

export default function Typology() {
  const [tipologias, setTipologias] = useState([]);
  const [competencias, setCompetencias] = useState([]);
  const [selectedTyp, setSelectedTyp] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getTypologies();
      setTipologias(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getCompetences();
      setCompetencias(data);
    })();
  }, []);

  function ClikTypology(event: any) {
    const {
      target: { value, name },
    } = event;
    (async () => {
      const data = await getCompetenceForTypologyId(value);
      setCompetencias(data);
      setSelectedTyp(name);
    })();
  }

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
            <BottonTDesc list={tipologias} event={ClikTypology} />
          </FlexSemiBox>
          <FlexSemiBox
            style={{
              height: "51.5vh",
            }}
          >
            <Typography style={{ fontSize: 14, marginBottom: 20 }}>
              COMPETÊNCIAS {selectedTyp.toUpperCase()} CADASTRADAS
            </Typography>
            <BottonCDesc list={competencias} />
          </FlexSemiBox>
        </BoxColumn>
      </FlexBox>
    </BoxColumn>
  );
}
