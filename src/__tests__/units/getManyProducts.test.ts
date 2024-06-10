import { ProductServices } from "../../services/product.services";
import { prismaMock } from "../__mocks__/prisma";
import {
  productCreateBodyListMock,
  productListMock,
} from "../__mocks__/product.mock";
import { productDefaultExpects } from "../utils/productDefaultExpect";

describe("Unit test: get many products", () => {
  test("get many products should work correctly", async () => {
    prismaMock.product.findMany.mockResolvedValue(productListMock);
    const productServices = new ProductServices();

    const data = await productServices.getMany();

    expect(data).toHaveLength(productListMock.length);
    productDefaultExpects(data[0], productListMock[0]);
    productDefaultExpects(data[1], productListMock[1]);
  });
});
