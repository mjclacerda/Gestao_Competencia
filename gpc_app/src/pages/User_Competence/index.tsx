import Header from "../../components/Header_user";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { StyledBox } from "../../components/Component";

export default function Typology() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar bg="#FB970D" path="./public/icon_skill.png" title="Tipologias" />
          <StyledBox> As tipologias ficarão aqui</StyledBox>
        </Box>
      </Box>
    </Box>
  );
}
