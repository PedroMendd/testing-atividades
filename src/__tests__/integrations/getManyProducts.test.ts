import { prisma } from "../../database/prisma";
import { productCreateBodyListMock } from "../__mocks__/product.mock";
import { productDefaultExpects } from "../utils/productDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: get many products", () => {
  test("should be able to get many products successfully", async () => {
    await prisma.product.createMany({ data: productCreateBodyListMock });

    const data = await request
      .get("/products")
      .expect(200)
      .then((response) => response.body);

    expect(data).toHaveLength(2);

    expect(data[0].id).toBeDefined();
    productDefaultExpects(data[0], productCreateBodyListMock[0]);

    expect(data[1].id).toBeDefined();
    productDefaultExpects(data[1], productCreateBodyListMock[1]);
  });
});
