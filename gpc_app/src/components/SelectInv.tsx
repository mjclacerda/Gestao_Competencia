import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { BootstrapButton, BoxColumn, FlexBox } from "./Component";
import { GenerateRange } from "./GenerateRange";

interface ISelect {
  ano: number | string;
  mes: number | string;
  anof: number | string;
  mesf: number | string;
  handleChange: any;
  handleChangeMes: any;
  handleChangeFinal: any;
  handleChangeMesFinal: any;
}

const meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

//Gerador de anos para o menu ano
const anos = GenerateRange(3);

export default function SelectInv({
  ano,
  anof,
  handleChange,
  handleChangeFinal,
  mes,
  mesf,
  handleChangeMes,
  handleChangeMesFinal,
}: ISelect) {
  return (
    <BoxColumn style={{ alignItems: "end", margin: "60px" }}>
      <Typography
        sx={{
          alignSelf: "center",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Abrir Novo Inventário
      </Typography>
      <FlexBox style={{ marginTop: 15, alignItems: "center" }}>
        <Typography
          sx={{
            alignSelf: "end",
            fontFamily: "Roboto",
            fontWeight: "light",
            fontSize: 18,
            marginRight: 3,
          }}
        >
          Abertura:
        </Typography>
        <FormControl variant="standard" sx={{ minWidth: 100, marginRight: 2 }}>
          <InputLabel id="mes_id">Mês</InputLabel>
          <Select
            labelId="mes"
            id="mes"
            value={mes}
            onChange={handleChangeMes}
            label="mês"
          >
            <MenuItem key={uuid()} value="">
              <em>None</em>
            </MenuItem>
            {meses.map((month) => (
              <MenuItem key={uuid()} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 100 }}>
          <InputLabel id="ano_id">Ano</InputLabel>
          <Select
            labelId="ano"
            id="ano"
            value={ano}
            onChange={handleChange}
            label="ano"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {anos.map((year) => (
              <MenuItem key={uuid()} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FlexBox>
      <FlexBox style={{ marginBottom: 15, alignItems: "center" }}>
        <Typography
          sx={{
            alignSelf: "end",
            fontFamily: "Roboto",
            fontWeight: "light",
            fontSize: 18,
            marginRight: 3,
          }}
        >
          Encerramento:
        </Typography>
        <FormControl variant="standard" sx={{ minWidth: 100, marginRight: 2 }}>
          <InputLabel id="mes_id">Mês</InputLabel>
          <Select
            labelId="mes"
            id="mes"
            value={mesf}
            onChange={handleChangeMesFinal}
            label="mês"
          >
            <MenuItem key={uuid()} value="">
              <em>None</em>
            </MenuItem>
            {meses.map((month) => (
              <MenuItem key={uuid()} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 100 }}>
          <InputLabel id="ano_id">Ano</InputLabel>
          <Select
            labelId="ano"
            id="ano"
            value={anof}
            onChange={handleChangeFinal}
            label="ano"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {anos.map((year) => (
              <MenuItem key={uuid()} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FlexBox>
      <FlexBox>
        <BootstrapButton
          style={{ margin: 3, background: "#0FEDFB", color: "#000000" }}
        >
          Abrir
        </BootstrapButton>
        <BootstrapButton
          style={{
            margin: 3,
            marginRight: -3,
            background: "#0FEDFB",
            color: "#000000",
          }}
        >
          Alterar
        </BootstrapButton>
      </FlexBox>
    </BoxColumn>
  );
}
