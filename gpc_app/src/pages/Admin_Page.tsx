import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Reports from "./Reports";
import Competence from "./Competence";
import Configuration from "./Configuration";
import Login from "./Login";
import Config_db from "./Config_db";
import Config_inv from "./Config_inv";
import Config_tc from "./Config_tc";

export default function Admin_Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/tipologias" element={<Competence />} />
        <Route path="/configuracoes" element={<Configuration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/config_db" element={<Config_db />} />
        <Route path="/config_inv" element={<Config_inv />} />
        <Route path="/config_tc" element={<Config_tc />} />
      </Routes>
    </BrowserRouter>
  );
}
