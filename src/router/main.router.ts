import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ message: "WekanChatBot up and running", success: true });
});

export default router;
