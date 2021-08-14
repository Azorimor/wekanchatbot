import winston from "winston";
import "winston-mongodb";
import expressWinston from "express-winston";
import { LOG_MONGO, MONGO_URI } from "./config";

const getTransports = (): winston.transport[] => {
  const transports: winston.transport[] = [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ];
  if (LOG_MONGO) {
    transports.push(
      new winston.transports.MongoDB({
        db: MONGO_URI,
        decolorize: true,
        options: {
          poolSize: 2,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      })
    );
  }
  return transports;
};

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "wekan-chat-bot" },
  transports: getTransports(),
});

export const expressLogger = expressWinston.logger({
  transports: getTransports(),
  format: winston.format.json(),
  meta: true,
  expressFormat: true,
});

export const expressErrorLogger = expressWinston.errorLogger({
  transports: getTransports(),
  format: winston.format.json(),
  meta: true,
});

export default logger;
