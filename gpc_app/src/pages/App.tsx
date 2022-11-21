import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Config_tc from "./Config_tc";
import Config_comp from "./config_comp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/tipologias" element={<Competence />} />
        <Route path="/configuracoes" element={<Configuration />} />
        <Route path="/config_db" element={<Config_db />} />
        <Route path="/config_inv" element={<Config_inv />} />
        <Route path="/config_tc" element={<Config_tc />} />
        <Route path="/config_comp" element={<Config_comp />} />
        <Route path="/pesquisa" element={<User_Home />} />
        <Route path="/user_relatorio" element={<User_Reports />} />
        <Route path="/user_tipologia" element={<User_Competence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
