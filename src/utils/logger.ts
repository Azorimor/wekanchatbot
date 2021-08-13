import pino from "pino";
import { PROD } from "./config";

const logger = pino({
  name: "Wekanchatbot",
  prettyPrint: !PROD,
});

export default logger;
