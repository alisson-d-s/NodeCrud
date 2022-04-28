import { Request, Response } from "express";
import { DeleteHorseService } from "../services/DeleteHorseService";

export class DeleteHorseController {
    async handle(request: Request, response: Response) {
    
        if (!parseInt(request.params.id)){
            return response.status(400).json("Invalid id!");
        }

        const id = parseInt(request.params.id);

        const service = new DeleteHorseService();

        const result = await service.execute(id);

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).json("Horse has been deleted").end();
    }
}