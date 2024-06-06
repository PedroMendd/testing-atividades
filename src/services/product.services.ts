import { generateId, productDatabase } from "../database/database";
import { IProduct, TCreateProductBody } from "../interfaces/product.interfaces";

export class ProductServices {
  create(body: TCreateProductBody): IProduct {
    const newProduct = { id: generateId(), ...body };

    productDatabase.push(newProduct);

    return newProduct;
  }

  getMany(): IProduct[] {
    return productDatabase;
  }
}
