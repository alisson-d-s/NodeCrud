import { Request, Response } from "express";
import { DeleteBreedService } from "../services/DeleteBreedService";

export class DeleteBreedController {
    async handle(request: Request, response: Response) {

        if (!parseInt(request.params.id)){
            return response.status(400).json("Invalid Id!");
        }

        const id = parseInt(request.params.id);

        const service = new DeleteBreedService();

        const result = await service.execute(id);

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}