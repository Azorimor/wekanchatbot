import { Request, Response } from "express";
import logger from "../utils/logger";
import { SynologyService } from "../services/synology.service";

export class WekanController {
  synology = new SynologyService();

  async recieveWebhook(req: Request, res: Response): Promise<void> {
    logger.info({ message: "Recieved from Wekan", metadata: req.body });
    this.synology.sendDefault({ text: req.body.text });
    res.status(200).send();
  }
}
