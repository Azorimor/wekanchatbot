import { Request, Response, NextFunction } from "express";
import { WEKAN_TOKEN } from "../utils/config";

export const verifyWekanToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!(req.headers["x-wekan-token"] === WEKAN_TOKEN)) {
    res
      .status(403)
      .json({ message: "Invalid or non existent token", success: false });
    return;
  }
  next();
};
