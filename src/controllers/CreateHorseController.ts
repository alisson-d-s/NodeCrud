import { Request, Response } from "express";
import { CreateHorseService } from "../services/CreateHorseService";

export class CreateHorseController {
    async handle(request: Request, response: Response) {
        const { name, breedId } = request.body;

        if (!parseInt(breedId)){
            return response.status(400).json("Invalid breedId");
        }

        const service = new CreateHorseService();

        const result = await service.execute({ name, breedId });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}