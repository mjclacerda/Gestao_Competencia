import { Box, Avatar, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  marginLeft: 380,
  marginTop: 40,
  marginBottom: 40,
  backgroundColor: "#fd7b30",
  borderColor: "#fd7b30",
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
    backgroundColor: "#0d8df6",
    borderColor: "#0d8df6",
  },
  "&:active": {
    backgroundColor: "#20b102",
    borderColor: "#20b102",
  },
});

const Footnote = styled(Typography)({
  fontSize: 28,
  borderRadius: 15,
  fontFamily: [
    "Garamond",
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});

export default function login_form() {
  return (
    <div>
      <Box
        display="flex"
        sx={{
          backgroundImage: "url(/Challenge.jpg)",
        }}
      >
        <Box flex="0.70" height="850px">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ bgcolor: "#fffff" }}
          >
            <Avatar
              alt="Brain"
              src="/brain.svg"
              sx={{ width: 316, height: 284, marginTop: 28, marginBottom: 5 }}
              variant="square"
            />
            <Footnote variant="h1" gutterBottom bgcolor="#e1e5e9">
              SISTEMA ELETRÔNICO DE
            </Footnote>
            <Footnote variant="h1" gutterBottom bgcolor="#e1e5e9">
              GESTÃO DE PESSOAS POR COMPETÊNCIA
            </Footnote>
          </Box>
        </Box>
        <Box
          flex="0.40"
          sx={{
            width: 450,
            marginTop: 25,
            borderRadius: 4,
            marginRight: 15,
            marginLeft: 20,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            marginBottom="50px"
            align="center"
            marginTop="60px"
          >
            LOGIN
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              required
              id="name"
              label="username"
              variant="filled"
              sx={{
                marginLeft: 15,
                marginRight: 15,
                marginBottom: "20px",
                backgroundColor: "white",
                borderRadius: "6px",
              }}
            />
            <TextField
              required
              id="password"
              label="password"
              variant="filled"
              sx={{
                marginLeft: 15,
                marginRight: 15,
                backgroundColor: "white",
                borderRadius: "6px",
              }}
            />
          </Box>
          <BootstrapButton variant="contained" disableRipple>
            Entrar
          </BootstrapButton>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" sx={{ bgcolor: "#e1e5e9" }}>
        <Box flex="0.25"></Box>
        <Box display="flex" flexDirection="column" sx={{ marginBottom: 10 }}>
          <Avatar
            alt="research"
            src="/relatorio.png"
            sx={{ width: 150, height: 150, marginTop: 30, marginBottom: 5 }}
            variant="square"
          />
          <Typography
            align="center"
            fontSize="22px"
            variant="overline"
            fontStyle={{ color: "#fb5f04", fontWeight: "light" }}
          >
            RELATÓRIOS
          </Typography>
        </Box>
        <Box flex="0.25"></Box>
        <Box display="flex" flexDirection="column">
          <Avatar
            alt="dashboard"
            src="/dashboard.png"
            sx={{ width: 150, height: 150, marginTop: 10, marginBottom: 5 }}
            variant="square"
          />
          <Typography
            align="center"
            fontSize="22px"
            variant="overline"
            fontStyle={{ color: "#fb5f04" }}
          >
            DASHBOARD
          </Typography>
        </Box>
        <Box flex="0.25"></Box>
        <Box display="flex" flexDirection="column">
          <Avatar
            alt="evaluation"
            src="/report2.png"
            sx={{ width: 150, height: 150, marginTop: 30, marginBottom: 5 }}
            variant="square"
          />
          <Typography
            align="center"
            fontSize="22px"
            variant="overline"
            fontStyle={{ color: "#fb5f04", fontWeight: "light" }}
          >
            PESQUISAS
          </Typography>
        </Box>
        <Box flex="0.25"></Box>
      </Box>
    </div>
  );
}
