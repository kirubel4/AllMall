import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateData = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({
        error: "Validation failed",
        details: error.errors,
      });
    }
  };
};
