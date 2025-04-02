import { Router, Request, Response  } from "express";
import { HealthController } from "../controllers/HealthController";

const router = Router();
const healthController = new HealthController();

router.get("", (req: Request, res: Response) =>
    healthController.getHealth(req,res));

export default router;