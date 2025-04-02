import { Request, Response } from "express";
import { UserService } from "../../application/services/UserService";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    getUser(req: Request, res: Response): void {
        const userId = req.params.id;
        const user = this.userService.getUser(userId);
        res.json(user);
    }
}