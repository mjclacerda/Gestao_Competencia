import Header from "../../components/Header";
import { Box } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";

export default function Dashboard() {
  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection="row">
        <Side_menu />
        <Box display="flex" flexDirection="column">
          <Bar bg="#1EFFFF" path="./public/icon_speed.png" title="Dashboard" />
          <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>
            Aqui ficará o dashboard
          </h1>
        </Box>
      </Box>
    </Box>
  );
}
