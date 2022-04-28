import { Request, Response } from "express";
import { CreateBreedService } from "../services/CreateBreedService";

export class CreateBreedController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const service = new CreateBreedService();

        const result = await service.execute({ name });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}