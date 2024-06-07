import { productDatabase, resetDatabase } from "../../database/database";
import { productMock, productUpdateBodyMock } from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: update product", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("should update product successfully", async () => {
    productDatabase.push(productMock);

    const data = await request
      .patch(`/products/${productMock.id}`)
      .send(productUpdateBodyMock)
      .expect(200)
      .then((response) => response.body);

    expect(data.id).toBe(productMock.id);
    expect(data.name).toBe(productUpdateBodyMock.name);
    expect(data.description).toBe(productUpdateBodyMock.description);
    expect(data.price).toBe(productUpdateBodyMock.price);
  });

  test("should throw error when product is invalid", async () => {
    const data = await request
      .patch(`/products/1`)
      .send(productUpdateBodyMock)
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Product not found.");
  });
});
