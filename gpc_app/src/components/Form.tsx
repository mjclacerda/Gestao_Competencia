import { TextField } from "@mui/material";
import { BootstrapButton, BoxColumn, FlexBox } from "./Component";

interface IForm {
  criar: () => void;
  alterar: () => void;
  excluir: () => void;
  limpar: () => void;
  eventoteclado: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  showbuttons: number;
  data: any;
}

export default function Form({
  criar,
  alterar,
  excluir,
  limpar,
  eventoteclado,
  label,
  data,
  showbuttons,
}: IForm) {
  return (
    <FlexBox>
      <BoxColumn>
        <TextField
          sx={{ minWidth: "30vw" }}
          type="text"
          variant="standard"
          name={label}
          placeholder="Digite o nome"
          onChange={eventoteclado}
          value={data.typology || data.competence || ""}
        />
        <TextField
          sx={{
            minWidth: "30vw",
            bgcolor: "#f2f2f2",
            border: "none",
            borderRadius: 3,
          }}
          type="text"
          name="description"
          placeholder="Digite aqui a descrição"
          onChange={eventoteclado}
          value={data.description}
          multiline
          rows={5}
        />
      </BoxColumn>
      {showbuttons ? (
        <BoxColumn style={{ marginTop: 32 }}>
          <BootstrapButton
            style={{
              marginLeft: 7,
              marginBottom: 2,
              height: 27,
            }}
            onClick={() => {
              criar();
            }}
          >
            Criar
          </BootstrapButton>
          <BootstrapButton
            style={{
              marginLeft: 7,
              marginBottom: 2,
              height: 27,
            }}
            onClick={() => {
              alterar();
            }}
          >
            Alterar
          </BootstrapButton>
          <BootstrapButton
            style={{
              marginLeft: 7,
              marginBottom: 2,
              height: 27,
            }}
            onClick={() => {
              limpar();
            }}
          >
            Limpar
          </BootstrapButton>
          <BootstrapButton
            style={{
              marginLeft: 7,
              marginBottom: 2,
              height: 27,
              background: "#f4290f",
            }}
            onClick={() => {
              excluir();
            }}
          >
            Excluir
          </BootstrapButton>
        </BoxColumn>
      ) : (
        <BoxColumn style={{ marginTop: 32 }}>
          <BootstrapButton
            style={{
              marginLeft: 7,
              marginBottom: 2,
              height: 27,
            }}
            onClick={() => {
              criar();
            }}
          >
            Criar
          </BootstrapButton>
          <BootstrapButton
            style={{
              marginLeft: 7,
              marginBottom: 2,
              height: 27,
            }}
            onClick={() => {
              limpar();
            }}
          >
            Limpar
          </BootstrapButton>
        </BoxColumn>
      )}
    </FlexBox>
  );
}
