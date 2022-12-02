import { TextField } from "@mui/material";
import { BootstrapButton, BoxColumn, FlexBox } from "./Component";

interface IForm {
  label: string;
}

export default function Form({ label }: IForm) {
  return (
    <FlexBox>
      <BoxColumn>
        <TextField
          sx={{ minWidth: "30vw" }}
          hiddenLabel
          id={label}
          defaultValue={label}
          variant="standard"
        />
        <TextField
          sx={{
            minWidth: "30vw",
            bgcolor: "#f2f2f2",
            border: "none",
            borderRadius: 3,
          }}
          id="descricao"
          label="descrição"
          multiline
          rows={5}
        />
      </BoxColumn>
      <BoxColumn style={{ marginTop: 30 }}>
        <BootstrapButton
          style={{
            marginLeft: 7,
            marginBottom: 2,
            height: 27,
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
