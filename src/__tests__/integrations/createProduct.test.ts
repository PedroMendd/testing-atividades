import { resetDatabase } from "../../database/database";
import { productCreateBodyMock, productMock } from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: create product", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("should be able to create a product successfuly", async () => {
    const data = await request
      .post("/products")
      .send(productCreateBodyMock)
      .expect(201)
      .then((response) => response.body);

    expect(data).toStrictEqual(productMock);
  });
});
