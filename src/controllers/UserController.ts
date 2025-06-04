import {UserDtoIn} from "../dtos/UserDTO";
import {autoInjectable} from "tsyringe";
import {Request, Response} from 'express';
import {CreateUserUseCase} from "../models/user/CreateUserUseCase";
import {GetUserUseCase} from "../models/user/GetUserUseCase";
import {LoginUserUseCase} from "../models/user/LoginUserUseCase";

@autoInjectable()
export class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            const userDto: UserDtoIn = req.body;
            await CreateUserUseCase.run(userDto);
            res.status(201).json("User created!")
        } catch (e) {
            // You can adapt the error handling by using a class or another middleware
            res.status(500).json({error: e.message});
        }
    }

    static async loginUser(req: Request, res: Response) {
        try {
            const userDto: UserDtoIn = req.body;
            const result = await LoginUserUseCase.run(userDto);
            res.status(200).json(result)
        } catch (e) {
            // You can adapt the error handling by using a class or another middleware
            res.status(401).json({error: e.message});
        }
    }

    static async getUser(req: Request, res: Response) {
        try {
            const userId: number = Number(req.params.id);
            const user = await GetUserUseCase.run(userId);
            res.status(200).json(user)
        } catch (e) {
            // You can adapt the error handling by using a class or another middleware
            res.status(500).json({error: e.message});
        }
    }
}