import { BootstrapButton, BoxColumn, FlexBox } from "./Component";
import { Link } from "react-router-dom";
import { linkStyle } from "./Side_menu";
import { Paper, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";

interface IBottonList {
  list: Array<string>;
}

interface IBottonDesc {
  list:
    | Array<{ Tipologia?: string; Competencia: string; Conceito: string }>
    | any;
}

export function BottonLink({ list }: IBottonList) {
  return (
    <div key={uuid()} style={{ display: "block" }}>
      {list.map((tipo) => (
        <Link key={uuid()} to={"/config_comp"} style={linkStyle}>
          <BootstrapButton
            key={uuid()}
            style={{ margin: 3, fontSize: 16 }}
            value={tipo}
          >
            {tipo}
          </BootstrapButton>
        </Link>
      ))}
    </div>
  );
}

export function BottonList({ list }: IBottonList) {
  return (
    <div key={uuid()} style={{ display: "block" }}>
      {list.map((tipo) => (
        <BootstrapButton
          key={uuid()}
          style={{
            margin: 3,
            fontSize: 16,
            color: "black",
            background: "#00EFFF",
          }}
          value={tipo}
        >
          {tipo}
        </BootstrapButton>
      ))}
    </div>
  );
}

export function BottonTDesc({ list }: IBottonDesc) {
  return (
    <div
      key={uuid()}
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {list.map((tipo: any) => (
        <BoxColumn key={uuid()} style={{ width: "18vw", margin: 20 }}>
          <BootstrapButton
            key={uuid()}
            style={{ marginBottom: -20, marginLeft: 20, fontSize: 14 }}
          >
            {tipo.Tipologia}
          </BootstrapButton>
          <div
            key={uuid()}
            style={{
              background: "#e5e5e5ea",
              color: "#040303",
              textAlign: "justify",
              padding: "20px",
              paddingTop: "10px",
              borderRadius: "5px",
            }}
          >
            <Typography
              key={uuid()}
              style={{
                position: "relative",
                top: "10px",
                fontSize: 12,
              }}
            >
              {tipo.Conceito}
            </Typography>
          </div>
        </BoxColumn>
      ))}
    </div>
  );
}

export function BottonCDesc({ list }: IBottonDesc) {
  return (
    <div
      key={uuid()}
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {list.map((tipo: any) => (
        <BoxColumn key={uuid()} style={{ width: "18vw", margin: 20 }}>
          <BootstrapButton
            key={uuid()}
            style={{
              marginBottom: -20,
              marginLeft: 20,
              background: "#00EFFF",
              color: "#000000",
              fontSize: "12px",
            }}
          >
            {tipo.Competencia}
          </BootstrapButton>
          <div
            key={uuid()}
            style={{
              background: "#f3efefcd",
              color: "#040303",
              textAlign: "justify",
              padding: "20px",
              paddingTop: "10px",
              borderRadius: "5px",
            }}
          >
            <Typography
              key={uuid()}
              style={{
                position: "relative",
                top: "10px",
                fontSize: 12,
              }}
            >
              {tipo.Conceito}
            </Typography>
          </div>
        </BoxColumn>
      ))}
    </div>
  );
}
