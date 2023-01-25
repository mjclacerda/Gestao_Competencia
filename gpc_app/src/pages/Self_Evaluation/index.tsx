import Header from "../../components/Header_user";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
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
import { BoxColumn, StyledBox } from "../../components/Component";
import { Self_Ask } from "../../components/Self_Ask";
import { useState, useEffect } from "react";
import { useFetch } from "../Backend_Integration";
import { IUser } from "../../components/Interfaces";
import axios from "axios";
import _ from "lodash";

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
  const [evalName, setEvalName] = useState("Maria Janete Lacerda"); //Buscar o nome do avaliado pelo login
  const [userId, setUserId] = useState<number>(2); //rever essa variável depois que criar a autenticação pois ela deve armazenar o id do usuário que está logado
  const [bossId, setBossId] = useState<string[] | string>("");
  const [lastInv, setLastInv] = useState(""); //dados do último inventário
  const [resp, setResp] = useState();
  //Busca no banco o último inventário
  useEffect(() => {
    axios
      .get("http://localhost:3000/years")
      .then((resp) => {
        setLastInv(resp.data[0].year);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/evaluations")
      .then((resp) => {
        const data: Array<object> | any = _.filter(resp.data, {
          userId,
          year: String(lastInv),
          formId: 1,
        });
        setResp(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lastInv]);
  console.log(resp);

  let competencias = useFetch("http://localhost:3000/competences"); //retorna todas a competências ativas;
  let users: any = useFetch("http://localhost:3000/users"); //retorna todos o usuários;

  const handleChange = (event: SelectChangeEvent<typeof bossId>) => {
    const {
      target: { value },
    } = event;
    setBossId(typeof value === "string" ? value.split(",") : value);
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
                Avaliado: {evalName}
              </Typography>
              <FormControl sx={{ marginLeft: "10vw", width: 300 }}>
                <InputLabel id="demo-multiple-name-label">
                  Chefe Imediato
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="boss_name"
                  value={bossId}
                  onChange={handleChange}
                  input={<OutlinedInput label="Chefe Imediato" />}
                  MenuProps={MenuProps}
                  style={{ height: 40, marginBottom: "5vh" }}
                >
                  {users.data &&
                    users.data.map((name: IUser) => (
                      <MenuItem key={name.userId} value={name.userId}>
                        {name.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Self_Ask list={competencias.data} />
            </BoxColumn>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
}
