import { ProductServices } from "../../services/product.services";
import { prismaMock } from "../__mocks__/prisma";
import { productCreateBodyMock, productMock } from "../__mocks__/product.mock";
import { productDefaultExpects } from "../utils/productDefaultExpect";

describe("Unit test: create product", () => {
  test("create product should work correclty", async () => {
    const productServices = new ProductServices();

    prismaMock.product.create.mockResolvedValue(productMock);
    const data = await productServices.create(productCreateBodyMock);

    expect(data).toBe(productMock);
  });
});
