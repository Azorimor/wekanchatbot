import pino from "pino";

const logger = pino({
  name: "Wekanchatbot",
  prettyPrint: true,
});

export default logger;
