import "reflect-metadata";
import { DataSource } from "typeorm";
import { Breed } from "../entities/Breed";
import { Horse } from "../entities/Horse";
import { CreateHorseAndBreed1651153516876 } from "./migrations/1651153516876-CreateHorseAndBreed";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "psql-container",
    //host: "localhost",
    port: 5432,
    username: "alisson",
    password: "123",
    database: "alisson",
    entities: [
        Horse,
        Breed
    ],
    synchronize: false,
    logging: false,
    migrations: [
        CreateHorseAndBreed1651153516876
    ],
})

// AppDataSource.initialize().then(() => {
//     console.log("DataSource has been initialized!");
// })
// .catch((error) => console.log(error))