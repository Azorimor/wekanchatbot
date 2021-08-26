import i18next from "i18next";
import Backend from "i18next-fs-backend";
import { join } from "path";
import { readdirSync, lstatSync } from "fs";
import { DEFAULT_LANGUAGE, PROD } from "./utils/config";
import logger from "./utils/logger";

/**
 * Initialize the i18next object.
 */
export const i18n = (): void => {
  i18next.use(Backend).init(
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
      preload: readdirSync(join(__dirname, "../locales")).filter((fileName) => {
        const joinedPath = join(join(__dirname, "../locales"), fileName);
        const isDirectory = lstatSync(joinedPath).isDirectory();
        return isDirectory;
      }),
    },
    (error) => {
      if (error) {
        logger.error({
          message: "The languages could not be loaded correctly.",
          metadata: error,
        });
      }
    }
  );
};
