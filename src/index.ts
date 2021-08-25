import { PORT, DEFAULT_LANGUAGE, PROD } from "./utils/config";
import app from "./app";
import logger from "./utils/logger";
import connection from "./utils/connection";
import i18next from "i18next";
import en from "../locales/en.json";
import de from "../locales/de.json";

connection
  .then(() => {
    logger.info("Connected to MongoDB");
    i18next.init(
      {
        lng: DEFAULT_LANGUAGE,
        debug: !PROD,
        initImmediate: false,
        fallbackLng: "en",
        resources: {
          en,
          de,
        },
      },
      (error) => {
        logger.info({
          message: `Language loaded (${DEFAULT_LANGUAGE}).`,
          metadata: { error: error, language: DEFAULT_LANGUAGE },
        });
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
