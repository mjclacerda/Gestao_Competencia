import { TextField } from "@mui/material";
import { BootstrapButton, BoxColumn } from "./Component";

interface IForm {
  label: string;
}

export default function Form({ label }: IForm) {
  return (
    <BoxColumn>
      <TextField
        hiddenLabel
        id={label}
        defaultValue={label}
        variant="standard"
        sx={{ minWidth: "30vw" }}
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
      <BootstrapButton
        style={{
          width: "25%",
          position: "relative",
          left: "75%",
          marginTop: 7,
        }}
      >
        Criar
      </BootstrapButton>
    </BoxColumn>
  );
}
