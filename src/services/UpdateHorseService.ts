import { AppDataSource } from "../database/AppDataSource";
import { Breed } from "../entities/Breed";
import { Horse } from "../entities/Horse";

type HorseUpdateRequest = {
    id: string;
    name: string;
    breedId: number;
}

export class UpdateHorseService {
    async execute({ id, name, breedId }: HorseUpdateRequest) {

        const idNumber = parseInt(id);

        if (!idNumber){
            return new Error("Invalid Id!");
        }

        const horse = await AppDataSource.manager.findOne(Horse, { where: { id: idNumber } })
        const breed = await AppDataSource.manager.findOne(Breed, { where: { id: breedId } })

        if (!breed){
            return new Error("Breed does not exists!");
        }
        if (!horse){
            return new Error("Horse does not exists!");
        }

        horse.name = name ? name : horse.name;
        horse.breed = breed;

        await AppDataSource.manager.save(horse);

        return horse;
    }
}