import {Request, Response, Router} from 'express';
import {UserController} from '../controllers/UserController';

const router = Router();

router.post("/", (req: Request, res: Response) => {
    UserController.createUser(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
    UserController.getUser(req, res);
});
export default router;