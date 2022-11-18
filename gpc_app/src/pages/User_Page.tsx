import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./User_Home";
import Reports from "./User_Reports";
import Competence from "./User_Competence";

export default function User_Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesquisa" element={<Home />} />
        <Route path="/relatorio" element={<Reports />} />
        <Route path="/tipologia" element={<Competence />} />
      </Routes>
    </BrowserRouter>
  );
}