import { Request, Response } from "express";
import prismaClient from "../prisma";
import { ClientServices } from "../services/ClientServices";
import { hash } from 'bcryptjs';
import { MasterController } from "./MasterController";

class ClientControllers extends MasterController{
  service: any 
  constructor(){
    super(new ClientServices())
    this.service = new ClientServices()
  }
  
  create = async (request: Request, response: Response): Promise<any> => {
    const query = await prismaClient.client.findFirst({
      where:{
        email:request.body.email
      }
    })
    if(query) return response.status(200).json({created:false, message:"Email já cadastrado"})
    request.body.password = await hash(request.body.password, 10);
    const result = await this.service.create(request.body);
    if (!result) return response.status(500).json(result);
    return response.status(200).json(result);
  }


}

export { ClientControllers };
