import { Box, Button, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { linkStyle, AvatarButton } from "./Side_menu";

const BootstrapButton = styled(Button)({
  marginLeft: 18,
  marginRight: 5,
  textDecoration: "none",
  backgroundColor: "#1f93f9",
  color: "#ffffff",
  fontWeight: "normal",
  fontFamily: [
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#1f99f9",
  },
  "&:active": {
    backgroundColor: "#f7f7f7",
  },
});

export default function Side_menu_user() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      sx={{
        bgcolor: "#1f93f9",
        height: "95vh",
        width: "15vw",
        minWidth: "220px",
      }}
    >
      <Link to="/pesquisa" style={linkStyle}>
        <BootstrapButton>
          <AvatarButton alt="pesquisa" src="/icon_pesq.png" />
          Pesquisas
        </BootstrapButton>
      </Link>
      <Link to="/relatorio" style={linkStyle}>
        <BootstrapButton>
          <AvatarButton alt="report" src="/icon_report.png" />
          Relatórios
        </BootstrapButton>
      </Link>
      <Link to="/tipologia" style={linkStyle}>
        <BootstrapButton>
          <AvatarButton alt="competence" src="/icon_skill.png" />
          Competências
        </BootstrapButton>
      </Link>
    </Box>
  );
}
