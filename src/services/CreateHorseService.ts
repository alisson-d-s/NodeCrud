import { AppDataSource } from "../database/AppDataSource";
import { Breed } from "../entities/Breed";
import { Horse } from "../entities/Horse";

type HorseRequest = {
    name: string;
    breedId: number;
};

export class CreateHorseService {
    async execute({ name, breedId }: HorseRequest): Promise<Horse | Error> {

        if (!name){
            return new Error("Name is empty");
        }

        if (!breedId){
            return new Error("BreedId is empty");
        }

        if (await AppDataSource.manager.findOne(Horse, { where: { name: name } })){
            return new Error("Horse already exists");
        }

        const breed = await AppDataSource.manager.findOne(Breed, { where: { id: breedId } })
        if (!breed){
            return new Error("BreedId does not exists!");
        }

        const horse = AppDataSource.manager.create(Horse, {
            name,
            breed,
        });

        await AppDataSource.manager.save(horse);

        return horse;
    }
}