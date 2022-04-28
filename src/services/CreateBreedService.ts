import { AppDataSource } from "../database/AppDataSource";
import { Breed } from "../entities/Breed";

type BreedRequest = {
    name: string;
};

export class CreateBreedService {
    async execute({name}: BreedRequest): Promise<Breed | Error> {

        if (!name){
            return new Error("Name is empty");
        }

        if (await AppDataSource.manager.findOne(Breed, { where: { name: name } })){
            return new Error("Breed already exists");
        }

        const breed = AppDataSource.manager.create(Breed, {
            name
        });

        await AppDataSource.manager.save(breed);

        return breed;
    }
}