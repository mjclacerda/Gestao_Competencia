import { createContext, useState, useEffect } from "react";
import axios from "axios";
import isBefore from "date-fns/isBefore";
import _ from "lodash";

interface AuthContextState {
  user: boolean;
  setUser: any;
  resposta: any;
  setResposta: any;
  setToken: any;
  token: string;
  admin: boolean;
  setAdmin: any;
  setSelfEval: any;
  selfEval: boolean;
  lastInv: any;
  openinvent: boolean;
  competencias: Array<any>;
  page: number;
  questions: number;
  boss: boolean;
  bossmentions: any;
  bossresp: number;
  subEval: number;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);

function AuthProvider({ children }: any) {
  const [user, setUser] = useState(false); //Muda para true quando o usuário logado tem permissão de usuário comum
  const [admin, setAdmin] = useState(false); //Muda para true quando o usuário logado tem permissão de adm
  const [resposta, setResposta] = useState<any>({ userId: 0 }); //Guarda os dados do usuário que está logado
  const [questions, setquestions] = useState<number>(0); //Guarda o total de questões respondidas pelo usuário da autoavaliação
  const [bossresp, setBossresp] = useState<number>(0);
  const [token, setToken] = useState<string>(""); //Guarda o token do usuário que está logado
  const [competencias, setCompetencias] = useState([]); //Armazena todas a competências ativas que vão compor o formulário
  const [page, setPage] = useState<number>(0); //Controla o total de páginas do paginador
  const [selfEval, setSelfEval] = useState(false); //Muda para true quando o usuário responde todas as questões da autoavaliação
  const [lastInv, setLastInv] = useState(""); //Guarda a data de fechamento completa do último inventário
  const [avaliacoes, setAvaliacoes] = useState({}); //Guarda as avaliações registradas
  const [bossmentions, setBossmentions] = useState({}); //Guarda as avaliações em que o usuário logado figura como chefe
  const [boss, setBoss] = useState(false); //Muda para true quando o usuário logado é mencionado como chefe em alguma avaliação
  const openinvent = isBefore(_.now(), Date.parse(lastInv)); //Verifica se há inventário aberto no momento
  const [subEval, setSubEval] = useState(0);
  console.log(subEval, bossresp, page);
  //Busca no banco o último inventário
  useEffect(() => {
    axios
      .get("http://localhost:3000/years")
      .then((resp) => {
        setLastInv(resp.data[0].close);
      })
      .catch((err) => {});
  }, []);
  //Busca as avaliações do ano atual
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/evaluations")
        .then((resp) => resp.json())
        .then((data) => data);
      setAvaliacoes(result);
      setBossmentions(
        _.map(_.filter(result, { bossId: resposta.userId }), "user")
      );
      setSubEval(
        _.findLastIndex(
          _.map(_.filter(result, { bossId: resposta.userId }), "user")
        ) + 1
      );
      if (_.filter(result, { bossId: resposta.userId })[0]) {
        setBoss(true);
      }
    };
    fetchData();
  }, [resposta]);
  //Retorna todas a competências ativas;
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
  //Busca no banco as questões respondidas do usuário
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
  //Busca no banco as questões respondidas como chefe
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/questions")
        .then((resp) => resp.json())
        .then((data) => data);
      setBossresp(
        _.findLastIndex(
          _.filter(_.map(result, "evaluation"), {
            formId: 2,
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
        resposta,
        setResposta,
        setToken,
        token,
        admin,
        setAdmin,
        selfEval,
        setSelfEval,
        lastInv,
        openinvent,
        competencias,
        page,
        questions,
        boss,
        bossresp,
        bossmentions,
        subEval,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
