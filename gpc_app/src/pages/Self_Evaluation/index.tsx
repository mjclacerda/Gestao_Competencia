import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Header from "../../components/Header_user";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { BoxColumn, StyledBox } from "../../components/Component";
import { Self_Ask } from "../../components/Self_Ask";
import { useState, useEffect } from "react";
import { getCompetences, getUsers } from "../Backend_Integration";
import { IUser } from "../../components/Interfaces";

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

export default function Self_Evaluation() {
  const [bossName, setBossName] = useState<string[]>([]);
  const [competencias, setCompetencias] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCompetences();
      setCompetencias(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setUsers(data);
    })();
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof bossName>) => {
    const {
      target: { value },
    } = event;
    setBossName(
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
            path="./public/user_check.png"
            title="Autoavaliação"
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
                  Chefe Imediato
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="boss_name"
                  value={bossName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Chefe Imediato" />}
                  MenuProps={MenuProps}
                  style={{ height: 40, marginBottom: "5vh" }}
                >
                  {users.map((name: IUser) => (
                    <MenuItem key={name.name} value={name.name}>
                      {name.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Self_Ask list={competencias} />
            </BoxColumn>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
}
