import Header from "../../components/Header";
import { Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, FlexSemiBox } from "../../components/Component";
import { BottonCDesc, BottonTDesc } from "../../components/BottonList";
import {
  useFetch,
  getCompetences,
  getCompetenceForTypologyId,
} from "../Backend_Integration";
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
  padding: 50,
};

export default function Typology() {
  const [competencias, setCompetencias] = useState([]);
  const [selectedTyp, setSelectedTyp] = useState("");

  let tipologias = useFetch("http://localhost:3000/typologies");

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
    const data = axios
      .get(`http://localhost:3000/competencesfortypology/${value}`)
      .then((resp) => {
        setCompetencias(resp.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setCompetencias([]);
      });
    setSelectedTyp(name);
  }

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
            <BottonTDesc list={tipologias.data} event={ClikTypology} />
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
