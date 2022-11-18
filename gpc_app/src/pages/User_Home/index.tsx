import Header from "../../components/Header_user";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu_user";
import Bar from "../../components/Bar";
import { StyledBox } from "../../components/Component";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar bg="#2272eb" path="./public/icon_pesq.png" title="Pesquisa" />
          <StyledBox> A pesquisa ficará aqui</StyledBox>
        </Box>
      </Box>
    </>
  );
}
