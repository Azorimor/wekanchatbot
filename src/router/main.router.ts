import { Router } from "express";
import wekanRouter from "./wekan.router";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "WekanChatBot up and running", success: true });
});

router.use("/wekan", wekanRouter);

export default router;
