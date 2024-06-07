import { NextFunction, Request, Response } from "express";
import { productDatabase } from "../database/database";

export class isProductIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    if (!productDatabase.some((product) => product.id === Number(id))) {
      return res.status(404).json({ message: "Product not found." });
    }

    next();
  }
}
