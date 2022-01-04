import { Router } from "express";
import { TaxControllers } from "../controllers/TaxControllers";

const TaxRoutes = Router();

TaxRoutes.get("/tax", new TaxControllers().readAll);
TaxRoutes.post("/tax", new TaxControllers().create);
TaxRoutes.get("/tax/:id", new TaxControllers().readOne);
TaxRoutes.delete("/tax/:id", new TaxControllers().delete);
TaxRoutes.put("/tax/:id", new TaxControllers().update);

export { TaxRoutes };
