import { AppDataSource } from "../database/AppDataSource";
import { Breed } from "../entities/Breed";

type BreedUpdateRequest = {
    id: string;
    name: string;
}

export class UpdateBreedService {
    async execute({ id, name }: BreedUpdateRequest) {

        const idNumber = parseInt(id);

        if (!idNumber){
            return new Error("Invalid Id!");
        }

        const breed = await AppDataSource.manager.findOne(Breed, { where: { id: idNumber } })

        if (!breed){
            return new Error("Breed does not exists!");
        }

        breed.name = name ? name : breed.name;

        await AppDataSource.manager.save(breed);

        return breed;
    }
}