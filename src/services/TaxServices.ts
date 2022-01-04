import prismaClient from "../prisma";



class TaxServices {

  async create(data: any) {
    try {
      const filme = await prismaClient.tax.create({
        data: data,
      });
      return filme;
    } catch (error) {
      const responseError = { created: false, message: 'Não foi possível criar a tarifa'}
      return responseError
    }
  }

  async readOne(ID: any) {
    try {
      const data = await prismaClient.tax.findUnique({
        where: {
          id: ID,
        },
      });
      return data;
    } catch (error) {
      const responseError = { read: false, message: 'Não foi possível ler a tarifa'}
      return responseError
    }
  }

  async readAll(datas:any) {
    try {
      const data = await prismaClient.tax.findMany({
        orderBy: {
          created_at: "desc"
        }
      });
      return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível ler os dados das tarifas'}
      return responseError
    }
  }

  async update(ID: any, data: any) {
    try {
      const filme = await prismaClient.tax.update({
        data: data,
        where: {
          id: ID
        },
      });
      return filme;
    } catch (error) {
      const responseError = { updated: false, message: 'Não foi possível atualizar a tarifa'}
      return responseError
    }
  }

  async delete(ID: any) {
    try {
      const data = await prismaClient.tax.delete({
        where: {
          id: ID
        },
      });
      return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível deletar a tarifa'}
      return responseError
    }
  }


}

export { TaxServices };

