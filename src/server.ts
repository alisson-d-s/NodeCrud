import express from "express";
import { AppDataSource } from "./database/AppDataSource";
import { routes } from "./routes";

AppDataSource.initialize().then(() => {
    console.log("DataSource has been initialized!");

    const app = express();

    app.use(express.json());
    app.use(routes);

    app.listen(3000, () => {
        console.log("Server is running!");
    });
})
.catch((error) => console.log(error))
