import { prisma } from "../../database/prisma";
import { productCreateBodyMock } from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: delete product", () => {
  test("should be able to delete a product successfully", async () => {
    const product = await prisma.product.create({
      data: productCreateBodyMock,
    });

    await request.delete(`/products/${product.id}`).expect(204);
  });
});
