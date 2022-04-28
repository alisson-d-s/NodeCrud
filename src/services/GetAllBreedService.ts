import { AppDataSource } from "../database/AppDataSource"
import { Breed } from "../entities/Breed"

export class GetAllBreedService {

    async execute(){
        const breed = await AppDataSource.manager.find(Breed);

        return breed;
    }
}
