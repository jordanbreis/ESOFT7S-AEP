import { writeFile } from 'fs/promises'
import { readFile } from 'fs/promises'

class ProductService {

   async createProductList(data) {
      try {

         await writeFile('products.json', JSON.stringify(data, null, 2))
      }
      catch (error) {
         throw new Error('Falha ao salvar a lista de produtos')
      }
   }

   async findProducts() {

      try {
         const productList = await readFile('products.json', "utf-8")
         return JSON.parse(productList)
      }
      catch (error) {
         throw new Error('Falha ao ler a lista de produtos')
      }

   }

   async getStock() {
      try {
         const productList = await this.findProducts()

         const productStock = productList.map(produto => {
            let stock = {
               nome: produto.nome,
               qtde: produto.qtde,
               preco: produto.preco,
               valor_estoque: produto.qtde * produto.preco
            }
            return stock
         })

         return productStock
      } catch (error) {
         throw new Error(error)
      }
   }

}
export default new ProductService()