import express from "express";
import winston from "winston";
import cors from "cors";
import Sequelize from "./db/db.js";
import typologiesRouter from "./routes/typologies.router.js";
import competencesRouter from "./routes/competences.router.js";
import evaluationsRouter from "./routes/evaluations.router.js";
import formsRouter from "./routes/forms.router.js";
import questionRouter from "./routes/question.router.js";
import users from "./routes/users.router.js";

const app = express();
//logs
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

app.use(express.json());

//habilitando o compartilhamento de recurso de origem cruzada
app.use(cors());

app.use("/typologies", typologiesRouter);
app.use("/competences", competencesRouter);
app.use("/evaluations", evaluationsRouter);
app.use("/forms", formsRouter);
app.use("/question", questionRouter);
app.use("/users", users);

//tratamento de erros
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

await Sequelize.sync();

app.listen(3000, () => {
  try {
    logger.info("API Started!");
  } catch (err) {
    logger.error(err);
  }
});
