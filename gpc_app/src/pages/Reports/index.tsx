import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { StyledBox } from "../../components/Component";

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
          <StyledBox> Os relatórios ficarão aqui </StyledBox>
        </Box>
      </Box>
    </Box>
  );
}
