import { PORT } from "./utils/config";
import app from "./app";
import logger from "./utils/logger";

app.listen(PORT, () => {
  logger.info(`Express server running on port ${PORT}`);
});
