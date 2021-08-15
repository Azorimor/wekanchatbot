import { Request, Response } from "express";
import logger from "../utils/logger";
import { SynologyService } from "../services/synology.service";

const synology = new SynologyService();

export const recieveWebhook = async (
  req: Request,
  res: Response
): Promise<void> => {
  logger.info({ message: "Recieved from Wekan", metadata: req.body });
  synology.sendDefault({ text: req.body.text });
  res.status(200).send();
};
