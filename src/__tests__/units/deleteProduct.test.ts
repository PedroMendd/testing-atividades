import { productDatabase, resetDatabase } from "../../database/database";
import { ProductServices } from "../../services/product.services";
import { productMock } from "../__mocks__/product.mock";

describe("Unit test: delete product", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("delete todo works correctly", () => {
    productDatabase.push(productMock);

    const productServices = new ProductServices();

    productServices.delete(productMock.id);
  });
});
