import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
import { SYNOLOGY_BOT_TOKEN } from "../utils/config";

export const verifySynologyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!(req.body.token === SYNOLOGY_BOT_TOKEN)) {
    logger.info({ message: "Got token from synology: ", metadata: req });
    res
      .status(403)
      .json({ message: "Invalid or non existent token", success: false });
    return;
  }
  next();
};
// FIXME currently unused
