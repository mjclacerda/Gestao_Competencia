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
import { SelectChangeEvent } from "@mui/material/Select";
import Header from "../../components/Header_user";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import {
  BoxColumn,
  FlexBox,
  StyledBox,
  BootstrapButton,
} from "../../components/Component";
import { Other_Ask } from "../../components/Other_Ask";
import { useState, useEffect, useContext } from "react";
import { IUser } from "../../components/Interfaces";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import _ from "lodash";

export default function Boss_Evaluation() {
  const { competencias, page, lastInv, teammentions, resposta } =
    useContext(AuthContext);
  const [domainLevel, setDomainLevel] = useState(""); //Guarda a opção escolhida para o nível de domínio de uma competência
  const [importanceLevel, setImportanceLevel] = useState(""); //Guarda a opção escolhida para o nível de importância de uma competência
  const [competenceId, setCompetenceId] = useState(""); //Guarda o competenceId da competência que está sendo avaliada
  const [evaluationId, setEvaluationId] = useState(""); //Armazena o competenceId da opção selecionada
  const [currentPage, setCurrentPage] = useState(1); //Controla a página atual do paginador
  const currentItens = competencias.slice(currentPage - 1, currentPage); //Controla o total de itens que irão aparecer e cada página do paginador
  const [questions, setquestions] = useState<number>(0); //Guarda o total de questões respondidas sobre o avaliado
  const [avaliados, setAvaliados] = useState<Array<any>>([
    { userId: 0, name: "" },
  ]);
  const [ansquestion, setAnsquestion] = useState<Array<number>>([]); //Armazena o competenceId das competências respondidas
  const [buttonReg, setButtonReg] = useState(true); //Controla a exibição do botão para criar uma evaluation
  const [teamEval, setTeamEval] = useState(false);

  //Busca no banco se há formulários preenchidos para o usuário
  useEffect(() => {
    axios
      .get("http://localhost:3000/evaluations")
      .then((resp) => {
        const data: Array<object> | any = _.filter(resp.data, {
          formId: 3,
          userId: avaliados,
          year: lastInv.substring(4, 0),
        });
        setEvaluationId(data[0].evaluationId);
        setButtonReg(false);
      })
      .catch((err) => {});
  }, [lastInv]);

  //Busca no banco as questões respondidas do usuário
  useEffect(() => {
    axios
      .get(`http://localhost:3000/questionsuser/${avaliados}`)
      .then((resp) => {
        const data: Array<object> | any = _.filter(resp.data, {
          evaluationId,
        });
        setquestions(_.findLastIndex(data) + 1);
        setAnsquestion(_.map(data, "competenceId"));
        if (questions === page) {
          setTeamEval(true);
        }
      })
      .catch((err) => {});
  }, [evaluationId, competenceId]);

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

  //Função para criação de uma evaluation, se não houver
  const createvaluation = () => {
    axios
      .post("http://localhost:3000/evaluations", {
        formId: 3,
        userId: avaliados,
        teamId: resposta.userId,
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

  //Handle do select do avaliado
  const handleChangeEval = (event: SelectChangeEvent<typeof avaliados>) => {
    const {
      target: { value },
    } = event;
    setAvaliados(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
            path="./public/team_check.png"
            title="Avaliação da Equipe"
          />
          <StyledBox>
            <BoxColumn>
              <FlexBox>
                <Typography
                  sx={{
                    marginLeft: "10vw",
                    marginBottom: "10vh",
                    marginTop: "6vh",
                    fontSize: 16,
                    maxWidth: "30vw",
                    fontWeight: "bold",
                  }}
                >
                  Escolha a pessoa que você deseja avaliar:
                </Typography>
                <FormControl
                  sx={{ marginTop: "4vh", marginLeft: "1vw", width: 342 }}
                >
                  <InputLabel id="demo-multiple-name-label">
                    Pessoa Avaliada
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="avaliado"
                    value={avaliados}
                    onChange={handleChangeEval}
                    input={<OutlinedInput label="Pessoa Avaliada" />}
                    style={{ height: 40, marginBottom: "1vh" }}
                  >
                    {teammentions.map((name: IUser) => (
                      <MenuItem key={name.userId} value={name.userId}>
                        {name.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FlexBox>
              {page === questions && (
                <Alert sx={{ marginLeft: "10vw" }} severity="success">
                  Parabéns, seu questionário foi respondido.
                </Alert>
              )}
              {buttonReg && (
                <BootstrapButton
                  style={{
                    width: "100px",
                    alignSelf: "start",
                    marginLeft: "10vw",
                    marginTop: "-3vh",
                    marginBottom: "5vh",
                  }}
                  onClick={createvaluation}
                >
                  Registrar
                </BootstrapButton>
              )}
              {buttonReg === false && questions < page && (
                <Other_Ask
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
