import { productDatabase, resetDatabase } from "../../database/database";
import { productMock } from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: delete product", () => {
  beforeEach(() => {
    resetDatabase();
  });
  test("should delete a product successfully", async () => {
    productDatabase.push(productMock);

    await request.delete(`/products/${productMock.id}`).expect(204);
  });

  test("should throw error when product is invalid", async () => {
    const data = await request
      .delete(`/products/1`)
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Product not found.");
  });
});
