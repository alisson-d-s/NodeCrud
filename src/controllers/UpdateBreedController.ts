import { Request, Response } from "express";
import { UpdateBreedService } from "../services/UpdateBreedService";

export class UpdateBreedController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name } = request.body;

        const service = new UpdateBreedService();

        const result = await service.execute({ id, name });

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}