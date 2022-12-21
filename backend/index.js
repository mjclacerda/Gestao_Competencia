import express from "express";
import winston from "winston";
import cors from "cors";
import Sequelize from "./db/db.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json" assert { type: "json" };
import typologiesRouter from "./routes/typologies.router.js";
import competencesRouter from "./routes/competences.router.js";
import evaluationsRouter from "./routes/evaluations.router.js";
import formsRouter from "./routes/forms.router.js";
import questionRouter from "./routes/question.router.js";
import usersRouter from "./routes/users.router.js";
import compforTypRouter from "./routes/compfortyp.router.js";
import questionsUserRouter from "./routes/questionsforuser.js";
import competencesHistoryRouter from "./routes/comphistory.router.js";
import forms from "./repositories/forms.repository.js";
import yearsRouter from "./routes/years.router.js";

const app = express();

//Configuração de logs do sistema
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "gpc-api.log" }),
  ],
  format: combine(label({ label: "gpc-api" }), timestamp(), myFormat),
});
//Configuração para o uso de JSON
app.use(express.json());

//Habilitando o compartilhamento de recurso de origem cruzada
app.use(cors());

//Rotas da API
app.use("/typologies", typologiesRouter);
app.use("/competences", competencesRouter);
app.use("/competencesfortypology", compforTypRouter);
app.use("/competenceshistory", competencesHistoryRouter);
app.use("/evaluations", evaluationsRouter);
app.use("/forms", formsRouter);
app.use("/questions", questionRouter);
app.use("/questionsuser", questionsUserRouter);
app.use("/users", usersRouter);
app.use("/years", yearsRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//Tratamento de erros
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ err });
});

//Sincronização do banco de dados
await Sequelize.sync();

//Criação dos formulários padrões
async function verifyForms() {
  try {
    await forms.standardForms();
  } catch (err) {
    logger.error(`${err.message} - Formulário já criado`);
  }
}
verifyForms();

//Definição da porta da API
app.listen(3000, () => {
  try {
    logger.info("API Started!");
  } catch (err) {
    logger.error(err);
  }
});
