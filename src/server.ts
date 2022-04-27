import express from "express";
import { AppDataSource } from "./database/AppDataSource";

AppDataSource.initialize().then(() => {
    console.log("DataSource has been initialized!");
})
.catch((error) => console.log(error))

const app = express();

app.listen(3000, () => {
    console.log("Server is running!");
});