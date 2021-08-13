import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import logger, { expressLogger, expressErrorLogger } from "./utils/logger";
import { LOG_LEVEL } from "./utils/config";

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
app.get("/", (req, res) => {
  res.json({ info: "Chatbot started.", header: req.headers });
});

app.use(expressErrorLogger);

export default app;
