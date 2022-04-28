import { Request, Response } from "express";
import { GetAllHorseService } from "../services/GetAllHorseService";

export class GetAllHorseController {
    async handle(request: Request, response: Response){
        
        const service = new GetAllHorseService();

        const horse = await service.execute();

        return response.json(horse);
    }
}