import { Router } from "express";
import wekanRouter from "./wekan.router";
import synologyRouter from "./synology.router";
import i18next from "i18next";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: i18next.t("status"), success: true });
});

router.use("/wekan", wekanRouter);
router.use("/synology", synologyRouter);

export default router;
