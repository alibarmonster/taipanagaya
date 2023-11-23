import { NextFunction, Request, Response } from 'express';
import { Role } from '../utils';

export const verifyRoles = (...allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log('rRequest ROles: ', req.roles);
    console.log('rRequest user: ', req.user);

    if (req.roles === 'ADMIN') {
      next();
    } else {
      return res.status(401).json({
        message: 'you do not have permission to access this',
      });
    }
  };
};
