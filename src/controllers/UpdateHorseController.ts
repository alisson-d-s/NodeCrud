import { Request, Response } from "express";
import { UpdateHorseService } from "../services/UpdateHorseService";

export class UpdateHorseController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, breedId } = request.body;

        const service = new UpdateHorseService();

        const result = await service.execute({ id, name, breedId });

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}