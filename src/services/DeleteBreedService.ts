import { AppDataSource } from "../database/AppDataSource";
import { Breed } from "../entities/Breed";

export class DeleteBreedService {
    async execute(id: number) {

        if (!await AppDataSource.manager.findOne(Breed, { where: { id: id }})){
            return new Error("Breed does not exists");
        }

        await AppDataSource.manager.delete(Breed, { id: id })
    }
}