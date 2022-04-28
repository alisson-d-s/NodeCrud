import { Router } from "express";
import { CreateBreedController } from "./controllers/CreateBreedController";
import { CreateHorseController } from "./controllers/CreateHorseController";
import { DeleteBreedController } from "./controllers/DeleteBreedController";
import { DeleteHorseController } from "./controllers/DeleteHorseController";
import { GetAllBreedController } from "./controllers/GetAllBreedController";
import { GetAllHorseController } from "./controllers/GetAllHorseController";
import { UpdateBreedController } from "./controllers/UpdateBreedController";
import { UpdateHorseController } from "./controllers/UpdateHorseController";

const routes = Router();

routes.get("/breed", new GetAllBreedController().handle);
routes.post("/breed", new CreateBreedController().handle);
routes.delete("/breed/:id", new DeleteBreedController().handle);
routes.put("/breed/:id", new UpdateBreedController().handle);

routes.get("/horse", new GetAllHorseController().handle);
routes.post("/horse", new CreateHorseController().handle);
routes.delete("/horse/:id", new DeleteHorseController().handle);
routes.put("/horse/:id", new UpdateHorseController().handle);

export { routes };