import { Router } from "express";
import wekanRouter from "./wekan.router";
import i18next from "i18next";
import logger from "../utils/logger";

const router = Router();

router.get("/", (req, res) => {
  logger.info({ message: "testlang GET / :", metadata: i18next });
  res.json({ message: i18next.t("status"), success: true });
});

router.use("/wekan", wekanRouter);

export default router;
