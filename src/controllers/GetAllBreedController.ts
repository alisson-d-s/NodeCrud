import { Request, Response } from "express";
import { GetAllBreedService } from "../services/GetAllBreedService";

export class GetAllBreedController {
    async handle(request: Request, response: Response) {
        const service = new GetAllBreedService();

        const breed = await service.execute();

        return response.json(breed);
    }
}
