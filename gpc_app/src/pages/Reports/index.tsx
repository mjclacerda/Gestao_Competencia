import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";

export default function Report() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Bar bg="#00D092" path="./public/icon_report.png" title="Relatórios" />
      </Box>
    </Box>
  );
}
