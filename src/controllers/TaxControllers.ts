import { TaxServices } from "../services/TaxServices";
import { MasterController } from "./MasterController";

class TaxControllers extends MasterController {
  constructor(){
    super(new TaxServices()) 
  }

}

export { TaxControllers };
