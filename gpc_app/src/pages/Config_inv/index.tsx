import Header from "../../components/Header";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import List from "../../components/List";
import SelectInv from "../../components/SelectInv";
import {
  BoxColumn,
  FlexBox,
  StyledBox,
  BootstrapButton,
} from "../../components/Component";
import { Box, Typography, Stack, Alert } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { CompareDatesExact, CompareDates } from "../../assets/Dates";
import { DateNow } from "../../assets/GenerateRange";
import axios from "axios";

export default function Config_inv() {
  const invobj = { yearId: 0, open: "", close: "", year: "" };
  const [ano, setAno] = useState(""); //ano de abertura do select
  const [mes, setMes] = useState(""); //mês de abertura do select
  const [anofinal, setAnofinal] = useState(""); //ano de encerramento do select
  const [mesfinal, setMesfinal] = useState(""); //mês encerramento do select
  const [inventarios, setInventarios] = useState(); //dados históricos dos inventários abertos
  const [lastInv, setLastInv] = useState(invobj); //dados do último inventário
  const [yearId, setYearId] = useState(0); //yearId do último inventário
  const [alert, setAlert] = useState<boolean | null>(null); //habilitação do alerta
  const [messagealert, setMessagealert] = useState<string>(""); //mensagem de alerta exibida
  const newinvent = DateNow(); //data atual
  const [newSistem, setNewSistem] = useState(false);

  //Busca no banco todos os inventários
  useEffect(() => {
    axios
      .get("http://localhost:3000/years")
      .then((resp) => {
        setInventarios(resp.data);
        setLastInv(resp.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
        setNewSistem(true);
      });
  }, [alert]);
  //Captura os dados do último inventário quando o botão é clicado
  const handleInvList = (event: any) => {
    setYearId(event.target.value);
    axios
      .get(`http://localhost:3000/years/${event.target.value}`)
      .then((resp) => {
        setAno(resp.data.year);
        setMes(resp.data.open.substring(5, 7));
        setAnofinal(resp.data.close.substring(4, 0));
        setMesfinal(resp.data.close.substring(5, 7));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Captura o ano de abertura
  const handleChange = (event: SelectChangeEvent) => {
    setAno(event.target.value);
  };
  //Caputra o mês de abertura
  const handleChangeMes = (event: SelectChangeEvent) => {
    setMes(event.target.value);
  };
  //Captura o ano de encerramento
  const handleChangeFinal = (event: SelectChangeEvent) => {
    setAnofinal(event.target.value);
  };
  //Captura o mês de encerramento
  const handleChangeMesFinal = (event: SelectChangeEvent) => {
    setMesfinal(event.target.value);
  };
  //Função do botão abrir inventário
  const handleButtonCreate = () => {
    if (newSistem) {
      axios
        .post("http://localhost:3000/years", {
          open: `${ano}-${mes}-01`,
          close: `${anofinal}-${mesfinal}-28`,
          year: ano,
        })
        .then((resp) => {
          setMessagealert("Inventário criado com sucesso!!!");
          setAlert(true);
          selectcleaning();
          setNewSistem(false);
        })
        .catch((error) => {
          setMessagealert(
            "Não foi possível abrir esses inventário, pois já existe um inventário aberto para o ano informado."
          );
          setAlert(false);
        });
    }
    //Função retorna true quando a data atual é maior que a data de encerramento do último inventário
    const analysinewinv = CompareDatesExact(
      newinvent.substring(5, 7),
      lastInv.close.substring(5, 7),
      newinvent.substring(4, 0),
      lastInv.close.substring(4, 0)
    );
    //Função retorna true se a data de abertura do select é menor que a data de encerramento
    const analysidate = CompareDates(mes, mesfinal, ano, anofinal);
    if (analysinewinv) {
      if (analysidate) {
        axios
          .post("http://localhost:3000/years", {
            open: `${ano}-${mes}-01`,
            close: `${anofinal}-${mesfinal}-28`,
            year: ano,
          })
          .then((resp) => {
            setMessagealert("Inventário criado com sucesso!!!");
            setAlert(true);
            selectcleaning();
          })
          .catch((error) => {
            setMessagealert(
              "Não foi possível abrir esses inventário, pois já existe um inventário aberto para o ano informado."
            );
            setAlert(false);
          });
      } else {
        setMessagealert(
          "Não é possível abrir um novo inventário: verifique se todos os campos estão preenchidos ou se a data do encerramento não é menor que a data de abertura."
        );
        setAlert(false);
      }
    } else {
      setMessagealert(
        "Não é possível abri um novo inventário pois existe um inventário aberto."
      );
      setAlert(false);
    }
  };
  //Função do botão alterar inventário
  const handleButtonUpdate = () => {
    const analysidate = CompareDates(mes, mesfinal, ano, anofinal);
    if (analysidate) {
      axios
        .put("http://localhost:3000/years", {
          yearId,
          open: `${ano}-${mes}-01`,
          close: `${anofinal}-${mesfinal}-28`,
          year: ano,
        })
        .then((resp) => {
          setMessagealert("Inventário alterado com sucesso!!!");
          setAlert(true);
          selectcleaning();
        })
        .catch((error) => {
          setMessagealert(
            "Não foi possível alterar esses inventário, pois já existe um inventário aberto para o ano informado."
          );
          setAlert(false);
        });
    }
    setMessagealert(
      "Verifique se a data de abertura não é maior que a data de encerramento ou se todos os campos foram preenchidos."
    );
    setAlert(false);
  };
  //Função do botão limpar
  const handleButtonLimpar = () => {
    selectcleaning();
    setAlert(null);
  };
  //Função para limpar os campos do select
  const selectcleaning = () => {
    setAno("");
    setAnofinal("");
    setMes("");
    setMesfinal("");
    setYearId(0);
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
                <BoxColumn>
                  <FlexBox>
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
                  </FlexBox>
                  <FlexBox>
                    <SelectInv
                      mes={mes}
                      mesf={mesfinal}
                      ano={ano}
                      anof={anofinal}
                      handleChange={handleChange}
                      handleChangeFinal={handleChangeFinal}
                      handleChangeMes={handleChangeMes}
                      handleChangeMesFinal={handleChangeMesFinal}
                      create={handleButtonCreate}
                      update={handleButtonUpdate}
                      cleaning={handleButtonLimpar}
                      showbuttons={yearId}
                    />
                  </FlexBox>
                </BoxColumn>
              </FlexBox>
              <BoxColumn
                style={{
                  maxWidth: "34vw",
                }}
              >
                {newSistem === false && (
                  <div>
                    <FlexBox
                      style={{
                        alignItems: "center",
                        marginTop: "60px",
                        marginBottom: "30px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Roboto",
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        Último Inventário:{" "}
                      </Typography>
                      <BootstrapButton
                        style={{
                          margin: 2,
                          fontSize: 16,
                          color: "black",
                          minWidth: 100,
                          background: "#0FEDFB",
                        }}
                        value={lastInv.yearId}
                        onClick={handleInvList}
                      >
                        {lastInv.year}
                      </BootstrapButton>
                    </FlexBox>
                    <List listinv={inventarios}></List>
                  </div>
                )}
              </BoxColumn>
            </StyledBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
