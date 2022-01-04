import prismaClient from "../prisma";



class PlanServices {

  async create(data: any) {
    try {
      const filme = await prismaClient.plan.create({
        data: data,
      });
      return filme;
    } catch (error) {
      const responseError = { created: false, message: 'Não foi possível criar o plano'}
      return responseError
    }
  }

  async readOne(ID: any) {
    try {
      const data = await prismaClient.plan.findUnique({
        where: {
          id: ID,
        },
      });
      return data;
    } catch (error) {
      const responseError = { read: false, message: 'Não foi possível ler o plano'}
      return responseError
    }
  }

  async readAll(datas:any) {
    try {
      const data = await prismaClient.plan.findMany({
        orderBy: {
          created_at: "desc"
        }
      });
      return data;
    } catch (error) {
      const responseError = { read: false, message: 'Não foi possível ler os dados dos planos'}
      return responseError
    }
  }

  async update(ID: any, data: any) {
    try {
      const filme = await prismaClient.plan.update({
        data: data,
        where: {
          id: ID
        },
      });
      return filme;
    } catch (error) {
      const responseError = { updated: false, message: 'Não foi possível atualizar o plano'}
      return responseError
    }
  }

  async delete(ID: any) {
    try {
      const data = await prismaClient.plan.delete({
        where: {
          id: ID
        },
      });
      return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível deletar o plano'}
      return responseError
    }
  }


}

export { PlanServices };

