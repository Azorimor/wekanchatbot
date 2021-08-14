import { Router, Request, Response } from "express";
import { recieveWebhook } from "../controller/wekan.controller";

const wekanRouter = Router();

wekanRouter.post("/", (req: Request, res: Response) => {
  recieveWebhook(req, res);
});

export default wekanRouter;
