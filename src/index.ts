import { PORT } from "./utils/config";
import app from "./app";
import logger from "./utils/logger";
import connection from "./utils/connection";

connection
  .then(async () => {
    logger.info("Connected to MongoDB");
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
