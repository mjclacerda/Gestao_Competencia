import { Box, Avatar, TextField, Typography } from "@mui/material";
import { Footnote, BootstrapButton } from "./Component";

export default function login_form() {
  return (
    <div>
      <Box
        display="flex"
        sx={{
          backgroundImage: "url(/Challenge_5.jpg)",
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
          flexDirection="column"
          sx={{
            maxWidth: 450,
            minWidth: 250,
            marginTop: 25,
            borderRadius: 4,
            marginRight: 15,
            marginLeft: 20,
          }}
        >
          <Box>
            <Typography variant="h5" gutterBottom align="center">
              LOGIN
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                marginTop: 7,
                marginBottom: 7,
              }}
            >
              <TextField
                required
                id="name"
                label="username"
                variant="filled"
                sx={{
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
                  backgroundColor: "white",
                  borderRadius: "6px",
                }}
              />
            </Box>
            <BootstrapButton>Entrar</BootstrapButton>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" sx={{ bgcolor: "#d9d9d9" }}>
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
