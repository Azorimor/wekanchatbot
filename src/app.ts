import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "pino-http";
import pino from "./utils/logger";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(logger({ logger: pino }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({info: "Chatbot started."});
});

export default app;
