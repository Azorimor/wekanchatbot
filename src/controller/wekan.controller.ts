import { Request, Response } from "express";
import logger from "../utils/logger";

export const recieveWebhook = async (
  req: Request,
  res: Response
): Promise<void> => {
  logger.info({ message: "Got:", metadata: req.body });
  res.json({ message: "wekan working" });
};
