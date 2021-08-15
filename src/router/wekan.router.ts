import { Router, Request, Response } from "express";
import { WekanController } from "../controller/wekan.controller";

const wekanRouter = Router();
const wekan = new WekanController();

wekanRouter.post("/", (req: Request, res: Response) => {
  wekan.recieveWebhook(req, res);
});

export default wekanRouter;
