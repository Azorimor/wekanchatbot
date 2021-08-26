import { Request, Response } from "express";
import logger from "../utils/logger";
import { SynologyService } from "../services/synology.service";

export class SynologyController {
  synology = new SynologyService();

  async recieveWebhook(req: Request, res: Response): Promise<void> {
    logger.info({ message: "Recieved from Synology", metadata: req.body });
    res.status(200).send();
  }
}
