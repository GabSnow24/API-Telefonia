import { Router } from "express";
import { PlanControllers } from "../controllers/PlanControllers";

const PlanRoutes = Router();

PlanRoutes.get("/plan", new PlanControllers().readAll);
PlanRoutes.post("/plan", new PlanControllers().create);
PlanRoutes.get("/plan/:id", new PlanControllers().readOne);
PlanRoutes.delete("/plan/:id", new PlanControllers().delete);
PlanRoutes.put("/plan/:id", new PlanControllers().update);

export { PlanRoutes };
