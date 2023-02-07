import { createContext, useState, useEffect } from "react";
import axios from "axios";
import isBefore from "date-fns/isBefore";
import _ from "lodash";

interface AuthContextState {
  user: boolean;
  setUser: any;
  admin: boolean;
  setAdmin: any;
  resposta: any;
  setResposta: any;
  token: string;
  setToken: any;
  competencias: Array<any>;
  lastInv: any;
  setLastInv: any;
  openinvent: boolean;
  questions: number;
  setquestions: any;
  selfEval: boolean;
  setSelfEval: any;
  boss: boolean;
  bossmentions: any;
  bossresp: number;
  setBossresp: any;
  subEval: number;
  team: boolean;
  teammentions: any;
  teamresp: number;
  setTeamresp: any;
  parEval: number;
  page: number;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);

function AuthProvider({ children }: any) {
  //variáveis de sessão
  const [user, setUser] = useState(false); //Muda para true quando o usuário logado tem permissão de usuário comum
  const [admin, setAdmin] = useState(false); //Muda para true quando o usuário logado tem permissão de adm
  const [resposta, setResposta] = useState<any>({ userId: 0 }); //Guarda os dados do usuário que está logado
  const [token, setToken] = useState<string>(""); //Guarda o token do usuário que está logado
  //variáveis de inventário e questionário
  const [competencias, setCompetencias] = useState([]); //Armazena todas a competências ativas que vão compor o formulário
  const [lastInv, setLastInv] = useState(""); //Guarda a data de fechamento completa do último inventário
  const [avaliacoes, setAvaliacoes] = useState({}); //Guarda as avaliações registradas
  const openinvent = isBefore(_.now(), Date.parse(lastInv)); //Verifica se há inventário aberto no momento
  //variáveis da autoavaliação
  const [questions, setquestions] = useState<number>(0); //Guarda o total de questões respondidas pelo usuário da autoavaliação
  const [selfEval, setSelfEval] = useState(false); //Muda para true quando o usuário responde todas as questões da autoavaliação
  //variáveis da avaliação como chefe
  const [boss, setBoss] = useState(false); //Muda para true quando o usuário logado é mencionado como chefe em alguma avaliação
  const [bossresp, setBossresp] = useState<number>(0); //Guarda todas a questões respondidas como chefe pelo usuário que está logado
  const [bossmentions, setBossmentions] = useState({}); //Guarda as avaliações em que o usuário logado figura como chefe
  const [subEval, setSubEval] = useState(0); //Guarda o total de pessoas que tem como chefe o usuário logado
  //variáveis da avaliação como equipe
  const [team, setTeam] = useState(false); //Muda para true quando o usuário logado é mencionado como avaliador como equipe
  const [teammentions, setTeammentions] = useState({});
  const [teamresp, setTeamresp] = useState<number>(0); //Guarda todas a questões respondidas como chefe pelo usuário que está logado
  const [parEval, setParEval] = useState(0); //Guarda o total de pessoas que tem como colega avaliador o usuário logado
  //variáveis de controle de paginação
  const [page, setPage] = useState<number>(0); //Controla o total de páginas do paginador
  console.log(avaliacoes);
  //Busca no banco o último inventário
  useEffect(() => {
    axios
      .get("http://localhost:3000/years")
      .then((resp) => {
        setLastInv(resp.data[0].close);
      })
      .catch((err) => {});
  }, [openinvent]);

  //Busca as avaliações do ano atual
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/evaluations")
        .then((resp) => resp.json())
        .then((data) => data);
      setAvaliacoes(result);
      setBossmentions(
        _.map(_.filter(result, { bossId: resposta.userId, formId: 1 }), "user")
      );
      setTeammentions(
        _.map(_.filter(result, { teamId: resposta.userId, formId: 2 }), "user")
      );
      setSubEval(
        _.findLastIndex(
          _.map(
            _.filter(result, { bossId: resposta.userId, formId: 1 }),
            "user"
          )
        ) + 1
      );
      setParEval(
        _.findLastIndex(
          _.map(
            _.filter(result, { teamId: resposta.userId, formId: 2 }),
            "user"
          )
        ) + 1
      );
      if (_.filter(result, { bossId: resposta.userId })[0]) {
        setBoss(true);
      }
      if (_.filter(result, { teamId: resposta.userId })[0]) {
        setTeam(true);
      }
    };
    fetchData();
  }, [resposta]);

  //Retorna todas a competências ativas
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/competences")
        .then((resp) => resp.json())
        .then((data) => data);
      setCompetencias(result);
      setPage(_.findLastIndex(result) + 1);
    };
    fetchData();
  }, []);

  //Busca no banco as questões respondidas da autoavaliação do usuário que está logado
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/questions")
        .then((resp) => resp.json())
        .then((data) => data);
      setquestions(
        _.findLastIndex(
          _.filter(_.map(result, "evaluation"), {
            userId: resposta.userId,
            formId: 1,
            year: lastInv.substring(4, 0),
          })
        ) + 1
      );
    };
    fetchData();
  }, [resposta, page]);

  //Busca no banco as questões respondidas como chefe pelo usuário que está logado
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/questions")
        .then((resp) => resp.json())
        .then((data) => data);
      setBossresp(
        _.findLastIndex(
          _.filter(_.map(result, "evaluation"), {
            formId: 2,
            bossId: resposta.userId,
            year: lastInv.substring(4, 0),
          })
        ) + 1
      );
    };
    fetchData();
  }, [resposta, page]);

  //Busca no banco as questões respondidas como colega pelo usuário que está logado
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/questions")
        .then((resp) => resp.json())
        .then((data) => data);
      setTeamresp(
        _.findLastIndex(
          _.filter(_.map(result, "evaluation"), {
            formId: 3,
            teamId: resposta.userId,
            year: lastInv.substring(4, 0),
          })
        ) + 1
      );
    };
    fetchData();
  }, [resposta, page]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        resposta,
        setResposta,
        token,
        setToken,
        competencias,
        lastInv,
        setLastInv,
        openinvent,
        questions,
        setquestions,
        selfEval,
        setSelfEval,
        boss,
        bossmentions,
        bossresp,
        setBossresp,
        subEval,
        team,
        teammentions,
        teamresp,
        setTeamresp,
        parEval,
        page,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
