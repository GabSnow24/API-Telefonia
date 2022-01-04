import { PlanServices } from "../services/PlanServices";
import { MasterController } from "./MasterController";

class PlanControllers extends MasterController{
    constructor(){
        super(new PlanServices())
    }
}
export { PlanControllers } 
