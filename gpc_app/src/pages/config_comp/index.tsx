import axios from "axios";
import Header from "../../components/Header";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import Form from "../../components/Form";
import {
  Box,
  Typography,
  Stack,
  Alert,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { BoxColumn, FlexBox } from "../../components/Component";
import { BottonList } from "../../components/BottonList";
import { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

export default function Config_comp() {
  const compObjempt = { competence: "", description: "" }; //Objeto da competência
  const [competencias, setCompetencias] = useState(); //dados das competências para geração das competências cadastradas
  const [tipologias, setTipologias] = useState<Array<object>>(); //dados das tipologias para alimentar o select
  const [alert, setAlert] = useState<boolean | null>(null); //alerta de sucesso ou falha na criação de competências
  const [competencedata, setCompetencedata] = useState<object>(compObjempt); //competence e description capiturados ao clic do botão de competências cadastradas.
  const [competenceId, setCompetenceId] = useState<number>(0); //captura somente o typologyId do botão de tipologias cadastradas quando este é clicado
  const [messagealert, setMessagealert] = useState<string>(""); //alimenta os alertas de sucesso ou falha como mensagens personalizadas
  const [typSelected, setTypSelected] = useState(""); //captura o typologyId selecionado

  //Fetch do rol de Tipologias ativas
  useEffect(() => {
    axios
      .get("http://localhost:3000/typologies")
      .then((resp) => {
        setTipologias(resp.data);
      })
      .catch((err) => {
        setMessagealert(err);
      });
  }, []);
  //Fetch do rol de Competências ativas
  useEffect(() => {
    axios
      .get("http://localhost:3000/competences")
      .then((resp) => {
        setCompetencias(resp.data);
      })
      .catch((err) => {
        setMessagealert(err);
      });
  }, [alert]);
  //Captura os valores do formulário de edição das competencias
  const handleChangeValues = (e: SelectChangeEvent) => {
    setCompetencedata({ ...competencedata, [e.target.name]: e.target.value });
  };
  //Captura os valores do select
  const handleChange = (e: SelectChangeEvent) => {
    setTypSelected(e.target.value);
  };
  //Função dos botões da lista de competencias
  const handleButtonListC = (value: SelectChangeEvent) => {
    axios
      .get(`http://localhost:3000/competences/${value.target.value}`)
      .then((resp) => {
        const { data } = resp;
        console.log(data);
        setCompetencedata({
          competence: data.competence,
          description: data.description,
        });
        setCompetenceId(data.competenceId);
        setTypSelected(data.typologyId);
        setAlert(null);
      });
  };
  //Função do botão Criar
  const handleButtonCreate = () => {
    axios
      .post("http://localhost:3000/competences", {
        ...competencedata,
        status: true,
        typologyId: typSelected,
      })
      .then((resp) => {
        setMessagealert("Competência criada com sucesso!!!");
        setAlert(true);
        formcleaning();
      })
      .catch((error) => {
        setMessagealert(
          "Não foi possível criar essa competência, verifique se todos os campos foram preenchidos ou se essa competência não existe"
        );
        setAlert(false);
      });
  };
  //Função do botão Alterar
  const handleButtonUpdate = () => {
    if (competenceId > 0) {
      axios
        .put("http://localhost:3000/competences", {
          competenceId,
          ...competencedata,
          typologyId: typSelected,
        })
        .then((resp) => {
          setMessagealert("Competence alterada com sucesso!!!");
          setAlert(true);
          formcleaning();
        })
        .catch((error) => {
          setMessagealert(
            "Não foi possível alterar essa competência, verifique se todos os campos foram preenchidos ou se essa tipologia já existe"
          );
          setAlert(false);
        });
    }
  };
  //Função do botão Excluir
  const handleButtonExcluir = () => {
    if (competenceId > 0) {
      axios
        .put("http://localhost:3000/competences/inativate", {
          competenceId,
        })
        .then((resp) => {
          setMessagealert("Competência excluida com sucesso!!!");
          setAlert(true);
          formcleaning();
        })
        .catch((error) => {
          setMessagealert("Não foi possível excluir essa Competência.");
          setAlert(false);
        });
    }
  };
  //Função do botão limpar
  const handleButtonLimpar = () => {
    formcleaning();
    setAlert(null);
  };
  //Limpar o formulário
  const formcleaning = () => {
    setCompetencedata(compObjempt);
    setCompetenceId(0);
    setTypSelected("");
  };

  return (
    <Box>
      <Header />
      <Box>
        <Box display="flex" flexDirection="row">
          <Side_menu />
          <Box display="flex" flexDirection="column">
            <Bar
              bg="#b0afaf"
              path="./public/icon_conf.png"
              title="Configurações - Competências"
            />
            <FlexBox
              style={{
                width: "85.2vw",
                height: "50vh",
                background: "#efefef",
                position: "relative",
                top: "2vh",
                left: "1vw",
              }}
            >
              <FlexBox
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: "83vw",
                  position: "relative",
                  top: "2vh",
                }}
              >
                <Typography style={{ margin: 40, fontSize: 18 }}>
                  COMPETÊNCIAS CADASTRADAS
                </Typography>
                <BottonList list={competencias} clic={handleButtonListC} />
              </FlexBox>
            </FlexBox>
            <FlexBox
              style={{
                width: "85.2vw",
                height: "33vh",
                background: "#ffffff",
                position: "relative",
                top: "3vh",
                left: "1vw",
              }}
            >
              <BoxColumn
                style={{
                  width: "30vw",
                  minWidth: "280px",
                  position: "relative",
                  left: "27vw",
                  top: "2vh",
                }}
              >
                <Typography
                  sx={{ marginBottom: 1, color: "#201f1f", fontWeight: "bold" }}
                >
                  Cadastrar Competência
                </Typography>
                {alert === true && (
                  <Stack sx={{ width: "100%" }}>
                    <Alert severity="success">{messagealert}</Alert>
                  </Stack>
                )}
                {alert === false && (
                  <Stack sx={{ width: "100%" }}>
                    <Alert severity="error">{messagealert}</Alert>
                  </Stack>
                )}
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <InputLabel id="inputtipologia">Tipologia</InputLabel>
                  <Select
                    labelId="inputtipologia"
                    id={uuid()}
                    value={typSelected}
                    onChange={handleChange}
                    label="typologyId"
                  >
                    {tipologias &&
                      tipologias.map((item: any) => (
                        <MenuItem value={item.typologyId} key={uuid()}>
                          {item.typology}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <Form
                  label="competence"
                  criar={handleButtonCreate}
                  alterar={handleButtonUpdate}
                  excluir={handleButtonExcluir}
                  limpar={handleButtonLimpar}
                  eventoteclado={handleChangeValues}
                  data={competencedata}
                  showbuttons={competenceId}
                />
              </BoxColumn>
            </FlexBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
