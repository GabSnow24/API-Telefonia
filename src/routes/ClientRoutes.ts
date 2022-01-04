import { Router } from "express";
import { ClientControllers } from "../controllers/ClientControllers";
import { ClientMiddleware } from "../middleware/ClientMiddleware";

const ClientRoutes = Router();

ClientRoutes.get("/client", new ClientControllers().readAll);
ClientRoutes.post("/client", new ClientControllers().create);
ClientRoutes.get("/client/:id", new ClientControllers().readOne);
ClientRoutes.delete("/client/:id", new ClientControllers().delete);
ClientRoutes.put("/client/:id", new ClientControllers().update);

export { ClientRoutes };
