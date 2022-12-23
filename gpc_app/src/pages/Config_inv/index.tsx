import Header from "../../components/Header";
import { Box, Typography, Stack, Alert } from "@mui/material";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import { FlexBox, StyledBox } from "../../components/Component";
import { SelectChangeEvent } from "@mui/material/Select";
import SelectInv from "../../components/SelectInv";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

export default function Config_inv() {
  const [ano, setAno] = useState("");
  const [mes, setMes] = useState("");
  const [anofinal, setAnofinal] = useState("");
  const [mesfinal, setMesfinal] = useState("");
  const [mesatual, setMesatual] = useState<number>();
  const [alert, setAlert] = useState<boolean | null>(null);
  const [messagealert, setMessagealert] = useState<string>("");
  //criar busca no banco para o último inventário
  useEffect(() => {
    axios
      .get("http://localhost:3000/justyears")
      .then((resp) => {
        let anos: Array<number> = [];
        resp.data?.map((item: any) => anos.push(parseInt(item.year)));
        setMesatual(_.max(anos));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [alert]);
  //captura o ano de abertura
  const handleChange = (event: SelectChangeEvent) => {
    setAno(event.target.value);
  };
  //caputra o mês de abertura
  const handleChangeMes = (event: SelectChangeEvent) => {
    setMes(event.target.value);
  };
  //captura o ano de encerramento
  const handleChangeFinal = (event: SelectChangeEvent) => {
    setAnofinal(event.target.value);
  };
  //captura o mês de encerramento
  const handleChangeMesFinal = (event: SelectChangeEvent) => {
    setMesfinal(event.target.value);
  };
  //função do botão abrir inventário
  const handleButtonCreate = () => {
    axios
      .post("http://localhost:3000/years", {
        open: `${ano}-${mes}-01`,
        close: `${anofinal}-${mesfinal}-01`,
        year: ano,
      })
      .then((resp) => {
        setMessagealert("Inventário criado com sucesso!!!");
        setAlert(true);
      })
      .catch((error) => {
        setMessagealert(
          "Não foi possível abrir esses inventário, verifique se todos os campos foram preenchidos"
        );
        setAlert(false);
      });
  };

  return (
    <Box>
      <Header />
      <Box>
        <Box display="flex" flexDirection="row">
          <Side_menu />
          <Box display="flex" flexDirection="column">
            <Bar
              bg="#b1aeae"
              path="./public/icon_conf.png"
              title="Configurações - Inventário"
            />
            <StyledBox>
              <FlexBox style={{ flex: 0.9 }}>
                <SelectInv
                  mes={mes}
                  mesf={mesfinal}
                  ano={ano}
                  anof={anofinal}
                  handleChange={handleChange}
                  handleChangeFinal={handleChangeFinal}
                  handleChangeMes={handleChangeMes}
                  handleChangeMesFinal={handleChangeMesFinal}
                  onClick={handleButtonCreate}
                />
              </FlexBox>
              <Typography
                sx={{
                  margin: "60px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Útimo Inventário:{" "}
                <span
                  style={{ background: "#0FEDFB", padding: 4, borderRadius: 6 }}
                >
                  {mesatual}
                </span>
                <span>
                  {alert === true && (
                    <Stack>
                      <Alert severity="success">{messagealert}</Alert>
                    </Stack>
                  )}
                  {alert === false && (
                    <Stack>
                      <Alert severity="error">{messagealert}</Alert>
                    </Stack>
                  )}
                </span>
              </Typography>
            </StyledBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
