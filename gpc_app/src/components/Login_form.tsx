import { Box, Avatar, TextField, Typography, Alert } from "@mui/material";
import { useState, useContext } from "react";
import { BootstrapButton, FlexBox, BoxColumn } from "./Component";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";

export default function login_form() {
  const [username, setUsername] = useState(""); //Guarda o username do usuário
  const [password, setPassword] = useState(""); //Guarda o password do usuário
  const [alert, setAlert] = useState(false); //Controla a mensagem de erro de acesso
  const navigate = useNavigate(); //É utilizado para redirecionamento do usuário
  const { setResposta, setUser, setToken, setAdmin } = useContext(AuthContext); //Retorna as variáveis do contexto que são visíveis para o todo o sistema

  //Função para o submit do login
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/sessions", {
        username,
        password,
      })
      .then((resp) => {
        const data = resp.data;
        setResposta(data);
        setToken(data.token);
        localStorage.setItem("@PermissionYT:token", data.token);
        if (data.permissionId == 1) {
          setAdmin(true);
          navigate("/dashboard");
        } else {
          setUser(true);
          navigate("/pesquisa");
        }
      })
      .catch((err) => {
        setAlert(true);
      });
  };

  return (
    <BoxColumn>
      <FlexBox
        style={{
          backgroundImage: "url(/Challenge_5.jpg)",
        }}
      >
        <BoxColumn></BoxColumn>
        <Box flex="0.60" sx={{ height: "100vh" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ bgcolor: "#fffff" }}
          >
            <Avatar
              alt="Brain"
              src="/brain.svg"
              sx={{ width: 360, height: 325, marginTop: 25, marginBottom: 6 }}
              variant="square"
            />
            <BoxColumn
              style={{
                alignItems: "center",
                background: "#ffffff67",
                borderRadius: 10,
              }}
            >
              <Typography variant="h2" fontFamily="Calibri" sx={{ margin: 1 }}>
                SkillManager
              </Typography>
              <Typography
                variant="h5"
                fontFamily="Calibri"
                sx={{ marginBottom: 1, marginTop: -3 }}
              >
                Gestão por Competências
              </Typography>
            </BoxColumn>
          </Box>
        </Box>
        <Box
          flex="0.30"
          flexDirection="column"
          sx={{
            marginTop: 30,
            maxHeight: 340,
            minWidth: 300,
            borderRadius: 4,
            backgroundColor: "#d9d9d9b4",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              gutterBottom
              align="left"
              style={{ margin: 25, marginBottom: 60 }}
            >
              Acesso à plataforma
            </Typography>
            {alert === true && (
              <Stack sx={{ marginLeft: 2.5, width: "93%", marginTop: -5 }}>
                <Alert severity="error">Usuário ou senha incorreta!</Alert>
              </Stack>
            )}
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                marginTop: 27,
                marginBottom: 7,
                margin: 20,
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                required
                id="name"
                label="username"
                variant="filled"
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                }}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="filled"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                }}
              />
              <BootstrapButton
                style={{ maxWidth: 100, alignSelf: "start", marginTop: 10 }}
                type="submit"
              >
                Entrar
              </BootstrapButton>
            </form>
          </Box>
        </Box>
      </FlexBox>
    </BoxColumn>
  );
}
