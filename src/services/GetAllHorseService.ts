import { AppDataSource } from "../database/AppDataSource";
import { Horse } from "../entities/Horse";

export class GetAllHorseService {
    async execute(){
        const horse = await AppDataSource.manager.find(Horse, {relations: { breed: true }});

        return horse;
    }
}