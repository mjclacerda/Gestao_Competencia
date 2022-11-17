import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Reports from "./Reports";
import Competence from "./Competence";
import Configuration from "./Configuration";
import Login from "./Login";

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
      </Routes>
    </BrowserRouter>
  );
}
