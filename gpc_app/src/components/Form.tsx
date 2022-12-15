import { TextField } from "@mui/material";
import { BootstrapButton, BoxColumn, FlexBox } from "./Component";

interface IForm {
  criar: () => void;
  eventoteclado: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  typologydata?: any;
}

export default function Form({
  criar,
  eventoteclado,
  label,
  typologydata,
}: IForm) {
  return (
    <FlexBox>
      <BoxColumn>
        <TextField
          sx={{ minWidth: "30vw" }}
          type="text"
          variant="standard"
          name={label}
          placeholder="Digite o nome da tipologia"
          onChange={eventoteclado}
          value={typologydata.typology}
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
          value={typologydata.description}
          multiline
          rows={5}
        />
      </BoxColumn>
      <BoxColumn style={{ marginTop: 46 }}>
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
        >
          Alterar
        </BootstrapButton>
        <BootstrapButton
          style={{
            marginLeft: 7,
            height: 27,
          }}
        >
          Excluir
        </BootstrapButton>
      </BoxColumn>
    </FlexBox>
  );
}
