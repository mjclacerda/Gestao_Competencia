import { BootstrapButton, BoxColumn } from "./Component";
import {
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { v4 as uuid } from "uuid";

export interface ISelf_Ask {
  list:
    | Array<{ Tipologia?: string; Competencia: string; Conceito: string }>
    | any;
}

export function Self_Ask({ list }: ISelf_Ask) {
  return (
    <BoxColumn style={{ width: "87vw", overflow: "auto" }}>
      {list.map((item: any) => (
        <BoxColumn
          key={uuid()}
          style={{ width: "18vw", marginLeft: "10vw", marginBottom: "6vh" }}
        >
          <BootstrapButton
            key={uuid()}
            style={{
              marginBottom: -20,
              background: "#00EFFF",
              color: "#000000",
              fontSize: "16px",
            }}
          >
            {item.Competencia}
          </BootstrapButton>
          <div
            key={uuid()}
            style={{
              background: "#e8e1e1cd",
              color: "#040303",
              textAlign: "justify",
              padding: "20px",
              paddingTop: "10px",
              borderRadius: "5px",
              width: "36vw",
            }}
          >
            <Typography
              key={uuid()}
              style={{
                position: "relative",
                top: "10px",
                fontSize: 16,
              }}
            >
              {item.Conceito}
            </Typography>
          </div>
          <Typography
            style={{
              fontWeight: "bold",
              marginTop: "2vh",
              marginBottom: "2vh",
            }}
          >
            Analise a competência acima e responda:
          </Typography>
          <BoxColumn style={{ alignItems: "center", marginLeft: "20vw" }}>
            <Typography style={{ width: "40vw" }}>
              De 1 a 5, o quanto essa competência é importante para a realização
              de suas atividades laborais?
            </Typography>
            <FormControl style={{ width: "20vw", marginBottom: "1vh" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="1"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="2"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="3"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="4"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label="5"
                  labelPlacement="top"
                />
              </RadioGroup>
            </FormControl>
            <Typography style={{ width: "40vw" }}>
              De 1 a 5, o quanto você domina essa competência?
            </Typography>
            <FormControl style={{ width: "20vw" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="1"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="2"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="3"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="4"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label="5"
                  labelPlacement="top"
                />
              </RadioGroup>
            </FormControl>
          </BoxColumn>
        </BoxColumn>
      ))}
      <BootstrapButton
        style={{ width: "100px", alignSelf: "center", marginBottom: "5vh" }}
      >
        Enviar
      </BootstrapButton>
    </BoxColumn>
  );
}
