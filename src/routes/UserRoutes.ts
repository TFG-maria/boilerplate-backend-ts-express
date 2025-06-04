import {Request, Response, Router} from 'express';
import {UserController} from '../controllers/UserController';

const router = Router();

router.post("/signup", (req: Request, res: Response) => {
    UserController.createUser(req, res);
});

router.post("/login", (req: Request, res: Response) => {
    UserController.loginUser(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
    UserController.getUser(req, res);
});
export default router;