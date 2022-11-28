import Header from "../../components/Header_user";
import { Box, Typography } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { BoxColumn, StyledBox } from "../../components/Component";
import { Other_Ask } from "../../components/Other_Ask";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const bossnames = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Boss_Evaluation() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar
            bg="#2272eb"
            path="./public/boss_check.png"
            title="Avaliação da Chefia"
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
              <FormControl sx={{ marginLeft: "10vw", width: 300 }}>
                <InputLabel id="demo-multiple-name-label">
                  Membro da Equipe
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="boss_name"
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Membro da Equipe" />}
                  MenuProps={MenuProps}
                  style={{ height: 40, marginBottom: "5vh" }}
                >
                  {bossnames.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Other_Ask list={competencias} />
            </BoxColumn>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
}
