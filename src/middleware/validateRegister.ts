import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRegister =
  (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

export default validateRegister;
