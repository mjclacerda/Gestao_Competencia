import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";
import Home from "./Home";
import Reports from "./Reports";
import Competence from "./Competence";
import Configuration from "./Configuration";
import User_Home from "./User_Home";
import User_Reports from "./User_Reports";
import User_Competence from "./User_Competence";
import Config_db from "./Config_db";
import Config_inv from "./Config_inv";
import ConfigChoose from "./configChoose";
import Config_tc from "./Config_tc";
import Config_comp from "./config_comp";
import Self_Evaluation from "./Self_Evaluation";
import Boss_Evaluation from "./Boss_Evaluation";
import Team_Evaluation from "./Team_Evaluation";

function App() {
  const { auth, token, admin, resposta } = useContext(AuthContext);
  console.log(auth, token, resposta);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={admin ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/relatorios"
          element={admin ? <Reports /> : <Navigate to="/" />}
        />
        <Route
          path="/tipologias"
          element={admin ? <Competence /> : <Navigate to="/" />}
        />
        <Route
          path="/configuracoes"
          element={admin ? <Configuration /> : <Navigate to="/" />}
        />
        <Route
          path="/config_db"
          element={admin ? <Config_db /> : <Navigate to="/" />}
        />
        <Route
          path="/config_inv"
          element={admin ? <Config_inv /> : <Navigate to="/" />}
        />
        <Route
          path="/configchoose"
          element={admin ? <ConfigChoose /> : <Navigate to="/" />}
        />
        <Route
          path="/config_tc"
          element={admin ? <Config_tc /> : <Navigate to="/" />}
        />
        <Route
          path="/config_comp"
          element={admin ? <Config_comp /> : <Navigate to="/" />}
        />
        <Route
          path="/pesquisa"
          element={auth ? <User_Home /> : <Navigate to="/" />}
        />
        <Route
          path="/user_relatorio"
          element={auth ? <User_Reports /> : <Navigate to="/" />}
        />
        <Route
          path="/user_tipologia"
          element={auth ? <User_Competence /> : <Navigate to="/" />}
        />
        <Route
          path="/self_evaluation"
          element={auth ? <Self_Evaluation /> : <Navigate to="/" />}
        />
        <Route
          path="/boss_evaluation"
          element={auth ? <Boss_Evaluation /> : <Navigate to="/" />}
        />
        <Route
          path="/team_evaluation"
          element={auth ? <Team_Evaluation /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
