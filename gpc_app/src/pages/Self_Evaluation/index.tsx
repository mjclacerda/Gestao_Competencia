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
  Alert,
} from "@mui/material";
import {
  BoxColumn,
  StyledBox,
  BootstrapButton,
} from "../../components/Component";
import { SelectChangeEvent } from "@mui/material/Select";
import { Self_Ask } from "../../components/Self_Ask";
import { useState, useEffect, useContext } from "react";
import { IUser } from "../../components/Interfaces";
import axios from "axios";
import _ from "lodash";
import { AuthContext } from "../../context/AuthContext";

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
  const { resposta, setSelfEval, lastInv, competencias, page } =
    useContext(AuthContext); //Pega a informações do usuário que está logado dentre outras informações
  const [bossId, setBossId] = useState<string[] | string>(""); //Armazena o nome do chefe
  const [domainLevel, setDomainLevel] = useState(""); //Guarda a opção escolhida para o nível de domínio de uma competência
  const [importanceLevel, setImportanceLevel] = useState(""); //Guarda a opção escolhida para o nível de importância de uma competência
  const [competenceId, setCompetenceId] = useState(""); //Guarda o competenceId da competência que está sendo avaliada
  const [evaluationId, setEvaluationId] = useState(""); //Armazena o competenceId da opção selecionada
  const [buttonReg, setButtonReg] = useState(true); //Controla a exibição do botão para criar uma evaluation
  const [currentPage, setCurrentPage] = useState(1); //Controla a página atual do paginador
  const currentItens = competencias.slice(currentPage - 1, currentPage); //Controla o total de itens que irão aparecer e cada página do paginador
  const [questions, setquestions] = useState<number>(0); //Guarda o total de questões respondidas pelo usuário
  const [ansquestion, setAnsquestion] = useState<Array<number>>([]); //Armazena o competenceId das competências respondidas
  const [users, setUsers] = useState<Array<any>>([{ userId: 0, name: "" }]); //Armazena os usuários que podem ser chefe

  //Busca no banco se há formulários preenchidos para o usuário
  useEffect(() => {
    axios
      .get("http://localhost:3000/evaluations")
      .then((resp) => {
        const data: Array<object> | any = _.filter(resp.data, {
          userId: resposta.userId,
          year: lastInv.substring(4, 0),
          formId: 1,
        });
        setEvaluationId(data[0].evaluationId);
        setBossId(data[0].bossId);
        setButtonReg(false);
      })
      .catch((err) => {});
  }, [lastInv, buttonReg]);

  //Retorna todos o usuários que podem ser chefes, retirando então o usuário logado e os administradores;
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/users")
        .then((resp) => resp.json())
        .then((data) => data);
      setUsers(
        _.reject(_.filter(result, { permissionId: 2 }), {
          userId: resposta.userId,
        })
      );
    };
    fetchData();
  }, []);

  //Busca no banco as questões respondidas do usuário
  useEffect(() => {
    axios
      .get(`http://localhost:3000/questionsuser/${resposta.userId}`)
      .then((resp) => {
        const data: Array<object> | any = _.filter(resp.data, {
          evaluationId,
        });
        setquestions(_.findLastIndex(data) + 1);
        setAnsquestion(_.map(data, "competenceId"));
        if (questions === page) {
          setSelfEval(true);
        }
      })
      .catch((err) => {});
  }, [evaluationId, competenceId]);

  //Função para criação de uma evaluation, se não houver
  const createvaluation = () => {
    axios
      .post("http://localhost:3000/evaluations", {
        formId: 1,
        userId: resposta.userId,
        bossId,
        year: lastInv.substring(4, 0),
      })
      .then((resp) => {
        console.log(resp);
        setButtonReg(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Função para gravar uma resposta no banco de dados
  const answerquestion = () => {
    axios
      .post("http://localhost:3000/questions", {
        evaluationId,
        competenceId,
        importance_level: importanceLevel,
        domain_level: domainLevel,
      })
      .then((resp) => {
        console.log(resp.status);
        setCompetenceId("");
        setImportanceLevel("");
        setDomainLevel("");
        if (currentPage < page) {
          setCurrentPage(currentPage + 1);
        }
      })
      .catch((error) => {
        console.log(error);
        setImportanceLevel("");
        setDomainLevel("");
      });
  };

  //Captura os valores do formulário em relação ao importância da competência
  const handleChangeImportance = (e: any): void => {
    setImportanceLevel(e.target.value);
    setCompetenceId(e.target.name);
  };
  //Captura os valores do formulário em relação ao domínio da competência
  const handleChangeDomain = (e: any): void => {
    setDomainLevel(e.target.value);
  };
  //Captura o valor do select do chefe
  const handleChange = (event: SelectChangeEvent<typeof bossId>) => {
    const {
      target: { value },
    } = event;
    setBossId(typeof value === "string" ? value.split(",") : value);
  };
  //Controla a paginação
  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
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
                Avaliado: {resposta.name}
              </Typography>
              <FormControl sx={{ marginLeft: "10vw", width: 300 }}>
                <InputLabel id="demo-multiple-name-label">
                  Chefe Imediato
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="name"
                  value={bossId}
                  onChange={handleChange}
                  input={<OutlinedInput label="Chefe Imediato" />}
                  MenuProps={MenuProps}
                  style={{ height: 40, marginBottom: "5vh" }}
                >
                  {users &&
                    users?.map((name: IUser) => (
                      <MenuItem key={name.userId} value={name.userId}>
                        {name.name}
                      </MenuItem>
                    ))}
                </Select>
                {questions === page && (
                  <Alert severity="success">
                    Parabéns, seu questionário foi respondido.
                  </Alert>
                )}
                {buttonReg && (
                  <BootstrapButton
                    style={{
                      width: "100px",
                      alignSelf: "start",
                      marginBottom: "5vh",
                    }}
                    onClick={createvaluation}
                  >
                    Registrar
                  </BootstrapButton>
                )}
              </FormControl>
              {buttonReg === false && questions < page && (
                <Self_Ask
                  list={currentItens}
                  chooseimp={handleChangeImportance}
                  importance={importanceLevel}
                  choosedom={handleChangeDomain}
                  domain={domainLevel}
                  enviar={answerquestion}
                  page={page}
                  currentPage={currentPage}
                  handlePagination={handlePagination}
                  answered={ansquestion}
                />
              )}
            </BoxColumn>
          </StyledBox>
        </Box>
      </Box>
    </>
  );
}
