import { ProductServices } from "../../services/product.services";
import { prismaMock } from "../__mocks__/prisma";
import {
  productCreateBodyMock,
  productMock,
  productUpdateBodyMock,
} from "../__mocks__/product.mock";

describe("Unit test: update product", () => {
  test("update product should work correctly", async () => {
    const productServices = new ProductServices();

    const newProductExpect = { ...productMock, ...productUpdateBodyMock };

    prismaMock.product.update.mockResolvedValue(newProductExpect);
    const data = await productServices.update(
      productUpdateBodyMock,
      productMock.id
    );

    expect(data).toStrictEqual(newProductExpect);
  });
});
