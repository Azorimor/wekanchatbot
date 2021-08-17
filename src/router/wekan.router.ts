import { Router, Request, Response } from "express";
import { WekanController } from "../controller/wekan.controller";
import { verifyWekanToken } from "../middlewares/verifyWekanToken";

const wekanRouter = Router();
const wekan = new WekanController();

wekanRouter.post("/", verifyWekanToken, (req: Request, res: Response) => {
  wekan.recieveWebhook(req, res);
});

export default wekanRouter;
