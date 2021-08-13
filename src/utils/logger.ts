import winston from "winston";
import expressWinston from "express-winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "wekan-chat-bot" },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

export const expressLogger = expressWinston.logger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
  format: winston.format.json(),
  meta: true,
  expressFormat: true,
});

export const expressErrorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
  format: winston.format.json(),
});

export default logger;
