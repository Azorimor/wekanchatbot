import { PORT, DEFAULT_LANGUAGE, PROD } from "./utils/config";
import app from "./app";
import logger from "./utils/logger";
import connection from "./utils/connection";
import i18next from "i18next";
import Backend from "i18next-fs-backend";

import { join } from "path";
import { readdirSync, lstatSync } from "fs";

connection
  .then(async () => {
    logger.info("Connected to MongoDB");
    await i18next.use(Backend).init(
      {
        backend: {
          loadPath: join(__dirname, "../locales/{{lng}}/{{ns}}.json"),
        },
        ns: ["translation"],
        defaultNS: "translation",
        lng: DEFAULT_LANGUAGE,
        debug: !PROD,
        initImmediate: false,
        fallbackLng: "en",
        preload: readdirSync(join(__dirname, "../locales")).filter(
          (fileName) => {
            const joinedPath = join(join(__dirname, "../locales"), fileName);
            const isDirectory = lstatSync(joinedPath).isDirectory();
            return isDirectory;
          }
        ),
      },
      (err, t) => {
        console.log(err);
      }
    );
    app.listen(PORT, () => {
      logger.info(`Express server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error({
      message: "Could not connect to MongoDB.",
      errorMessage: error.message,
      error,
    });
  });
