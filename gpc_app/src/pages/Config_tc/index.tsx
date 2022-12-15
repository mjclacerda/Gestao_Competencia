import axios from "axios";
import Header from "../../components/Header";
import Side_menu from "../../components/Side_menu";
import Bar from "../../components/Bar";
import Form from "../../components/Form";
import { BoxColumn, FlexBox } from "../../components/Component";
import { BottonListT } from "../../components/BottonList";
import { Box, Typography, Stack, Alert } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";

export default function Config_tc() {
  const typObjempt = { typology: "", description: "" }; //Objeto da tipologia
  const [tipologias, setTipologias] = useState(); //dados das tipologias
  const [alert, setAlert] = useState<boolean | null>(null); //alerta de sucesso ou falha na criação de tipologias
  const [typologydata, setTypologydata] = useState<object>(typObjempt); //typologyId, typology e description capiturados ao clic do botão de tipologias cadastradas. É necessário inicializar o objeto com os valores vazios para evitar erro Uncontrolled no react
  const [typologyId, setTypologyId] = useState<number>(0);
  //Fetch do rol de tipologias ativas
  useEffect(() => {
    axios
      .get("http://localhost:3000/typologies")
      .then((resp) => {
        setTipologias(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [alert]);
  //Captura os valores do formulário de edição das tipologias
  const handleChangeValues = (e: any): void => {
    setTypologydata({ ...typologydata, [e.target.name]: e.target.value });
  };
  //Função dos botões da lista de tipologias
  const handleButtonListT = (value: any): void => {
    axios
      .get(`http://localhost:3000/typologies/${value.target.value}`)
      .then((resp) => {
        const { data } = resp;
        setTypologydata({
          typology: data.typology,
          description: data.description,
        });
        setTypologyId(data.typologyId);
        setAlert(null);
      });
  };
  //Função do botão Criar
  const handleButtonCreate = () => {
    axios
      .post("http://localhost:3000/typologies", {
        ...typologydata,
        status: true,
      })
      .then((resp) => {
        setAlert(true);
        formcleaning();
      })
      .catch((error) => {
        setAlert(false);
      });
  };
  //Função do botão Alterar
  const handleButtonUpdate = () => {
    axios
      .post("http://localhost:3000/typologies", {
        ...typologydata,
        status: true,
      })
      .then((resp) => {
        setAlert(true);
        formcleaning();
      })
      .catch((error) => {
        setAlert(false);
      });
  };
  //Limpar o formulário
  const formcleaning = () => {
    setTypologydata(typObjempt);
    setTypologyId(0);
  };

  return (
    <Box>
      <Header />
      <Box>
        <Box display="flex" flexDirection="row">
          <Side_menu />
          <Box display="flex" flexDirection="column">
            <Bar
              bg="#b0afaf"
              path="./public/icon_conf.png"
              title="Configurações - Tipologias"
            />
            <FlexBox
              style={{
                width: "85.2vw",
                height: "50vh",
                background: "#efefef",
                position: "relative",
                top: "2vh",
                left: "1vw",
              }}
            >
              <FlexBox
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: "83vw",
                  position: "relative",
                  top: "2vh",
                }}
              >
                <Typography style={{ margin: 20, fontSize: 18 }}>
                  TIPOLOGIAS CADASTRADAS
                </Typography>
                <FlexBox
                  style={{
                    marginLeft: 40,
                    overflow: "auto",
                    maxHeight: "35vh",
                  }}
                >
                  <BottonListT list={tipologias} clic={handleButtonListT} />
                </FlexBox>
              </FlexBox>
            </FlexBox>
            <FlexBox
              style={{
                width: "85.2vw",
                height: "33vh",
                background: "#ffffff",
                position: "relative",
                top: "3vh",
                left: "1vw",
              }}
            >
              <BoxColumn
                style={{
                  width: "30vw",
                  minWidth: "280px",
                  position: "relative",
                  left: "27vw",
                  top: "5vh",
                }}
              >
                <Typography sx={{ color: "#fd7b30", fontWeight: "bold" }}>
                  Cadastrar Tipologia
                </Typography>
                {alert === true && (
                  <Stack sx={{ width: "100%" }}>
                    <Alert severity="success">
                      Tipologia cirada com sucesso!
                    </Alert>
                  </Stack>
                )}
                {alert === false && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity="error">
                      Não foi possível criar essa tipologia, verifique se todos
                      os campos foram preenchidos ou se essa tipologia já
                      existe!
                    </Alert>
                  </Stack>
                )}
                <Form
                  label="typology"
                  criar={handleButtonCreate}
                  eventoteclado={handleChangeValues}
                  typologydata={typologydata}
                />
              </BoxColumn>
            </FlexBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
