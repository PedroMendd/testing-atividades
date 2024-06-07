import { productDatabase, resetDatabase } from "../../database/database";
import { ProductServices } from "../../services/product.services";
import { productMock, productUpdateBodyMock } from "../__mocks__/product.mock";

describe("Unit test: update product", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("update product works correctly", () => {
    productDatabase.push(productMock);

    const productServices = new ProductServices();

    const data = productServices.update(productUpdateBodyMock, productMock.id);

    expect(data.id).toBe(productMock.id);
    expect(data.name).toBe(productUpdateBodyMock.name);
    expect(data.description).toBe(productUpdateBodyMock.description);
    expect(data.price).toBe(productUpdateBodyMock.price);
  });
});
