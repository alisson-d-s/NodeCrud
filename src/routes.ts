import { Router } from "express";
import { CreateBreedController } from "./controllers/CreateBreedController";
import { DeleteBreedController } from "./controllers/DeleteBreedController";
import { GetAllBreedController } from "./controllers/GetAllBreedController";

const routes = Router();

routes.get("/breed", new GetAllBreedController().handle);
routes.post("/breed", new CreateBreedController().handle);
routes.delete("/breed/:id", new DeleteBreedController().handle);

export { routes };