import { Request, Response } from 'express'
import productsService from '../service/productsService'

class ProductController {
  public async createProducts(req: Request, res: Response) {
    productsService.createProductList(req.body)

    return res.status(201).send()
  }
  async findProducts(req: Request, res: Response) {
    const productList = await productsService.findProducts()

    return res.status(200).json(productList)
  }
  async getStock(req: Request, res: Response) {
    const stockList = await productsService.getStock()
    return res.status(200).json(stockList)
  }

}
export default new ProductController()