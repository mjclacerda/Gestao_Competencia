import { BootstrapButton, BoxColumn } from "./Component";
import {
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack,
  Pagination,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { ISelf_Ask } from "./Self_Ask";

export function Other_Ask({
  list,
  chooseimp,
  importance,
  choosedom,
  domain,
  enviar,
  page,
  currentPage,
  handlePagination,
  answered,
}: ISelf_Ask) {
  return (
    <BoxColumn style={{ width: "87vw", overflow: "auto" }}>
      {list?.map((item: any) => (
        <BoxColumn
          key={uuid()}
          style={{ width: "18vw", marginLeft: "10vw", marginBottom: "6vh" }}
        >
          <BootstrapButton
            key={uuid()}
            style={{
              marginBottom: -20,
              background: "#00EFFF",
              color: "#000000",
              fontSize: "16px",
            }}
          >
            {item.competence}
          </BootstrapButton>
          <div
            key={uuid()}
            style={{
              background: "#e8e1e1cd",
              color: "#040303",
              textAlign: "justify",
              padding: "20px",
              paddingTop: "10px",
              borderRadius: "5px",
              width: "36vw",
            }}
          >
            <Typography
              key={uuid()}
              style={{
                position: "relative",
                top: "10px",
                fontSize: 16,
              }}
            >
              {item.description}
            </Typography>
          </div>
          <Typography
            style={{
              fontWeight: "bold",
              marginTop: "2vh",
              marginBottom: "2vh",
            }}
          >
            Analise a competência acima e responda:
          </Typography>
          <BoxColumn style={{ alignItems: "center", marginLeft: "20vw" }}>
            <Typography style={{ width: "40vw" }}>
              De 1 a 5, o quanto essa competência é importante para a realização
              de suas atividades laborais?
            </Typography>
            <FormControl style={{ width: "20vw", marginBottom: "1vh" }}>
              <RadioGroup
                row
                aria-labelledby={item.competenceId}
                name={String(item.competenceId)}
                onChange={chooseimp}
                value={importance}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="1"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="2"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="3"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="4"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label="5"
                  labelPlacement="top"
                />
              </RadioGroup>
            </FormControl>
            <Typography style={{ width: "40vw" }}>
              De 1 a 5, o quanto você domina essa competência?
            </Typography>
            <FormControl style={{ width: "20vw" }}>
              <RadioGroup
                row
                aria-labelledby={item.competenceId}
                name="domain_level"
                onChange={choosedom}
                value={domain}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="1"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="2"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="3"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="4"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label="5"
                  labelPlacement="top"
                />
              </RadioGroup>
            </FormControl>
          </BoxColumn>
          {answered.includes(item.competenceId) ? (
            <BootstrapButton
              style={{
                width: "100px",
                alignSelf: "start",
                marginBottom: "5vh",
                background: "green",
              }}
              onClick={enviar}
              disabled
            >
              Enviada
            </BootstrapButton>
          ) : (
            <BootstrapButton
              style={{
                width: "100px",
                alignSelf: "start",
                marginBottom: "5vh",
              }}
              onClick={enviar}
            >
              Enviar
            </BootstrapButton>
          )}
        </BoxColumn>
      ))}
      <Stack spacing={0} sx={{ marginLeft: "20vw" }}>
        <Pagination
          count={page}
          page={currentPage}
          siblingCount={0}
          boundaryCount={1}
          onChange={handlePagination}
        />
      </Stack>
    </BoxColumn>
  );
}
