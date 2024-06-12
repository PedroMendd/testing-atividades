import { productCreateBodyMock } from "../__mocks__/product.mock";
import { productDefaultExpects } from "../utils/productDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: create product", () => {
  test("should be able to create a product successfullt", async () => {
    const data = await request
      .post("/products")
      .send(productCreateBodyMock)
      .expect(201)
      .then((response) => response.body);

    expect(data.id).toBeDefined();
    productDefaultExpects(data, productCreateBodyMock);
  });
});
