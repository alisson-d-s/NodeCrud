import { AppDataSource } from "../database/AppDataSource";
import { Horse } from "../entities/Horse";

export class DeleteHorseService {
    async execute(id: number) {

        if (!await AppDataSource.manager.findOne(Horse, { where: { id: id }})){
            return new Error("Horse does not exists");
        }

        await AppDataSource.manager.delete(Horse, { id: id })
    }
}