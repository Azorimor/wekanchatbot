import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { expressLogger, expressErrorLogger } from "./utils/logger";
import { LOG_LEVEL } from "./utils/config";
import mainRouter from "./router/main.router";
import { i18n } from "./i18n";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
if (LOG_LEVEL === "debug") {
  app.use(expressLogger);
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use router
app.use(mainRouter);

app.use(expressErrorLogger);

i18n();

export default app;
