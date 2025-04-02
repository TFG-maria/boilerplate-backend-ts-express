import { Request, Response } from "express";
export class HealthController{
    constructor(){}

    public getHealth(req: Request, res: Response){
        res.status(200).send("Ok!")
    }
}