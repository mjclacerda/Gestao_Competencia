import Header from "../../components/Header_user";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";

export default function Report() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar
            bg="#00D092"
            path="./public/icon_report.png"
            title="Relatórios"
          />
          <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>
            Aqui ficarão os relatório
          </h1>
        </Box>
      </Box>
    </Box>
  );
}
