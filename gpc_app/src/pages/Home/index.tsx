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
        <Bar bg="#1EFFFF" path="./public/icon_speed.png" title="Dashboard" />
      </Box>
    </Box>
  );
}
