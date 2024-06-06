import { productDatabase, resetDatabase } from "../../database/database";
import { productListMock } from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: get many products", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("should be able to get many products", async () => {
    productListMock.forEach((product) => {
      productDatabase.push(product);
    });
    const data = await request
      .get("/products")
      .expect(200)
      .then((response) => response.body);

    expect(data).toHaveLength(2);
    expect(data[0]).toStrictEqual(productListMock[0]);
    expect(data[1]).toStrictEqual(productListMock[1]);
  });
});
