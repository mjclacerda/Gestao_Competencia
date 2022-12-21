import Header from "../../components/Header_user";
import { Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { BoxColumn, FlexBox, FlexSemiBox } from "../../components/Component";
import { BottonCDesc, BottonTDesc } from "../../components/BottonList";
import { useFetch } from "../Backend_Integration";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Typology() {
  const [competencias, setCompetencias] = useState([]);
  const [selectedTyp, setSelectedTyp] = useState("");

  let tipologias = useFetch("http://localhost:3000/typologies");

  useEffect(() => {
    axios
      .get("http://localhost:3000/competences")
      .then((resp) => {
        setCompetencias(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function ClikTypology(event: any) {
    const {
      target: { value, name },
    } = event;
    const data = axios
      .get(`http://localhost:3000/competencesfortypology/${value}`)
      .then((resp) => {
        setCompetencias(resp.data);
      })
      .catch((err) => {
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
