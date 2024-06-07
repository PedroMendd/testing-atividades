import { Router } from "express";
import { ProductControllers } from "../controllers/product.controllers";
import { isProductIdValid } from "../middlewares/isProductIdValid.middleware";

export const productRouter = Router();

const productControllers = new ProductControllers();

productRouter.post("/", productControllers.create);
productRouter.get("/", productControllers.getMany);
productRouter.patch(
  "/:id",
  isProductIdValid.execute,
  productControllers.update
);
productRouter.delete(
  "/:id",
  isProductIdValid.execute,
  productControllers.delete
);
