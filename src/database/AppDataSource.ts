import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cavalo } from "../entities/Cavalo";
import { Test1651079404450 } from "./migrations/1651079404450-Test";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "alisson",
    password: "123",
    database: "alisson",
    entities: [Cavalo],
    synchronize: false,
    logging: false,
    migrations: [
        Test1651079404450
    ],
})

/* AppDataSource.initialize()
    .then(() => {
        console.log("Database initialized!");
    })
    .catch((error) => console.log(error)) */