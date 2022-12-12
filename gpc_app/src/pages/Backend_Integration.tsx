//Funções para Typologias
async function postTypology() {
  const answer = await fetch("http://localhost:3000/typologies", {
    method: "POST",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getTypologies() {
  const answer = await fetch("http://localhost:3000/typologies", {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getTypologyForId(id: number) {
  const answer = await fetch(`http://localhost:3000/typologies/${id}`, {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function updateTypology() {
  const answer = await fetch("http://localhost:3000/typologies", {
    method: "PUT",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function deleteTypology() {
  const answer = await fetch("http://localhost:3000/typologies/inativate", {
    method: "PUT",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

//Funções para Competências
async function postCompetence() {
  const answer = await fetch("http://localhost:3000/competences", {
    method: "POST",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getCompetences() {
  const answer = await fetch("http://localhost:3000/competences", {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getCompetenceForId(id: number) {
  const answer = await fetch(`http://localhost:3000/competences/${id}`, {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getCompetenceForTypologyId(id: number) {
  const answer = await fetch(
    `http://localhost:3000/competencesfortypology/${id}`,
    {
      method: "GET",
      //credentials: "include", habilitar quanto tiver autenticação.
    }
  );
  return handleresp(answer);
}

async function getCompetencesHistory() {
  const answer = await fetch("http://localhost:3000/competenceshistory", {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function updateCompetence() {
  const answer = await fetch("http://localhost:3000/competences", {
    method: "PUT",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function deleteCompetence() {
  const answer = await fetch("http://localhost:3000/competences/inativate", {
    method: "PUT",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

//Funções para avaliações
async function postEvaluations() {
  const answer = await fetch("http://localhost:3000/evaluations", {
    method: "POST",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getEvaluations() {
  const answer = await fetch("http://localhost:3000/evaluations", {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getEvaluationForId(id: number) {
  const answer = await fetch(`http://localhost:3000/evaluations/${id}`, {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

//Funções para formulários
async function getForms() {
  const answer = await fetch("http://localhost:3000/forms", {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getFormForId(id: number) {
  const answer = await fetch(`http://localhost:3000/forms/${id}`, {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

//Funções para questões
async function postQuestions() {
  const answer = await fetch("http://localhost:3000/questions", {
    method: "POST",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getQuestions() {
  const answer = await fetch("http://localhost:3000/questions", {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getQuestionForId(id: number) {
  const answer = await fetch(`http://localhost:3000/questions/${id}`, {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getQuestionForUserId(id: number) {
  const answer = await fetch(`http://localhost:3000/questionsuser/${id}`, {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getQuestionForUserYear(reqbody: any) {
  const answer = await fetch(`http://localhost:3000/questionsuser`, {
    method: "GET",
    body: JSON.stringify(reqbody),
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

//Funções para usuários
async function getUsers() {
  const answer = await fetch("http://localhost:3000/users", {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

async function getUserForId(id: number) {
  const answer = await fetch(`http://localhost:3000/users/${id}`, {
    method: "GET",
    //credentials: "include", habilitar quanto tiver autenticação.
  });
  return handleresp(answer);
}

//Função para tratar as respostas
function handleresp(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}

export {
  postTypology,
  getTypologies,
  getTypologyForId,
  updateTypology,
  deleteTypology,
  postCompetence,
  getCompetences,
  getCompetenceForId,
  getCompetenceForTypologyId,
  getCompetencesHistory,
  updateCompetence,
  deleteCompetence,
  postEvaluations,
  getEvaluations,
  getEvaluationForId,
  getForms,
  getFormForId,
  postQuestions,
  getQuestions,
  getQuestionForId,
  getQuestionForUserId,
  getQuestionForUserYear,
  getUsers,
  getUserForId,
};
