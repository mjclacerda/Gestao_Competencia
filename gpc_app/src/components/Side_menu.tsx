import { NoEncryption } from "@mui/icons-material";
import { Box, Button, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const linkStyle = {
  margin: "0",
  textDecoration: "none",
  color: "white",
};

const BootstrapButton = styled(Button)({
  marginLeft: 18,
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
    backgroundColor: "#2e9eff",
  },
  "&:active": {
    backgroundColor: "#f7f7f7",
  },
});

const AvatarButton = styled(Avatar)({
  width: 30,
  height: 30,
  marginRight: 6,
  variant: "square",
});

export default function Side_menu() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      sx={{
        bgcolor: "#1f93f9",
        height: "94.9vh",
        width: "15vw",
        minWidth: "220px",
        maxWidth: "240px",
      }}
    >
      <Box flex="0.8">
        <Link to="/" style={linkStyle}>
          <BootstrapButton>
            <AvatarButton alt="dashboard" src="/icon_speed.png" />
            Dashboard
          </BootstrapButton>
        </Link>
        <Link to="/relatorios" style={linkStyle}>
          <BootstrapButton>
            <AvatarButton alt="dashboard" src="/icon_report.png" />
            Relatórios
          </BootstrapButton>
        </Link>
        <Link to="/tipologias" style={linkStyle}>
          <BootstrapButton>
            <AvatarButton alt="competence" src="/icon_skill.png" />
            Competências
          </BootstrapButton>
        </Link>
      </Box>
      <Link to="/configuracoes" style={linkStyle}>
        <BootstrapButton>
          <AvatarButton alt="configuration" src="/icon_conf.png" />
          Configurações
        </BootstrapButton>
      </Link>
    </Box>
  );
}