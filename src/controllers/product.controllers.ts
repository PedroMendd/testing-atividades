import { Request, Response } from "express";
import { IProduct } from "../interfaces/product.interfaces";
import { ProductServices } from "../services/product.services";

export class ProductControllers {
  create(req: Request, res: Response): Response<IProduct> {
    const productServices = new ProductServices();

    const response = productServices.create(req.body);

    return res.status(201).json(response);
  }

  getMany(req: Request, res: Response): Response<IProduct> {
    const productServices = new ProductServices();

    const response = productServices.getMany();

    return res.status(200).json(response);
  }

  update(req: Request, res: Response): Response<IProduct> {
    const productServices = new ProductServices();

    const id = req.params.id;

    const response = productServices.update(req.body, Number(id));

    return res.status(200).json(response);
  }

  delete(req: Request, res: Response): Response<void> {
    const productServices = new ProductServices();

    const id = req.params.id;

    productServices.update(req.body, Number(id));

    return res.status(204).json();
  }
}
