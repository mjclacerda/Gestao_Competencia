import { Box, Button, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const linkStyle = {
  margin: "0",
  textDecoration: "none",
  color: "white",
};

export const BootstrapButton = styled(Button)({
  marginLeft: 18,
  marginRight: 5,
  textDecoration: "none",
  backgroundColor: "#373738",
  color: "#ffffff",
  fontWeight: "normal",
  fontFamily: ["sans-serif"].join(","),
  "&:hover": {
    backgroundColor: "#474748",
  },
  "&:active": {
    backgroundColor: "#f7f7f7",
  },
});

export const AvatarButton = styled(Avatar)({
  width: 30,
  height: 30,
  marginRight: 6,
  variant: "square",
});

export default function Side_menu() {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      alignItems="flex-start"
      sx={{
        bgcolor: "#373738",
        height: "95vh",
        width: "15vw",
        minWidth: "200px",
      }}
    >
      <Box flex="0.8">
        <Link to="/dashboard" style={linkStyle}>
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
