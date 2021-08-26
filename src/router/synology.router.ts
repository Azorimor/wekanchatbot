import { Router, Request, Response } from "express";
import { SynologyController } from "../controller/synology.controller";
import { verifySynologyToken } from "../middlewares/verifySynologyToken";
import logger from "../utils/logger";

const synologyRouter = Router();
const wekan = new SynologyController();

synologyRouter.post(
  "/bot",
  verifySynologyToken,
  (req: Request, res: Response) => {
    logger.info({ message: "Synology send message: ", metadata: req });
    wekan.recieveWebhook(req, res);
  }
);

export default synologyRouter;
