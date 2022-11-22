import { BootstrapButton, BoxColumn, FlexBox } from "./Component";
import { Link } from "react-router-dom";
import { linkStyle } from "./Side_menu";
import { Paper, Typography } from "@mui/material";

interface IBottonList {
  list: Array<string>;
}

interface IBottonLinkDesc {
  list: Array<{ Tipologia: string; Conceito: string }> | any;
}

interface IBottonListDesc {
  list:
    | Array<{ Tipologia?: string; Competencia: string; Conceito: string }>
    | any;
}

export function BottonLink({ list }: IBottonList) {
  return (
    <div style={{ display: "block" }}>
      {list.map((tipo) => (
        <Link to={"/config_comp"} style={linkStyle}>
          <BootstrapButton style={{ margin: 3, fontSize: 16 }} value={tipo}>
            {tipo}
          </BootstrapButton>
        </Link>
      ))}
    </div>
  );
}

export function BottonList({ list }: IBottonList) {
  return (
    <div style={{ display: "block" }}>
      {list.map((tipo) => (
        <BootstrapButton
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

export function BottonLinkDesc({ list }: IBottonLinkDesc) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {list.map((tipo: any) => (
        <BoxColumn style={{ width: "18vw", margin: 20 }}>
          <Link to={"/config_comp"} style={linkStyle}>
            <BootstrapButton
              style={{ marginBottom: -20, marginLeft: 20, fontSize: 14 }}
            >
              {tipo.Tipologia}
            </BootstrapButton>
            <div
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
                style={{
                  position: "relative",
                  top: "10px",
                }}
              >
                {tipo.Conceito}
              </Typography>
            </div>
          </Link>
        </BoxColumn>
      ))}
    </div>
  );
}

export function BottonListDesc({ list }: IBottonListDesc) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {list.map((tipo: any) => (
        <BoxColumn style={{ width: "18vw", margin: 20 }}>
          <BootstrapButton
            style={{ marginBottom: -20, marginLeft: 20, fontSize: 14 }}
          >
            {tipo.Competencia}
          </BootstrapButton>
          <div
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
              style={{
                position: "relative",
                top: "10px",
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
