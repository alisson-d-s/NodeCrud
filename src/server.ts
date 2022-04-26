import express from "express";
import { AppDataSource } from "./database/dataSource";

AppDataSource.initialize().then(() => {
    console.log("DataSource initialized!");
})
.catch((error) => console.log(error))

const app = express();

app.listen(3000, () => {
    console.log("Server is running!");
});