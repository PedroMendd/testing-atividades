import { prisma } from "../../database/prisma";
import {
  productCreateBodyMock,
  productUpdateBodyMock,
} from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: update products", () => {
  test("should be able to update product successfully", async () => {
    const product = await prisma.product.create({
      data: productCreateBodyMock,
    });

    const data = await request
      .patch(`/products/${product.id}`)
      .send(productUpdateBodyMock)
      .expect(200)
      .then((response) => response.body);

    const newProduct = { ...product, ...productUpdateBodyMock };

    expect(data).toStrictEqual(newProduct);
  });
});
