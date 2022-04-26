import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cavalo } from "../models/Cavalo";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "alisson",
    password: "123",
    database: "alisson",
    entities: [Cavalo],
    synchronize: true,
    logging: false,
})

/* AppDataSource.initialize()
    .then(() => {
        console.log("Database initialized!");
    })
    .catch((error) => console.log(error)) */